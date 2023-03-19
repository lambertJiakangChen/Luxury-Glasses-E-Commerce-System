/**
 * 
 */
package com.project.ctrl;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.checkout.Checkout;
import com.project.dao.AddressDao;
import com.project.dao.OrderDao;
import com.project.entity.Account;
import com.project.entity.Address;
import com.project.entity.Order;
import com.project.entity.types.OrderStatus;
import com.project.identity.service.IdentityService;
import com.project.shoppingcart.ShoppingCart;
import com.project.ctrl.IdentityController;

import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("checkout")
public class CheckoutController {
	
	@Autowired Checkout checkout;
	@Autowired IdentityService identityService;
	@Autowired ShoppingCart cart;
//	@Autowired Address shippingAddress;
	@Autowired private ServletContext servletContext;
	@Autowired OrderDao orderDao;
	@Autowired AddressDao addressDao;

	// TODO: change to @PostMapping to link and redirect

	@RequestMapping("/proceed")
	String proceedToCheckout(HttpServletRequest request, HttpSession session,
			HttpServletResponse response) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		ShoppingCart cart = (ShoppingCart) session.getAttribute("CART");
		this.checkout = new Checkout(acc, cart);
		//proceed as guest or already login
		
//		return "checkout/shipping";
		return "Continue as guest or already logged in";
	}
	
	@RequestMapping("/proceedlogin")
	String proceedToLoginCheckout(HttpServletRequest request, HttpSession session,
			HttpServletResponse response) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		ShoppingCart cart = (ShoppingCart) session.getAttribute("CART");
		if (acc == null) {
			try {
				response.sendRedirect("/login");
				// TODO: FE enter login details
			} catch (IOException e) {
				System.out.println("Unsuccessful login: " + e.getMessage());
				e.printStackTrace();
			}
		}
		this.checkout = new Checkout(acc, cart);
		
		
		return "Continue as new user";
	}
	
	@RequestMapping("/proceedresgister")
	String proceedToRegisterCheckout(HttpServletRequest request, HttpSession session,
			HttpServletResponse response) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		ShoppingCart cart = (ShoppingCart) session.getAttribute("CART");
		if (acc == null) {
			try {
				response.sendRedirect("/register");
				// TODO: FE enter registration details
			} catch (IOException e) {
				System.out.println("Unsuccessful registration: " + e.getMessage());
				e.printStackTrace();
			}
		}
		this.checkout = new Checkout(acc, cart);
		
		
		return "Continue as new user";
	}

	@RequestMapping("/shipping")
	String addAddress(HttpServletRequest request, HttpSession session) {
		String country = request.getParameter("country");
		String name = request.getParameter("name");
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
		Address shippingAddress = new Address(id, country, phone, line1, line2, city, province, postal,
				makeDefault);
		checkout.setShippingAddress(shippingAddress);
		System.out.print("Shipping Address successfully set: /n" + shippingAddress.toString());
//		return "/checkout/payment";
		return "Successfully added shipping address";

	}

	@RequestMapping("/payment")
	String modifyPayment(HttpServletRequest request, HttpSession session) {
		String cardNum = request.getParameter("card_number");
		String expMonth = request.getParameter("month");
		String expYear = request.getParameter("year");
		String cvv = request.getParameter("cvv");
		
		// Assume card is correct
		// TODO: process payment
		
//		return "/checkout/reviewOrder";
		return "Successfully entered payment method";

	}

	@RequestMapping("/reviewOrder")
	String confirmCheckout(HttpServletRequest request, HttpSession session) {
		String confirm = request.getParameter("confirm");
		boolean confirmed = false;
		if (confirm.equals("true"))
			confirmed = true;
		
		if (confirmed) {
			Order newOrder = new Order(cart.getOrderId(), (long) 1234324, OrderStatus.ORDERED, checkout.getShippingAddress());
			checkout.confirmedCheckout(newOrder);
		}
		
		return "confirmed order: " + confirm; 

	}



}
