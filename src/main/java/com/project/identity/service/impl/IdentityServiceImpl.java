package com.project.identity.service.impl;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.project.dao.AccountDao;
import com.project.entity.Account;
import com.project.identity.service.IdentityService;

@Service
public class IdentityServiceImpl implements IdentityService{
	
	@Autowired
	AccountDao accountDao;
	
	@Override
	public boolean isRegisteredAccount(String username, String password) {
		if (findAccountbyUserAndPass(username, password) != null) {
			return true;
		}
		return false;
	}
	
	@Override
	public Account findAccountbyUserAndPass(String username, String password) {
		System.out.println("Finding Account by User and Pass");
				
		for (Account acc: accountDao.findAll()) {
			
			if (acc.getUsername().equals(username) && acc.getPassword().equals(password)) {
				return acc;
			}
		}
		
		return null;
	}

	@Override
	public Collection<Account> findAllAccounts() {
		return accountDao.findAll();
	}

	@Override
	public void editAccountDetails(String property, String oldValue, String newValue) {
		
		switch(property) {
		case "username":
			updateUsername(newValue);
		case "firstName":
			updateFirstName(newValue);
		case "lastName":
			updateLastName(newValue);
		case "address":
			updateAddress(newValue);
		case "email":
			updateEmail(newValue);
		case "password":
			updatePassword(oldValue, newValue);
		}
		
	}
	private void updatePassword(String oldValue, String newValue) {
		// TODO Auto-generated method stub
		
	}

	private void updateEmail(String newValue) {
		// TODO Auto-generated method stub
		
	}

	private void updateAddress(String newValue) {
		// TODO Auto-generated method stub
		
	}

	private void updateLastName(String newValue) {
		// TODO Auto-generated method stub
		
	}

	private void updateFirstName(String newValue) {
		// TODO Auto-generated method stub
		
	}

	private void updateUsername(String newValue) {
		// TODO Auto-generated method stub
		
	}
	
}
