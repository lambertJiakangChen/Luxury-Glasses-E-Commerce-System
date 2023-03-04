package com.project.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.account.service.AccountService;
import com.project.dao.AccountDao;
import com.project.entity.Account;

@RestController
public class Controller {
	
	@Autowired AccountService accountService;
	
	@RequestMapping("/getAllAccounts")
	Collection<Account> accounts() {
		return this.accountService.findAllAccounts();
	}
	
	@RequestMapping("getAccount")
	Account account() {
		return this.accountService.findAccountbyUserAndPass("justinB31", "Qwerty12");
	}
	

}
