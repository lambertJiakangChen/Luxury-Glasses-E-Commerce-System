package com.project.entity;

import java.util.Calendar;
import com.project.entity.types.EventStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name = "VisitEvent")
public class VisitEvent {
	
	@Id @GeneratedValue
	private Long id;
	private EventStatus status;
	private Long accountId;
	private Calendar calendar;
	
	public VisitEvent(Long id, EventStatus status, Long accountId, Calendar calendar) {
		super();
		this.id = id;
		this.status = status;
		this.accountId = accountId;
		this.calendar = calendar;
	}
	
	public VisitEvent(){
		
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
		
	public EventStatus getStatus() {
		return status;
	}

	public void setStatus(EventStatus status) {
		this.status = status;
	}
	
	public Long getaccountId() {
		return accountId;
	}

	public void setaccountId(Long accountId) {
		this.accountId = accountId;
	}
	
	@Override
	public String toString() {
		return "Event [id=" + id + ", accountId=" + accountId + ", status=" + status + 
				", data=" + calendar.getTime() + "]";

	}
	

}
