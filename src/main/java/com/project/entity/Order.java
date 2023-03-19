package com.project.entity;

import java.util.Calendar;

import com.project.entity.types.OrderStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PurchaseOrder")
public class Order {
	
	@Id @GeneratedValue
	private Long id;
	private OrderStatus status;
	private Long accountId;
	private Long addressId;
	private Calendar calendar;
	
	
	public Order(Long id, Long accountId, OrderStatus status, Long addressId, Calendar calendar) {
		super();
		this.id = id;
		this.status = status;
		this.accountId = accountId;
		this.addressId = addressId;
		this.calendar = calendar;
	}

	public Order() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getaccountId() {
		return accountId;
	}

	public void setaccountId(Long accountId) {
		this.accountId = accountId;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public void setStatus(OrderStatus status) {
		this.status = status;
	}

	public Long getAddressId() {
		return addressId;
	}

	public void setAddressId(Long addressId) {
		this.addressId = addressId;
	}
	
	public int getmonth() {
		return this.calendar.get(Calendar.MONTH);
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", accountId=" + accountId + ", status=" + status + ", addressId="
				+ addressId + ", data=" + calendar.getTime() + "]";
	}

}
