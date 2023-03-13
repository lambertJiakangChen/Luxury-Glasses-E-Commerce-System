package com.project.catalog;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.project.dao.CatalogDao;
import com.project.entity.Account;
import com.project.entity.Item;

@Service
public class CatalogService implements CatalogServiceInterface {

	@Autowired 
	private CatalogDao catalogDao;

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
			if (i.getItemName().equals(itemName)) {
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


}
