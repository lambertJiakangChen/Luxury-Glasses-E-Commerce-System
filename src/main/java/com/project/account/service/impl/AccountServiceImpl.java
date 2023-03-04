package com.project.account.service.impl;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.project.account.service.AccountService;
import com.project.dao.AccountDao;
import com.project.entity.Account;

@Component
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	AccountDao accountDao;
	
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
}
