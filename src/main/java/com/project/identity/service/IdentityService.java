package com.project.identity.service;

import java.util.Collection;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.project.entity.Account;
import com.project.entity.types.AccountType;

@Service
public interface IdentityService {
	
	void registerAccount(String username, String fName, String lName, String email, String password, AccountType type) throws Exception;
	
	boolean isRegisteredAccount(String username, String password);

	Account findAccountbyUserAndPass(String username, String passoword);
	
	List<Account> findAllAccounts();
	
	Account editUsername(String username, String password, String oldValue, String newValue) throws Exception;
	
	Account editPassword(String username, String password, String oldValue, String newValue) throws Exception;
	
	Account editFirstName(String username, String password, String oldValue, String newValue);
	
	Account editLastName(String username, String password, String oldValue, String newValue);

	Account editEmail(String username, String password, String oldValue, String newValue) throws Exception;

}
