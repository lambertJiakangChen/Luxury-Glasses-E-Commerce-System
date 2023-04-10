package com.project.checkout;

import java.util.Calendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.AccountDao;
import com.project.dao.CatalogDao;
import com.project.dao.EventDao;
import com.project.dao.LoadDatabase;
import com.project.dao.OrderDao;
import com.project.entity.Account;
import com.project.entity.Address;
import com.project.entity.Order;
import com.project.entity.VisitEvent;
import com.project.entity.types.EventStatus;
import com.project.entity.types.OrderStatus;
import com.project.shoppingcart.ShoppingCart;

@Service
public class CheckoutService {

	@Autowired CatalogDao catalogDao;
	@Autowired OrderDao orderDao;
	@Autowired AccountDao accountDao;
	@Autowired
	EventDao eventDao;

	private Order order;
	private Address shippingAddress;
	private Account account;
	private ShoppingCart cart;
	
	private long orderID;
	
//	private List<OrderItem> items = new ArrayList<>();

	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
	
	public CheckoutService() {
		
	}

	public CheckoutService(Account acc, ShoppingCart cart) {
		this.account = acc;
		this.cart = cart;
		getAccID();
		this.orderID = cart.getOrderId();
		this.order = orderDao.getById(orderID);
			
	}
	
	public void setCheckout(Account acc, ShoppingCart cart) {
		this.account = acc;
		this.cart = cart;
		getAccID();
		this.orderID = cart.getOrderId();
		this.order = orderDao.getById(orderID);
	}

	/**
	 * @return the accID
	 */
	public long getAccID() {
		if (account == null) {
			this.account = new Account(accountDao.count()+1);
//			long guestID = new Random().nextLong();
//			
//			while(!accountDao.existsById(guestID)) {
//				guestID = new Random().nextLong();
//			}
//			setAccID(guestID);
		}
		
		return this.account.getId();
	}


	/**
	 * @param accID the accID to set
	 */
	public void setAccID(long accID) {
		this.account.setId(accID);
	}


	/**
	 * @return the orderID
	 */
	public long getOrderID() {
		return orderID;
	}


	/**
	 * @param orderID the orderID to set
	 */
	public void setOrderID(long orderID) {
		this.orderID = orderID;
	}


//	/**
//	 * @return the items
//	 */
//	public List<OrderItem> getItems() {
//		return items;
//	}
//
//
//	/**
//	 * @param items the items to set
//	 */
//	public void setItems(List<OrderItem> items) {
//		this.items = items;
//	}


	/**
	 * @return the order
	 */
	public Order getOrder() {
		return order;
	}


	/**
	 * @param order the order to set
	 */
	public void setOrder(Order order) {
		this.order = order;
	}


	/**
	 * @return the price
	 */
	public double getPrice() {
		return cart.getTotal();
	}

	
	/**
	 * @return the shippingAddress
	 */
	public Address getShippingAddress() {
		return shippingAddress;
	}

	/**
	 * @param shippingAddress the shippingAddress to set
	 */
	public void setShippingAddress(Address shippingAddress) {
		this.shippingAddress = shippingAddress;
	}


	public void confirmedCheckout(Order newOrder) {
		log.info("Preloading " + eventDao.save(new VisitEvent((long) eventDao.count()+1, EventStatus.PURCHASE, (long) newOrder.getaccountId(), Calendar.getInstance())));
		newOrder.setStatus(OrderStatus.ORDERED);
		orderDao.save(newOrder);
		
	}



	
	
}
