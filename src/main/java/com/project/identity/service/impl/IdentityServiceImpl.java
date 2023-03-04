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
	public void registerAccount(String username, String fName, String lName, String email, String password, String type) throws Exception {
		
		//register regular account
		
		// username already exists >> choose another username
		if (usernameExists(username)) {
			throw new Exception("Username Already Exists.");
		}
		
		// add account to DB
		long id = accountDao.count() + 1;
		accountDao.save(new Account(id, username, fName, lName, email, password, type, null));
		
		
		
	}
	
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

//	@Override
//	public void editAccountDetails(String property, String oldValue, String newValue) {
//		
//		switch(property) {
//		case "username":
//			updateUsername(newValue);
//		case "firstName":
//			updateFirstName(newValue);
//		case "lastName":
//			updateLastName(newValue);
//		case "address":
//			updateAddress(newValue);
//		case "email":
//			updateEmail(newValue);
//		case "password":
//			updatePassword(oldValue, newValue);
//		}
//		
//	}
	
	@Override 
	public void editUsername(Long accId, String oldValue, String newValue) {
		Account acc = accountDao.getById(accId);
		acc.setUsername(newValue);
		
		accountDao.saveAndFlush(acc);
		
		System.out.println("Username updated");
	}

	@Override
	public void editPassword(Long accId, String oldValue, String newValue) throws Exception {
		Account acc = accountDao.getById(accId);
		if(!acc.getPassword().equals(oldValue)) {
			throw new Exception("Current Password is incorrect.");
		}
		acc.setPassword(newValue);
		
		accountDao.saveAndFlush(acc);
		System.out.println("Password updated");
	}

	@Override
	public void editFirstName(Long accId, String oldValue, String newValue) {
		Account acc = accountDao.getById(accId);
		acc.setfName(newValue);
		
		accountDao.saveAndFlush(acc);
		
		System.out.println("First Name updated");
		
	}

	@Override
	public void editLastName(Long accId, String oldValue, String newValue) {
		Account acc = accountDao.getById(accId);
		acc.setlName(newValue);
		
		accountDao.saveAndFlush(acc);
		
		System.out.println("Last Name updated");
		
	}

	@Override
	public void editEmail(Long accId, String oldValue, String newValue) {
		Account acc = accountDao.getById(accId);
		acc.setEmail(newValue);
		
		accountDao.saveAndFlush(acc);
		
		System.out.println("Email updated");
		
	}
	
	protected boolean usernameExists(String username) {
		
		for (Account acc: accountDao.findAll()) {
			
			if (acc.getUsername().equals(username)) {
				return true;
			}
		}
		
		return false;
		
	}

	
}
