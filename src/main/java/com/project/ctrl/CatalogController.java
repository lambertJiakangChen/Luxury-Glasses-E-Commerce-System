package com.project.ctrl;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.catalog.CatalogService;
import com.project.dao.CatalogDao;
import com.project.entity.Account;
import com.project.entity.Item;
import com.project.entity.OrderItem;

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
	
	@RequestMapping("addItem")
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
		
		try {
			catalogService.addItem(brand, name, shape, size, price, mat, weight, lw, lh, fw, null, null);
		} catch (Exception e) {
			return "Unable to add item: " + e.getMessage();
		}
		
		return "Successfully Added.";	
	}
	
	@RequestMapping("viewCatalog")
	String viewCatalog(HttpServletRequest request, HttpSession session) {
		return catalogService.viewCatalog().toString();
	}

	@RequestMapping("searchByName")
	String searchItemByName(HttpServletRequest request, HttpSession session) {
		return catalogService.searchItemByName(request.getParameter("search")).toString();
	}

	@RequestMapping("sort")
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
	
	@RequestMapping("sortByItemName")
	String sortCatalogByItemName(HttpServletRequest request, HttpSession session) {
		if (request.getParameter("sort") != null && request.getParameter("sort").equals("ascending")) {
			return catalogService.sortItemName(request.getParameter("sort")).toString();
	    }else if (request.getParameter("sort") != null && request.getParameter("sort").equals("descending")) {
	    	return catalogService.sortItemName(request.getParameter("sort")).toString();
	    }
		return "please choose ascending or descending";
	}
	
	@RequestMapping("filterByBrand")
	String filterCatalogByBrand(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbybrand(request.getParameter("brand")).toString();
	}
	
	@RequestMapping("filterByCategory")
	String filterCatalogByCatagory(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbycate(request.getParameter("cate")).toString();
	}
	
	@RequestMapping("filterByColor")
	String filterCatalogByColor(HttpServletRequest request, HttpSession session) {
		return catalogService.filterbycolor(request.getParameter("color")).toString();
	}
	
	@RequestMapping("viewDetails")
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
	
	@RequestMapping("recommand")
	String recommandation(HttpServletRequest request, HttpSession session) {
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
//		return catalogService.acountItem(accId).toString();
	}
	
	
}
