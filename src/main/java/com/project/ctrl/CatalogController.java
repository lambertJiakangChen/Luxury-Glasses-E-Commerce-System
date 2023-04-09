package com.project.ctrl;

import java.util.ArrayList;
import java.util.List;
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

import jakarta.persistence.ManyToOne;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("catalog")
public class CatalogController {
	
	@Autowired CatalogService catalogService;

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
	Collection<Item> viewCatalog(HttpServletRequest request, HttpSession session) {
		return catalogService.viewCatalog();
	}


	@RequestMapping("/searchByName")
	Collection<Item> searchItemByName(HttpServletRequest request, HttpSession session) {
		return catalogService.searchItemByName(request.getParameter("search"));
	}

	@RequestMapping("/sort")
	String sortCatalogByName(HttpServletRequest request, HttpSession session) {
//		return catalogService.sortCatalogByName().toString();
		return catalogService.sortCatalog(request.getParameter("sort")).toString();
	}
	
	@RequestMapping("/sortByPrice")
	Collection<Item> sortCatalogByPrice(HttpServletRequest request, HttpSession session) {
		if (request.getParameter("sort") != null && request.getParameter("sort").equals("ascending")) {
			return catalogService.sortPrice(request.getParameter("sort"));
	    }else if (request.getParameter("sort") != null && request.getParameter("sort").equals("descending")) {
	    	return catalogService.sortPrice(request.getParameter("sort"));
	    }
		return null;
	}
	

	@RequestMapping("/sortByItemName")
	Collection<Item> sortCatalogByItemName(HttpServletRequest request, HttpSession session) {
		if (request.getParameter("sort") != null && request.getParameter("sort").equals("ascending")) {
			return catalogService.sortItemName(request.getParameter("sort"));
	    }else if (request.getParameter("sort") != null && request.getParameter("sort").equals("descending")) {
	    	return catalogService.sortItemName(request.getParameter("sort"));
	    }
		return null;
	}
	

	@RequestMapping("/filterByBrand")
	Collection<Item> filterCatalogByBrand(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbybrand(request.getParameter("brand"));
	}
	
	@RequestMapping("/filterByCategory")
	Collection<Item> filterCatalogByCatagory(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbycate(request.getParameter("cate"));
	}
	

	@RequestMapping("/filterByColor")
	Collection<Item> filterCatalogByColor(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbycolor(request.getParameter("color"));
	}
	
	@RequestMapping("/findItem")
	Item findItem(HttpServletRequest request, HttpSession session) {
		String itemId = request.getParameter("itemId");
		Item result;
		try {
			result = catalogService.findItemById(Long.parseLong(itemId));
		} catch (Exception e) {
			return null;
		}
		return result;
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
	Collection<Item> recommendation(HttpServletRequest request, HttpSession session) {
//		String recommand = "";
		Account acc = (Account) session.getAttribute("ACCOUNT");
		Long accId = null;
		if (acc != null) {
			accId = Long.valueOf(acc.getId());
		}
//		recommand = "Customer with Id " + accId + " has " + catalogService.acountItem(accId).toString() + " in cart. ";
		Collection<Item> Items =  catalogService.acountItem(accId);

		if (request.getParameter("by") != null && request.getParameter("by").equals("overallsize")) {
			return catalogService.recommandationbysize(Items);
	    }else if (request.getParameter("by") != null && request.getParameter("by").equals("category")) {
	    	return catalogService.recommandationbycate(Items);
	    }else if (request.getParameter("by") != null && request.getParameter("by").equals("color")) {
	    	return catalogService.recommandationbycolor(Items);
	    }
		return null;
//		if (request.getParameter("by").equals("overallsize")) {
//			recommand = recommand + "You may also need " + catalogService.recommandationbysize(Items).toString();
//		}
//		if (request.getParameter("by").equals("category")) {
//			recommand = recommand + "You may also need " + catalogService.recommandationbycate(Items).toString();
//		}
//		if (request.getParameter("by").equals("color")) {
//			recommand = recommand + "You may also need " + catalogService.recommandationbycolor(Items).toString();
//		}	
//		return recommand;
	}
	
	@RequestMapping("/addReview") 
	String addReview(HttpServletRequest request, HttpSession session) {
		Long itemId = Long.valueOf(request.getParameter("item"));
		int rating = Integer.valueOf(request.getParameter("rating"));
	    String comment = request.getParameter("comments");
		String userEmail = request.getParameter("email"); 
		
	    Item item = catalogService.findItemById(itemId);
	    
	    if (item == null) {
	    	return "Cound not add Review: Item ID not found.";
	    }
	    
	    catalogService.addReview(item, rating, comment, userEmail);
		
		
		return "Review added";
		
	}
	
	@RequestMapping("/getReviewsByItem") 
	List<Review> getReviewsByItem(HttpServletRequest request, HttpSession session) {
		Long itemId = Long.valueOf(request.getParameter("item"));		
	    Item item = catalogService.findItemById(itemId);
	    
	    if (item == null) {
	    	//return "Could not get Reviews: Item ID not found.";
	    	return null;
	    }
	    
	    List<Review> reviews = catalogService.listAllReviewsByItem(item);
	    
	    String result = "{";
	    
	    for (Review r: reviews) {
	    	result += r.toString() + ", ";
	    }
	    
	    result += "}";
		
		
		return reviews;
		
	}
}
