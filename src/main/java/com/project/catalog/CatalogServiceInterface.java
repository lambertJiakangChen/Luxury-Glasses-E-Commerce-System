package com.project.catalog;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;

import com.project.entity.Item;

public interface CatalogServiceInterface {
	
	void addItem(String itemName, String shape, String size, Double price, 
			String material, Double weight, Double lensWidth, Double lensHeight, 
			Double frameWidth, HashSet<String> category, HashSet<String> colors);

	Collection<Item> viewCatalog();

	Optional<Item> searchItem(Item item);

	Collection<Item> searchItemByName(String itemName);

	boolean itemExists(String itemName);

	Collection<Item> sortCatalog(String sort);

}