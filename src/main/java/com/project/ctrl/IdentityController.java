package com.project.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Account;
import com.project.entity.types.AccountType;
import com.project.identity.service.IdentityService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class IdentityController {	
	
	@Autowired IdentityService identityService;
	
	// Identity Management APIs ---------------------------------------------------------------------
	
	@RequestMapping("/register")
	String resister(HttpServletRequest request, HttpSession session) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String fname = request.getParameter("fname");
		String lname = request.getParameter("lname");
		String email = request.getParameter("email");
		AccountType type = AccountType.valueOf(request.getParameter("type"));
		
		try {
			identityService.registerAccount(username, fname, lname, email, password, type);
		} catch (Exception e) {
			return "Unable to register account: " + e.getMessage();
		}
		
		return "Successfully Registered.";		
	}
	
	@RequestMapping("/login")
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
	
	@RequestMapping("/logout")
	String logout(HttpServletRequest request, HttpSession session) {
		session.invalidate();
		
		return "Logout Success";
	}
	

	@RequestMapping("/getAccountDetails")
	Account getAccountDetails(HttpServletRequest request, HttpSession session) {
		
		return (Account) session.getAttribute("ACCOUNT");
	}
	

	@RequestMapping("/getAllAccounts")
	String getAllAccounts(HttpServletRequest request, HttpSession session) {
		
		return identityService.findAllAccounts().toString();
	}
	

	@RequestMapping("/updateUsername")
	String updateUsername(HttpServletRequest request, HttpSession session) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		acc = identityService.editUsername(acc.getUsername(), acc.getPassword(), acc.getUsername(), request.getParameter("username"));
		session.setAttribute("ACCOUNT", acc);
		
		return "Success";
	}
	

	@RequestMapping("/updatePassword")
	String updatePassword(HttpServletRequest request, HttpSession session) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		
		try {
			acc = identityService.editPassword(acc.getUsername(), acc.getPassword(),request.getParameter("oldPass"), request.getParameter("newPass"));
		} catch (Exception e) {
			return "Could not update password. " + e.getMessage();
		}
		
		session.setAttribute("ACCOUNT", acc);
		
		return "Success";
		
	}
	

	@RequestMapping("/updateFirstName")
	String updateFirstName(HttpServletRequest request, HttpSession session) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		acc = identityService.editFirstName(acc.getUsername(), acc.getPassword(), acc.getfName(), request.getParameter("fname"));
		session.setAttribute("ACCOUNT", acc);
		
		return "Success";
	}
	
	@RequestMapping("/updateLastName")
	String updateLastName(HttpServletRequest request, HttpSession session) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		acc = identityService.editLastName(acc.getUsername(), acc.getPassword(), acc.getlName(), request.getParameter("lname"));
		session.setAttribute("ACCOUNT", acc);
		
		return "Success";
	}
	

	@RequestMapping("/updateEmail")
	String updateEmail(HttpServletRequest request, HttpSession session) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		acc = identityService.editEmail(acc.getUsername(), acc.getPassword(), acc.getEmail(), request.getParameter("email"));
		session.setAttribute("ACCOUNT", acc);
		
		return "Success";
	}
	
	
	
	// TODO - add address to account. edit account address.
	

}
