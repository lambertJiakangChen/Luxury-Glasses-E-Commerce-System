package com.project.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.catalog.CatalogServiceInterface;
import com.project.dao.CatalogDao;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("catalog")
public class CatalogController {
	
	@Autowired
	private CatalogDao catalogDao;
	CatalogServiceInterface catalogService;
	
//	@ResponseBody
//    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
//    public List<Item> viewCatalog() {
//        Spliterator<Item> items = catalogDao.findAll().spliterator();
//        return StreamSupport.stream(items, false).collect(Collectors.toList());
//    }
	
	@RequestMapping("addItem")
	String addItem(HttpServletRequest request, HttpSession session) {
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
			catalogService.addItem(name, shape, size, price, mat, weight, lw, lh, fw, null, null);
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

}
