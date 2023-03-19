package com.project.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Account;
import com.project.entity.Address;
import com.project.shoppingcart.ShoppingCart;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;


@RestController
@RequestMapping("cart")
public class ShoppingCartController {
	
	@Autowired ShoppingCart shoppingCartService;
	
	@RequestMapping("create")
	void createCart(HttpServletRequest request, HttpSession session) {
		HttpSession newSession = request.getSession();
		ShoppingCart cart = this.shoppingCartService.getCart();
		newSession.setAttribute("CART", cart);
	}
	
	@RequestMapping("addItem")
	String addToCart(HttpServletRequest request, HttpSession session) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		Long accId = null;
		Address address = null;
		if (acc != null) {
			accId = Long.valueOf(acc.getId());
			address = acc.getAddress();
		}
		String itemName = request.getParameter("item");
		shoppingCartService.addItem(itemName, accId, address);
		session.setAttribute("CART", shoppingCartService);
		return "Added to Cart";
	}
	
	@RequestMapping("removeItem")
	String removeFromCart(HttpServletRequest request, HttpSession session) {
		String itemName = request.getParameter("item");
		shoppingCartService.removeItem(itemName);
		session.setAttribute("CART", shoppingCartService);
		
		return "Removed from Cart";
	}
	
	@RequestMapping("editItem")
	String editItem(HttpServletRequest request, HttpSession session) {
		String itemName = request.getParameter("item");
		int quantity = Integer.valueOf(request.getParameter("quantity"));
		shoppingCartService.editItem(itemName, quantity);
		session.setAttribute("CART", shoppingCartService);
		
		return "Item Updated";	
	}
	
	@RequestMapping("getAllItems") 
	String getallItems(HttpServletRequest request, HttpSession session) {
		String result;
		try {
			result = shoppingCartService.getAllItems();
		} catch (Exception e) {
			return "Unable to get items: " + e.getMessage();
		}
		return result;
		
	}
	
	@RequestMapping("getTotal") 
	String getTotal(HttpServletRequest request, HttpSession session) {
		return String.valueOf(shoppingCartService.getTotal());
	}

}
