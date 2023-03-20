package com.project.catalog;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.List;

import com.project.entity.Item;
import org.springframework.stereotype.Service;
import com.project.entity.Item;
import com.project.entity.Review;

@Service
public interface CatalogService {
	
	void addItem(String itemName, String brand, String shape, String size, Double price, 
			String material, Double weight, Double lensWidth, Double lensHeight, 
			Double frameWidth, HashSet<String> category, HashSet<String> colors);

	Collection<Item> viewCatalog();

	Optional<Item> searchItem(Item item);

	Collection<Item> searchItemByName(String itemName);
	
	Item findItemById(Long itemId);

	boolean itemExists(String itemName);

	Collection<Item> sortCatalog(String sort);
	
	Collection<Item> sortPrice(String sort);
	
	Collection<Item> sortItemName(String sort);
	
	Collection<Item> filterbybrand(String brand);
	
	Collection<Item> filterbycate(String cate);
	
	Collection<Item> filterbycolor(String color);
	
	String viewDetails(String itemName, String cate, String color) throws Exception;
	
	Collection<Item> acountItem(Long accId);
	
	Collection<Item> recommandationbysize(Collection<Item> Items);
	
	Collection<Item> recommandationbycate(Collection<Item> Items);
	
	Collection<Item> recommandationbycolor(Collection<Item> Items);
	
	List<Review> listAllReviewsByItem(Item item);
	
	void updateRating(String item);
	
	void addReview(Item item, int rating, String comments, String email);


}
