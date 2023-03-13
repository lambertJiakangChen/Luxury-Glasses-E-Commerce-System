package com.project.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ITEM")
public class Item {

	@Id @GeneratedValue
	private Long id;
	private String brand;
	private String itemName;
	private String shape;
	private String size;
	private Double price; // in $
	private String material;
	private Double weight; //in g
	
	private List<Double> dimension = new ArrayList<Double>(); // 3-measurements (lens width-lens height-frame width)
	private Set<String> category = new HashSet<String>();
	private Set<String> colors = new HashSet<String>();
	
//	private int stock; 
	
	
	
	public Item(Long id, String itemName, String brand, String shape, String size, Double price, 
			String material, Double weight, Double lensWidth, Double lensHeight, Double frameWidth, HashSet<String> category, 
			HashSet<String> colors) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.shape = shape;
		this.size = size;
		this.price = price;
		this.material = material;
		this.weight = weight;
		this.dimension = new ArrayList<Double>();
		addLensWidth(lensWidth);
		addLensHeight(lensHeight);
		addFrameWidth(frameWidth);
		this.category = category;
		this.colors = colors;
	}
	
	public Item(Long id, String itemName, String shape, Double price) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.shape = shape;
		this.size = null;
		this.price = price;
		this.material = null;
		this.weight = null;
	}


	public Item() {
		
	}


	/*
	 * Get and Set item id of eyewear
	*/
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	/*
	 * Get and Set item name of eyewear
	*/
	public String getItemName() {
		return this.itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	
	public String getBrand() {
		return this.brand;
	}
	
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	
	/*
	 * Get and Set shape of eyewear
	*/
	public String getShape() {
		return this.shape;
	}

	public void setShape(String shape) {
		this.shape = shape;
	}
	
	
	/*
	 * Get and Set size of eyewear
	*/
	public String getSize() {
		return this.size;
	}

	public void setSize(String size) {
		this.size = size;
	}


	/*
	 * Get and Set price of eyewear
	*/
	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	
	/*
	 * Get and Set material of eyewear
	*/
	public String getMaterial() {
		return this.material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	
	/*
	 * Get and Set weight of eyewear in g
	*/
	public Double getWeight() {
		return this.weight;
	}


	public void setWeight(Double weight) {
		this.weight = weight;
	}

	
	/*
	 * Set, Get and Remove the dimensions of the eyewear
	 * lens width at index 	0
	 * lens height at index 1
	 * frame width at index 2
	*/
	public void addLensWidth(Double w) {
		this.dimension.add(0, w);
	}
	
	public Double getLensWidth() {
		return this.dimension.get(0);
	}
	
	public void addLensHeight(Double h) {
		this.dimension.add(1, h);
	}
	
	public Double getLensHeight() {
		return this.dimension.get(1);
	}
	
	public void addFrameWidth(Double fw) {
		this.dimension.add(2, fw);
	}
	
	public Double getFrameWidth() {
		return this.dimension.get(2);
	}
	
	public void removeDimensions() {
		this.dimension.clear();
	}
	
	public void setDimensions(Double w, Double h, Double fw) {
		addLensWidth(w);
		addLensHeight(h);
		addFrameWidth(fw);
	}


	/*
	 * Get, Add and Remove the category of the eyewear
	 * 
	*/
	public Set<String> getCategory() {
		return this.category;
	}
	
	public void addCategory(String ncategory) {
		this.category.add(ncategory);
	}
	
	public void removeCategory(String ncategory) {
		this.category.remove(ncategory);
	}
	
	public boolean containsCategory(String ncategory) {
		return this.category.contains(ncategory);
	}
	/*
	 * Get, Add and Remove the color available of the eyewear
	 * 
	*/
	public Set<String> getColors() {
		return this.colors;
	}


	public void addColor(String ncolor) {
		this.colors.add(ncolor);
	}
	
	public void removeColor(String ncolor) {
		this.colors.remove(ncolor);
	}
	
	public boolean containsColor(String ncolor) {
		return this.colors.contains(ncolor);
	}


	@Override
	public String toString() {
		return "Item [id=" + getId() + ", brand=" + getBrand() +", itemName=" + getItemName() + ", shape=" + getShape() 
				+ ", size=" + getSize() + ", price=" + getPrice() 
				+ ", weight=" + getWeight() + ", material=" + getMaterial() + ", demiension=" 
				+ getLensWidth() + "-" + getLensHeight() + "-" 
				+ getFrameWidth() + ", category=" + getCategory()
				+ ", colors=" + getColors() + "]";
	}


}
