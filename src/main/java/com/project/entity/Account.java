package com.project.entity;

import java.util.ArrayList;
import java.util.List;

import com.project.entity.types.AccountType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Account")
public class Account {
	
	@Id @GeneratedValue
	private Long id;
	private String username;
	private String fName;
	private String lName;
	private String email;
	private String password;
	private AccountType accountType;
	private Long addressId;
	private Address address;
	
	
	public Account(Long id, String username, String fName, String lName, String email, String password,
			AccountType accountType, Address address) {
		super();
		this.id = id;
		this.username = username;
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.password = password;
		this.accountType = accountType;
		this.address = address;
	}


	public Account() {
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getfName() {
		return fName;
	}


	public void setfName(String fName) {
		this.fName = fName;
	}


	public String getlName() {
		return lName;
	}


	public void setlName(String lName) {
		this.lName = lName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public AccountType getAccountType() {
		return accountType;
	}


	public void setAccountType(AccountType accountType) {
		this.accountType = accountType;
	}


	public Address getAddress() {
		return address;
	}


	public void setAddress(Address address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Account [id=" + id + ", username=" + username + ", fName=" + fName + ", lName=" + lName + ", email="
				+ email + ", password=" + password + ", accountType=" + accountType + ", " + address.toString() + "]";
	}

}
