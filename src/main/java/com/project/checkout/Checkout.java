package com.project.checkout;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.CatalogDao;
import com.project.dao.OrderDao;
import com.project.entity.Order;
import com.project.entity.OrderItem;
import com.project.shoppingcart.ShoppingCart;

@Service
public class Checkout {

	@Autowired 
	private CatalogDao catalogDao;
	
	@Autowired
	private OrderDao orderDao;

	private long orderID;
	private List<OrderItem> items = new ArrayList<>();
	private Order order;
	private int  quantity;
	private double price;
	private int accID;

	
	public Checkout(int accID, ShoppingCart cart) {
		this.accID = accID;
		this.orderID = cart.getOrderId();
		this.order = orderDao.getById(orderID);
		
	}
	
	/*
	 * Get and Set item name of eyewear
	*/
}
