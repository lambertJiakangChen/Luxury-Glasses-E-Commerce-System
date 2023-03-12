package com.project.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Item {

	@Id @GeneratedValue
	private Long id;
	private String itemName;
	private String seller;
	private String brand;
	private String price;
	
	private Set<String> category;
	private Set<String> colors;
	
	
	public Item(Long id, String itemName, String seller, String brand, String price, 
			Set<String> category, Set<String> colors) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.seller = seller;
		this.brand = brand;
		this.price = price;
		this.category = category;
		this.colors = colors;
	}
	
	public Item(Long id, String itemName, String seller, String brand, String price) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.seller = seller;
		this.brand = brand;
		this.price = price;
		this.category = new HashSet<String>();
		this.colors = new HashSet<String>();;
	}


	public Item() {
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getItemName() {
		return this.itemName;
	}


	public void setItemName(String itemName) {
		this.itemName = itemName;
	}


	public String getSeller() {
		return this.seller;
	}


	public void setSeller(String seller) {
		this.seller = seller;
	}


	public String getBrand() {
		return this.brand;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public String getPrice() {
		return price;
	}


	public void setPrice(String price) {
		this.price = price;
	}


	public Set<String> getCategory() {
		return this.category;
	}


	public void addCategory(String ncategory) {
		this.category.add(ncategory);
	}
	
	public void removeCategory(String ncategory) {
		this.category.remove(ncategory);
	}
	
	public void containsCategory(String ncategory) {
		this.category.contains(ncategory);
	}
	

	public Set<String> getColors() {
		return this.colors;
	}


	public void addColor(String ncolor) {
		this.colors.add(ncolor);
	}
	
	public void removeColor(String ncolor) {
		this.colors.remove(ncolor);
	}
	
	public void containsColor(String ncolor) {
		this.colors.contains(ncolor);
	}


	@Override
	public String toString() {
		return "Item [id=" + getId() + ", itemName=" + itemName + ", seller=" + seller 
				+ ", brand=" + brand + ", price=" + price + ", category=" + category.toString() 
				+ ", colors=" + colors.toString() + "]";
	}


}
