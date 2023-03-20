package com.project.identity.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.project.dao.AccountDao;
import com.project.dao.EventDao;
import com.project.dao.LoadDatabase;
import com.project.entity.Account;
import com.project.entity.VisitEvent;
import com.project.entity.types.AccountType;
import com.project.entity.types.EventStatus;
import com.project.identity.service.IdentityService;

@Service
public class IdentityServiceImpl implements IdentityService{
	
	@Autowired
	AccountDao accountDao;
	
	@Autowired
	EventDao eventDao;
	
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
	
	@Override
	public void registerAccount(String username, String fName, String lName, String email, String password, AccountType type) throws Exception {
				
		// username already exists >> choose another username
		if (usernameExists(username)) {
			throw new Exception("Username Already Exists.");
		}

		if ( !type.name().equals(AccountType.ADMIN.name()) && !type.name().equals(AccountType.REGULAR.name()) ) {
			throw new Exception("Invalid Account Type");	
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
				log.info("Preloading " + eventDao.save(new VisitEvent((long) eventDao.count()+1, EventStatus.VIEW, acc.getId(), Calendar.getInstance())));
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
	public Account editUsername(String username, String password, String oldValue, String newValue) {
		Account acc = findAccountbyUserAndPass(username, password);
		acc.setUsername(newValue);
		
		accountDao.saveAndFlush(acc);
		
		System.out.println("Username updated");
		
		return acc;
	}

	@Override
	public Account editPassword(String username, String password, String oldValue, String newValue) throws Exception {
		Account acc = findAccountbyUserAndPass(username, password);
		if(!acc.getPassword().equals(oldValue)) {
			throw new Exception("Current Password is incorrect.");
		}
		acc.setPassword(newValue);
		
		accountDao.saveAndFlush(acc);
		System.out.println("Password updated");
		
		return acc;
	}

	@Override
	public Account editFirstName(String username, String password, String oldValue, String newValue) {
		Account acc = findAccountbyUserAndPass(username, password);
		acc.setfName(newValue);
		
		accountDao.saveAndFlush(acc);
		
		System.out.println("First Name updated");
		
		return acc;
	}

	@Override
	public Account editLastName(String username, String password, String oldValue, String newValue) {
		Account acc = findAccountbyUserAndPass(username, password);
		acc.setlName(newValue);
		
		accountDao.saveAndFlush(acc);
		
		System.out.println("Last Name updated");
	
		return acc;
	}

	@Override
	public Account editEmail(String username, String password, String oldValue, String newValue) {
		Account acc = findAccountbyUserAndPass(username, password);
		acc.setEmail(newValue);
		
		accountDao.saveAndFlush(acc);
		
		System.out.println("Email updated");
		
		return acc;
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
