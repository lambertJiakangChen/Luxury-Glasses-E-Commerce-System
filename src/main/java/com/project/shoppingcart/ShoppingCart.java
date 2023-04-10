package com.project.shoppingcart;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.catalog.CatalogService;
import com.project.dao.LoadDatabase;
import com.project.dao.OrderDao;
import com.project.dao.OrderItemDao;
import com.project.dao.SequenceDao;
import com.project.dao.EventDao;
import com.project.entity.Address;
import com.project.entity.Item;
import com.project.entity.Order;
import com.project.entity.OrderItem;
import com.project.entity.VisitEvent;
import com.project.entity.types.EventStatus;
import com.project.entity.types.OrderStatus;
import com.project.sequence.SequenceService;

@Service
public class ShoppingCart {
	
	private static ShoppingCart cart = new ShoppingCart();
	private List<OrderItem> items = new ArrayList<>();
	private Long orderId;
	
	@Autowired
	OrderDao orderDao;
	
	@Autowired
	OrderItemDao orderItemDao;
	
	@Autowired
	EventDao eventDao;
	
	@Autowired
	SequenceService sequence;
	
	@Autowired 
	CatalogService catalogService;
	
	
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	
	private ShoppingCart() {
		
	}
	
	public static ShoppingCart getInstance() {
		return cart;
	}
	
	public static ShoppingCart getCart() {
		return cart;
	}

	public static void setCart(ShoppingCart cart) {
		ShoppingCart.cart = cart;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	
	

	@Override
	public String toString() {
		String items = "";
		for (OrderItem oi: this.items) {
			items += oi.toString() + ", ";
			
			
		}
		return "ShoppingCart [items=" + items + ", orderId=" + orderId + "]";
	}
	
	public List<OrderItem> getAllItems() throws Exception {
		if (items == null || items.isEmpty()) {
			throw new Exception("no items in cart");
		}
		return this.items;
	}

	/**
	 * Adds an item to the shopping cart. 
	 * Creates new order entry in the PurchaseOrder table/DB if new order.
	 * @param item - the item to add to cart
	 * @param accountId - the account associated with the purchase order, if logded in. null if not logged in. 
	 * 						provided by controller, httpsession.
	 * @param addressId - the address associated with the account/purchase order if logged in. null if not logged in
	 * 						OR account has not set an address. provided by controller, httpsession
	 */

	public void addItem(String itemName, Long accountId, Address address) {
		Item item = catalogService.searchItemByName(itemName).iterator().next();
		OrderItem orderItem;
		
		if (items.isEmpty() || items.size() == 0) {
			// if there are no items in the cart -> create an order in the PurchaseOrder table and new OrderItem
			orderId = sequence.findNextSequenceByService("ORDER");

			log.info("Loading New Order: " + orderDao.save(new Order(orderId, accountId, OrderStatus.NOT_ORDERED, address, Calendar.getInstance())));
			log.info("Preloading " + eventDao.save(new VisitEvent((long) eventDao.count()+1, EventStatus.CART, accountId, Calendar.getInstance())));
			sequence.updateNextSequence("ORDER");
		
		}
		else {
			// else if order exists in PurchaseOrder table -> update Order Item
			orderItem = findOrderItem(orderId, item.getId());
			if (orderItem != null) {
				for (OrderItem oi: this.items) {
					if (oi.getItem().getId() == item.getId()) {
						oi.setQuantity(orderItem.getQuantity() + 1);
						oi.setTotalPrice(orderItem.getTotalPrice() + item.getPrice());
						saveOrderItemToTable(oi);
					}
				}
				return;
			}			
		}
		
		orderItem = new OrderItem();
		orderItem.setId(sequence.findNextSequenceByService("ORDER_ITEM"));
		sequence.updateNextSequence("ORDER_ITEM");
		orderItem.setItem(item);
		orderItem.setQuantity(1);
		orderItem.setTotalPrice(item.getPrice());
		orderItem.setOrderId(orderId);
		saveOrderItemToTable(orderItem);
		
		// update cart 
		this.items.add(orderItem);
	}
	
	/**
	 * Removes Item from cart
	 * @pre item must be present in cart and have a quantity of at least 1
	 */
	public void removeItem(String itemName) {
		Item item = catalogService.searchItemByName(itemName).iterator().next();
		
		// find and remove OrderItem in Table
		log.info("REMOVING ORDER ITEM");
		OrderItem oi = findOrderItem(orderId, item.getId());
		orderItemDao.delete(oi);;
		orderItemDao.flush();
		
		// find and remove order if empty cart.
		if (orderIsEmpty(orderId)) {
			log.info("REMOVING EMPTY ORDER");
			orderDao.delete(findOrder(orderId));;
		}
		
		// remove Item from cart
		log.info("REMOVING ITEM FROM CART");
		for (OrderItem o: this.items) {
			if (o.getItem().getId() == item.getId()) {
				oi = o;
			}
		}
		this.items.remove(oi);
	}
	

	/**
	 * @pre item must be present in cart already and have quantity of at least 1
	 */
	public void editItem(String itemName, int quantity) {
		Item item = catalogService.searchItemByName(itemName).iterator().next();
		// find and update OrderItem in Table
		OrderItem oi = findOrderItem(orderId, item.getId());
		oi.setQuantity(quantity);
		oi.setTotalPrice(quantity * oi.getItem().getPrice());
		orderItemDao.saveAndFlush(oi);
		
		// update Items in cart
		for (OrderItem x: items) {
			if (x.getId() == oi.getId()) {
				x.setQuantity(quantity);
				x.setTotalPrice(quantity * x.getItem().getPrice());
			}
		}
	}
	
	public Double getTotal() {
		double result = 0.0;
		for (OrderItem oi: items) {
			result += oi.getTotalPrice();
		}
		return result;
	}
	
	
	//----------------------------------------------------------------
	private OrderItem findOrderItem(Long orderId, Long itemId) {
		for(OrderItem oi: orderItemDao.findAll()) {
			
			if (oi.getOrderId() == orderId && oi.getItem().getId() == itemId) {
				return oi;
			}
		}
		 return null;
	}
	

	private void saveOrderItemToTable(OrderItem oi) {
		log.info("Loading OrderItem: " + orderItemDao.saveAndFlush(oi));
	}
	
	private boolean orderIsEmpty(Long orderId) {
		
		for (OrderItem oi: orderItemDao.findAll()) {
			if (oi.getOrderId() == orderId) {
				return false;
			}
		}
		return true;
			
	}
	
	private Order findOrder(Long orderId) {
		for (Order o: orderDao.findAll()) {
			if (o.getId() == orderId)
				return o;
		}
		return null;
	}
	
}
