/**
 * 
 */
package com.project.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.identity.service.IdentityService;

import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("checkout")
public class CheckoutController {
	
	@Autowired IdentityService identityService;
	@Autowired private ServletContext servletContext;


	@RequestMapping("proceed to checkout")
	String proceedToCheckout(HttpServletRequest request, HttpSession session,
			HttpServletResponse response) {
		
//		if (false) { // not logged in
////			login( request,  session);
////			response.sendRedirect(request.);
//		}
		return null;

	}

	@RequestMapping("shipping")
	String modifyAddress(HttpServletRequest request, HttpSession session) {
		return null;

	}

	@RequestMapping("payment")
	String modifyPayment(HttpServletRequest request, HttpSession session) {
		return null;

	}

	@RequestMapping("confirm")
	String confirmCheckout(HttpServletRequest request, HttpSession session) {
		return null;

	}



}
