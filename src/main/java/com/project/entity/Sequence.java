package com.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Keeps track of next ids available to use for the different services/tables
 *
 */

@Entity
@Table(name = "Sequence")
public class Sequence {
	
	@Id
	private String service;
	
	private Long nextAvailableId;
	
	public Sequence() {

	}
	
	public Sequence(String service, Long nextAvailableId) {
		super();
		this.service = service;
		this.nextAvailableId = nextAvailableId;
	}
	
	public String getService() {
		return service;
	}
	
	public void setService(String service) {
		this.service = service;
	}
	
	public Long getNextAvailableId() {
		return nextAvailableId;
	}
	
	public void setNextAvailableId(Long nextAvailableId) {
		this.nextAvailableId = nextAvailableId;
	}

	@Override
	public String toString() {
		return "Sequence [service=" + service + ", nextAvailableId=" + nextAvailableId + "]";
	}
	
	
}
