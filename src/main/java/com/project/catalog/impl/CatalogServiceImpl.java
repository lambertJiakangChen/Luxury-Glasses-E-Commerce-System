package com.project.catalog.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.project.catalog.CatalogService;
import com.project.dao.CatalogDao;
import com.project.dao.OrderDao;
import com.project.dao.OrderItemDao;
import com.project.entity.Order;
import com.project.entity.OrderItem;
import com.project.entity.Account;
import com.project.entity.Item;

@Service
public class CatalogServiceImpl implements CatalogService {

	@Autowired 
	private CatalogDao catalogDao;

	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private OrderItemDao orderItemDao;

	@Override
	public void addItem(String itemName, String brand, String shape, String size, Double price, 
			String material, Double weight, Double lensWidth, Double lensHeight, 
			Double frameWidth, HashSet<String> category, HashSet<String> colors) {

		if (!itemExists(itemName)) {
			Item item = new Item( (catalogDao.count()+1), itemName, brand, shape, size, price,  material, weight, lensWidth, 
					lensHeight, frameWidth, category, colors);
			catalogDao.save(item);
		}
	}

	@Override
	public Collection<Item> viewCatalog() {
		return catalogDao.findAll();
	}

	@Override
	public Optional<Item> searchItem(Item item) {
		return catalogDao.findById(item.getId());
	}

	@Override
	public Collection<Item> searchItemByName(String itemName) {
		Collection<Item> items = new ArrayList<Item>();
		for (Item i: catalogDao.findAll()) {
			if (i.getItemName().toLowerCase().contains(itemName.toLowerCase())) {
				items.add(i);
			}
		}
		return items;
	}

	@Override
	public boolean itemExists(String itemName) {
		return (!searchItemByName(itemName).isEmpty());
	}

	@Override
	public Collection<Item> sortCatalog(String sort){
		//Assume non-descending for now
		return catalogDao.findAll(Sort.by(sort));
	}
	
	@Override
	public Collection<Item> sortPrice(String sort){
		if (sort.equals("ascending"))
			return catalogDao.findAll(Sort.by(Sort.Direction.ASC, "price"));
		else
			return catalogDao.findAll(Sort.by(Sort.Direction.DESC, "price"));
	}
	
	@Override
	public Collection<Item> sortItemName(String sort){
		if (sort.equals("ascending"))
			return catalogDao.findAll(Sort.by(Sort.Direction.ASC, "itemName"));
		else
			return catalogDao.findAll(Sort.by(Sort.Direction.DESC, "itemName"));
	}
	
	@Override
	public Collection<Item> filterbybrand(String brand){
		Collection<Item> items = new ArrayList<Item>();
		for (Item i: catalogDao.findAll()) {
			if (i.getBrand().equals(brand)) {
				items.add(i);
			}
		}
		return items;
	}
	
	@Override
	public Collection<Item> filterbycate(String cate){
		Collection<Item> items = new ArrayList<Item>();
		for (Item i: catalogDao.findAll()) {
			if (i.containsCategory(cate)) {
				items.add(i);
			}
		}
		return items;
	}
	
	@Override
	public Collection<Item> filterbycolor(String color){
		Collection<Item> items = new ArrayList<Item>();
		for (Item i: catalogDao.findAll()) {
			if (i.containsColor(color)) {
				items.add(i);
			}
		}
		return items;
	}
	
	@Override
	public String viewDetails(String itemName, String cate, String color) throws Exception {
	    Item item = searchItemByName(itemName).iterator().next();
	    String viewoutlook = "The shape is " + item.getShape() + " with dimensions " + item.getLensWidth() + "-" 
	    + item.getLensHeight() + "-" + item.getFrameWidth() + " make by " + item.getMaterial();
	    if(!item.containsColor(color)) {
	    	throw new Exception("no such color");
	    }else {
	    	viewoutlook = viewoutlook + ". It is a " + color;
	    }
	    if(!item.containsCategory(cate)) {
	    	throw new Exception("no such catogory");
	    }else {
	    	viewoutlook = viewoutlook + " " + cate + " glasses.";
	    }
	    return viewoutlook;
	}
	
	@Override
	public Collection<Item> acountItem(Long accId) {
		Collection<OrderItem> orderItems = new ArrayList<OrderItem>();
		Collection<Item> Items = new ArrayList<Item>();
		Order or = null;
		for (Order i: orderDao.findAll()) {
			if (i.getaccountId().equals(accId)) {
				or = i;
				break;
			}
		}
		for (OrderItem i: orderItemDao.findAll() ) {
			if (i.getOrderId().equals(or.getId())) {
				orderItems.add(i);
			}
		}
		for (OrderItem o : orderItems) {
			for (Item i: catalogDao.findAll()) {
				if (o.getItem().equals(i)){
					Items.add(i);
				}
			}
		}
		return Items;
	}
	
	@Override
	public Collection<Item> recommandationbysize(Collection<Item> Items){

		Collection<Item> recomandItems = new ArrayList<Item>();
		for (Item i : Items) {
			for (Item exist_i: catalogDao.findAll()) {
				if(i.getSize().equals(exist_i.getSize()) &&  i.getMaterial().equals(exist_i.getMaterial()) && (i.getLensHeight().equals(exist_i.getLensHeight()) &&
						i.getLensWidth().equals(exist_i.getLensWidth()) && i.getFrameWidth().equals(exist_i.getFrameWidth()))) {
					if(i.getId().equals(exist_i.getId())) {
						 continue;
					}else {
						recomandItems.add(exist_i);
					}
				}
			}
		}
		return recomandItems;
	}
	
	@Override
	public Collection<Item> recommandationbycate(Collection<Item> Items){
		Collection<Item> recomandItems = new ArrayList<Item>();
		for (Item i : Items) {
			for (Item exist_i: catalogDao.findAll()) {
				if(i.getCategory().stream().allMatch(element -> exist_i.getCategory().contains(element))){
					if(i.getId().equals(exist_i.getId())) {
						 continue;
					}else {
						recomandItems.add(exist_i);
					}
				}
			}
	    }
		return recomandItems;
	}
	
	@Override
	public Collection<Item> recommandationbycolor(Collection<Item> Items){
		Collection<Item> recomandItems = new ArrayList<Item>();
		for (Item i : Items) {
			for (Item exist_i: catalogDao.findAll()) {
				if(i.getColor().stream().allMatch(element -> exist_i.getColor().contains(element))){
					if(i.getId().equals(exist_i.getId())) {
						 continue;
					}else {
						recomandItems.add(exist_i);
					}
				}
			}
	    }
		return recomandItems;
	}


}
