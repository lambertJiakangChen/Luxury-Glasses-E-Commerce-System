package com.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "OrderItem")
public class OrderItem {
	
	@Id @GeneratedValue
	private Long id;
	@ManyToOne
	private Item item;
	private int quantity;
	private Double totalPrice;
	private Long orderId;
	
	
	
	public OrderItem(Long id, Item item, int quantity, Double totalPrice, Long orderId) {
		super();
		this.id = id;
		this.item = item;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
		this.orderId = orderId;
	}


	public OrderItem() {
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Item getItem() {
		return item;
	}


	public void setItem(Item item) {
		this.item = item;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public Double getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}


	public Long getOrderId() {
		return orderId;
	}


	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}


	@Override
	public String toString() {
		return "OrderItem [id=" + id + ", item=" + item.getId() + ", quantity=" + quantity + ", totalPrice=" + totalPrice
				+ ", orderId=" + orderId + "]";
	}
	
}
