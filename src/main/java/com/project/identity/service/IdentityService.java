package com.project.identity.service;

import java.util.Collection;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.project.entity.Account;

@Service
public interface IdentityService {
	
	void registerAccount(String username, String fName, String lName, String email, String password, String type) throws Exception;
	
	boolean isRegisteredAccount(String username, String password);

	Account findAccountbyUserAndPass(String username, String passoword);
	
	Collection<Account> findAllAccounts();
	
	void editUsername(Long accId, String oldValue, String newValue);
	
	void editPassword(Long accId, String oldValue, String newValue) throws Exception;
	
	void editFirstName(Long accId, String oldValue, String newValue);
	
	void editLastName(Long accId, String oldValue, String newValue);

	void editEmail(Long accId, String oldValue, String newValue);

}
