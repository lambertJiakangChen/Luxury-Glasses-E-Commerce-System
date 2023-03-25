package com.project.entity;

import java.util.Calendar;
import com.project.entity.Address;
import com.project.entity.types.OrderStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "PurchaseOrder")
public class Order {
	
	@Id @GeneratedValue
	private Long id;
	private OrderStatus status;
	private Long accountId;
	private Calendar calendar;
	@ManyToOne
	private Address address;
	
	
	public Order(Long id, Long accountId, OrderStatus status, Address address, Calendar calendar) {
		super();
		this.id = id;
		this.status = status;
		this.accountId = accountId;
		this.calendar = calendar;
		this.address = address;
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

	
	public int getmonth() {
		return this.calendar.get(Calendar.MONTH);
	}

	public Address getAddressId() {
		return address;
	}

	public void setAddressId(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		String address = "";
		if(this.address  != null) {
			address += address.toString();
		}
		return "Order [id=" + id + ", accountId=" + accountId + ", status=" + status + 
				", addressId=" + address + ", data=" + calendar.getTime() + "]";

	}

}
