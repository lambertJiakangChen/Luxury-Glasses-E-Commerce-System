package com.project.account.service;

import java.util.Collection;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.project.entity.Account;

@Component
public interface AccountService {

	Account findAccountbyUserAndPass(String username, String passoword);
	
	Collection<Account> findAllAccounts();
	
}
