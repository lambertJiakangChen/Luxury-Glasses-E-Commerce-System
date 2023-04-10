/**
 * 
 */
package com.project.ctrl;

import java.io.IOException;
import java.text.ParseException;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.checkout.CheckoutService;
import com.project.dao.AddressDao;
import com.project.dao.OrderDao;
import com.project.entity.Account;
import com.project.entity.Address;
import com.project.entity.Order;
import com.project.entity.Payment;
import com.project.entity.types.AccountType;
import com.project.entity.types.OrderStatus;
import com.project.identity.service.IdentityService;
import com.project.shoppingcart.ShoppingCart;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@RequestMapping("checkout")
public class CheckoutController {
	
	@Autowired CheckoutService checkoutService;
	@Autowired IdentityService identityService;
	@Autowired ShoppingCart cart;
	@Autowired OrderDao orderDao;
	@Autowired AddressDao addressDao;
	

	@RequestMapping("/proceed")
	String proceedToCheckout(HttpServletRequest request, HttpSession session,
			HttpServletResponse response) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		ShoppingCart cart = (ShoppingCart) session.getAttribute("CART");
		checkoutService.setCheckout(acc, cart);
		//proceed as guest or user is already login
		
		return "User can continue as guest. "
				+ "\n User may proceed to Shipping details";
	}
	
	@RequestMapping("/proceedlogin")
	String proceedToLoginCheckout(HttpServletRequest request, HttpSession session,
			HttpServletResponse response) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		// not registered >> return error
		if (!identityService.isRegisteredAccount(username, password)) {
			return "User not found. Username or password is incorrect";
		}
		// registered >> add account to session
		HttpSession newSession = request.getSession();
		Account acc =  this.identityService.findAccountbyUserAndPass(username, password);
		newSession.setAttribute("ACCOUNT", acc);
		ShoppingCart cart = (ShoppingCart) session.getAttribute("CART");
		newSession.setAttribute("CART", cart);
		checkoutService.setCheckout(acc, cart);
		
		return "Login Success. \n Session account: " + newSession.getAttribute("ACCOUNT").toString() 
				+ "\n User may proceed to Shipping details";
	}
	
	@RequestMapping("/proceedregister")
	String proceedToRegisterCheckout(HttpServletRequest request, HttpSession session,
			HttpServletResponse response) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String fname = request.getParameter("fname");
		String lname = request.getParameter("lname");
		String email = request.getParameter("email");
//		AccountType type = AccountType.valueOf(request.getParameter("type"));
		
		try {
			identityService.registerAccount(username, fname, lname, email, password, AccountType.REGULAR);
		} catch (Exception e) {
			return "Unable to register account: " + e.getMessage();
		}
		Account acc = (Account) session.getAttribute("ACCOUNT");
		ShoppingCart cart = (ShoppingCart) session.getAttribute("CART");
		checkoutService.setCheckout(acc, cart);
		
		return "Successfully Registered." + "\n User may proceed to Shipping details";
	}

	@RequestMapping("/shipping")
	String addAddress(HttpServletRequest request, HttpSession session) {
		String country = request.getParameter("country");
		String name = request.getParameter("name");
//		long phone = Long.parseLong(request.getParameter("phone"));
		String phone = request.getParameter("phone");
		String line1 = request.getParameter("line1");
		String line2 = request.getParameter("line2");
		String city = request.getParameter("city");
		String province = request.getParameter("province");
		String postal = request.getParameter("postal");
//		String is_default = request.getParameter("default");
		
		boolean makeDefault = false;
		if (request.getParameter("default").equals("true"))
			makeDefault = true;
		long id = addressDao.count() + 1;
		Address shippingAddress;
		try {
			shippingAddress = new Address(id, country, phone, line1, line2, city, province, postal,
					makeDefault);
		} catch (Exception e) {
			e.printStackTrace();
			return e.getMessage();
		}
		checkoutService.setShippingAddress(shippingAddress);
		addressDao.save(shippingAddress);
		
		return "Shipping Address successfully set: \n" + shippingAddress.toString() 
				+ "\n User may proceed to Payment details";

	}

	@RequestMapping("/payment")
	String modifyPayment(HttpServletRequest request, HttpSession session) {
//		long cardNum = Long.parseLong(request.getParameter("card_number"));
		@Valid String name = request.getParameter("fullname");
		@Valid String card = request.getParameter("card");
		@Valid String exp = request.getParameter("exp"); // in "MM/YY" format
		@Valid String cvv = request.getParameter("cvv");
		
		try {
			Payment payment = new Payment(card, exp, cvv);
		} catch (Exception e) {
			e.printStackTrace();
			return e.getMessage();
		}
		// Assume card is correct for now 
		
		return "Card payment method successfully set"
				+ "\n User may proceed to Review order";

	}

	@RequestMapping("/reviewOrder")
	String confirmCheckout(HttpServletRequest request, HttpSession session) {
		String confirm = request.getParameter("confirm");
		boolean confirmed = false;
		if (confirm.equals("true"))
			confirmed = true;
		
		
		Account acc = (Account) session.getAttribute("ACCOUNT");
		if (confirmed) {
			Order newOrder = new Order(orderDao.count()+1, acc.getId(), OrderStatus.ORDERED, 
					checkoutService.getShippingAddress(), Calendar.getInstance());
			checkoutService.confirmedCheckout(newOrder);
			session.removeAttribute("CART");
		} else {
			return "Please confirm order";
		}
		
		return "Order Confirmed: " + confirm ; 

	}



}
