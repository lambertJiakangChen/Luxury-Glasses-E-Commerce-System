package com.project.identity.service;

import java.util.Collection;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.project.entity.Account;

@Service
public interface IdentityService {
	
	boolean isRegisteredAccount(String username, String password);

	Account findAccountbyUserAndPass(String username, String passoword);
	
	Collection<Account> findAllAccounts();
	
	void editAccountDetails(String property,String oldValue, String newValue);
	
}
