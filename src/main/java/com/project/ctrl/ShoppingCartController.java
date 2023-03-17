package com.project.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Account;
import com.project.shoppingcart.ShoppingCart;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;


@RestController
@RequestMapping("cart")
public class ShoppingCartController {
	
	@Autowired ShoppingCart shoppingCartService;
	
	@RequestMapping("addItem")
	String addToCart(HttpServletRequest request, HttpSession session) {
		Account acc = (Account) session.getAttribute("ACCOUNT");
		Long accId = null;
		Long addressId = null;
		if (acc != null) {
			accId = Long.valueOf(acc.getId());
			addressId = Long.valueOf(acc.getAddressId());
		}
		String itemName = request.getParameter("item");
		shoppingCartService.addItem(itemName, accId, addressId);
		
		return "Added to Cart";
	}
	
	@RequestMapping("removeItem")
	String removeFromCart(HttpServletRequest request, HttpSession session) {
		String itemName = request.getParameter("item");
		shoppingCartService.removeItem(itemName);
		
		return "Removed from Cart";
	}
	
	@RequestMapping("editItem")
	String editItem(HttpServletRequest request, HttpSession session) {
		String itemName = request.getParameter("item");
		int quantity = Integer.valueOf(request.getParameter("quantity"));
		shoppingCartService.editItem(itemName, quantity);
		
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
