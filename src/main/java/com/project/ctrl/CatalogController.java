package com.project.ctrl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.catalog.CatalogService;
import com.project.dao.CatalogDao;
import com.project.entity.Account;
import com.project.entity.Item;
import com.project.entity.OrderItem;
import com.project.entity.Review;
import com.project.dao.ReviewDao;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("catalog")
public class CatalogController {
	
	@Autowired CatalogService catalogService;
	
//	@ResponseBody
//    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
//    public List<Item> viewCatalog() {
//        Spliterator<Item> items = catalogDao.findAll().spliterator();
//        return StreamSupport.stream(items, false).collect(Collectors.toList());
//    }
	

	@RequestMapping("/addItem")
	String addItem(HttpServletRequest request, HttpSession session) {
		String brand = request.getParameter("brand");
		String name = request.getParameter("itemName");
		String shape = request.getParameter("shape");
		String size = request.getParameter("size");
		Double price = Double.parseDouble(request.getParameter("price"));
		String mat = request.getParameter("material");
		Double weight = Double.parseDouble(request.getParameter("weight"));
		Double lw = Double.parseDouble(request.getParameter("lensWidth"));
		Double lh = Double.parseDouble(request.getParameter("lensHeight"));
		Double fw = Double.parseDouble(request.getParameter("framWidth"));
		HashSet<String> category=new HashSet<String>();
		HashSet<String> color=new HashSet<String>();
		category.add(request.getParameter("cat1"));
		color.add(request.getParameter("color1"));
		if (request.getParameter("cat2") != null) {
			category.add(request.getParameter("cat2"));
		}
		if (request.getParameter("cat3") != null) {
			category.add(request.getParameter("cat3"));
		}
		if (request.getParameter("color2") != null) {
			color.add(request.getParameter("color2"));
		}
		if (request.getParameter("color3") != null) {
			color.add(request.getParameter("color3"));
		}
		if (request.getParameter("color4") != null) {
			color.add(request.getParameter("color4"));
		}
		
		try {
			catalogService.addItem(brand, name, shape, size, price, mat, weight, lw, lh, fw, category, color);
		
		} catch (Exception e) {
			return "Unable to add item: " + e.getMessage();
		}
		
		return "Successfully Added.";	
	}
	

	@RequestMapping("/viewCatalog")
	String viewCatalog(HttpServletRequest request, HttpSession session) {
		return catalogService.viewCatalog().toString();
	}


	@RequestMapping("/searchByName")
	String searchItemByName(HttpServletRequest request, HttpSession session) {
		return catalogService.searchItemByName(request.getParameter("search")).toString();
	}

	@RequestMapping("/sort")
	String sortCatalogByName(HttpServletRequest request, HttpSession session) {
//		return catalogService.sortCatalogByName().toString();
		return catalogService.sortCatalog(request.getParameter("sort")).toString();
	}
	
	@RequestMapping("sortByPrice")
	String sortCatalogByPrice(HttpServletRequest request, HttpSession session) {
		if (request.getParameter("sort") != null && request.getParameter("sort").equals("ascending")) {
			return catalogService.sortPrice(request.getParameter("sort")).toString();
	    }else if (request.getParameter("sort") != null && request.getParameter("sort").equals("descending")) {
	    	return catalogService.sortPrice(request.getParameter("sort")).toString();
	    }
		return "please choose ascending or descending";
	}
	

	@RequestMapping("/sortByItemName")
	String sortCatalogByItemName(HttpServletRequest request, HttpSession session) {
		if (request.getParameter("sort") != null && request.getParameter("sort").equals("ascending")) {
			return catalogService.sortItemName(request.getParameter("sort")).toString();
	    }else if (request.getParameter("sort") != null && request.getParameter("sort").equals("descending")) {
	    	return catalogService.sortItemName(request.getParameter("sort")).toString();
	    }
		return "please choose ascending or descending";
	}
	

	@RequestMapping("/filterByBrand")
	String filterCatalogByBrand(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbybrand(request.getParameter("brand")).toString();
	}
	
	@RequestMapping("/filterByCategory")
	String filterCatalogByCatagory(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbycate(request.getParameter("cate")).toString();
	}
	

	@RequestMapping("/filterByColor")
	String filterCatalogByColor(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbycolor(request.getParameter("color")).toString();
	}
	

	@RequestMapping("/ViewDetails")
	String viewDetails(HttpServletRequest request, HttpSession session) {
		String itemName = request.getParameter("item");
		String category = request.getParameter("cate");
		String color = request.getParameter("color");
		String result;
		try {
			result = catalogService.viewDetails(itemName, category, color).toString();
		} catch (Exception e) {
			return e.getMessage();
		}
		return result;
	}
	
	@RequestMapping("/recommendItems")
	String recommendation(HttpServletRequest request, HttpSession session) {
		String recommand = "";
		Account acc = (Account) session.getAttribute("ACCOUNT");
		Long accId = null;
		if (acc != null) {
			accId = Long.valueOf(acc.getId());
		}
		recommand = "Customer with Id " + accId + " has " + catalogService.acountItem(accId).toString() + " in cart. ";
		Collection<Item> Items =  catalogService.acountItem(accId);
		if (request.getParameter("by").equals("overallsize")) {
			recommand = recommand + "You may also need " + catalogService.recommandationbysize(Items).toString();
		}
		if (request.getParameter("by").equals("category")) {
			recommand = recommand + "You may also need " + catalogService.recommandationbycate(Items).toString();
		}
		if (request.getParameter("by").equals("color")) {
			recommand = recommand + "You may also need " + catalogService.recommandationbycolor(Items).toString();
		}	
		return recommand;
	}
	
//	@RequestMapping("/addReview") 
//	String addReview(HttpServletRequest request, HttpSession session) {
//		
//		return "";
//		
//	}
	
	@RequestMapping("/addReview")
	public @ResponseBody String addReview(Review review) {
		String errorMsg = "";
		if (review.getUserEmail() == null || review.getUserEmail().equals("")
				|| review.getUserEmail().indexOf("@") < 0) {
			errorMsg += "Valid email is required!";
		}
		if (review.getUserName() == null || review.getUserName().equals("")) {
			errorMsg += "User name is required! ";
		}
		if (errorMsg.equals("")) {
			catalogService.saveReview(review);
			catalogService.updateRating(review.getItem().getItemName());
			return "SUCCESS";
		} else {
			return errorMsg;
		}
	}
}
