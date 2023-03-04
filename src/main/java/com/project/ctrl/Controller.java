package com.project.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Account;
import com.project.identity.service.IdentityService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class Controller {	
	
	@Autowired IdentityService identityService;
	
	// Identity Management APIs ---------------------------------------------------------------------
	
	@RequestMapping("login")
	String login(HttpServletRequest request, HttpSession session) { 
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		session.invalidate();
		
		// not registered >> return error
		if (!identityService.isRegisteredAccount(username, password)) {
			return "User not found. Username or password is incorrect";
		}
		// registered >> add account to session
		HttpSession newSession = request.getSession();
		Account acc =  this.identityService.findAccountbyUserAndPass(username, password);
		newSession.setAttribute("ACCOUNT", acc);
		
		return "Login Success. \n Session account: " + newSession.getAttribute("ACCOUNT").toString();
	    
	}
	
	@RequestMapping("logout")
	String logout(HttpServletRequest request, HttpSession session) {
		session.invalidate();
		
		return "Logout Success";
	}
	
	@RequestMapping("getAccountDetails")
	Account getAccountDetails(HttpServletRequest request, HttpSession session) {
		
		return (Account) session.getAttribute("ACCOUNT");
	}
	
	//TODO - add APIs for editing account details
	

}
