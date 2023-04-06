package com.project.identity.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.List;

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
		
		if (!UserisValid(username)) {
			throw new Exception("Username can only contain letters, numbers and underscores.");
		}
		
		if (!PWisValid(password)) {
			throw new Exception("Password must be greater than 5 and can only contain letters and numbers.");
		}
		
		if (!emailisValid(email)) {
			throw new Exception("Invalid Email Address");
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
	public List<Account> findAllAccounts() {
		return accountDao.findAll();
	}
	
	
	@Override 
	public Account editUsername(String username, String password, String oldValue, String newValue) throws Exception {
		if (usernameExists(newValue)) {
			throw new Exception("Username Already Exists.");
		}
		
		if (!UserisValid(newValue)) {
			throw new Exception("Username can only contain letters, numbers and underscores.");
		}
		
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
		if (!PWisValid(password)) {
			throw new Exception("Password must be greater than 5 and can only contain letters and numbers.");
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
	public Account editEmail(String username, String password, String oldValue, String newValue) throws Exception {
		
		if (!emailisValid(newValue)) {
			throw new Exception("Invalid Email Address");
		}
		
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
	
	public static boolean UserisValid(String username) {
        if (!Character.isAlphabetic(username.charAt(0))
                || username.length() < 1
                || username.length() > 30)
            return false;
        for (char c : username.toCharArray()) {
            if (!Character.isLetterOrDigit(c) && c != '_')
                return false;
        }
        return true;
    }
		
	public static boolean emailisValid(String email) {
		String ePattern ="^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$";
        java.util.regex.Pattern p = java.util.regex.Pattern.compile(ePattern);
        java.util.regex.Matcher m = p.matcher(email);
        return m.matches();
	}
	
	public static boolean PWisValid(String password) {
        if (!Character.isLetterOrDigit(password.charAt(0))
                || password.length() < 6)
            return false;
        for (char c : password.toCharArray()) {
            if (!Character.isLetterOrDigit(c))
                return false;
        }
        return true;
    }
		
}
