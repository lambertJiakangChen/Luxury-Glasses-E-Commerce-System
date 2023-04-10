package com.project.ctrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Account;
import com.project.entity.Address;
import com.project.entity.OrderItem;
import com.project.shoppingcart.ShoppingCart;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;


@RestController
@RequestMapping("cart")
public class ShoppingCartController {
	
	@Autowired ShoppingCart shoppingCartService;
	

	@RequestMapping("create")
	String createCart(HttpServletRequest request, HttpSession session) {
		HttpSession newSession = request.getSession();
		ShoppingCart cart = shoppingCartService.getInstance();
		newSession.setAttribute("CART", cart);
		return "cart created";
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
	List<OrderItem> getallItems(HttpServletRequest request, HttpSession session) {
		List<OrderItem> result;
		try {
			result = shoppingCartService.getAllItems();
		} catch (Exception e) {
			return null; // "Unable to get items: " + e.getMessage();
		}
		return result;
		
	}
	
	@RequestMapping("getTotal") 
	String getTotal(HttpServletRequest request, HttpSession session) {
		return String.valueOf(shoppingCartService.getTotal());
	}

}
