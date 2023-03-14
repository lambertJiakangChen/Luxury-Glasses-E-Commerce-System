package com.project.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.catalog.CatalogService;
import com.project.dao.CatalogDao;

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
	
}
