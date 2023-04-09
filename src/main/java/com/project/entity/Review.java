package com.project.entity;



import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "REVIEW")
public class Review {

	@Id @GeneratedValue  
	private Long id;
    private int rating;
    private String comments;
	
    @JsonIgnore 
	@ManyToOne
    private Item item;
	private String userEmail; 
	

 
	public Review(Long id, String userEmail, String comments, int rating, Item item){
		super();
		this.id = id;
		this.userEmail = userEmail;
		this.comments = comments;
		this.rating = rating;
		this.item = item;
	}
	
	public Review() {
		rating = 5;
	}
	
	
	
    //getters and setters
	//toString method
	
	 
	public int getRating() {
		return rating;
	}
	
	public void setRating(int ratings) {
		this.rating = ratings;
	}


	public Item getItem() {
		return item;
	}
	

	public void setItem(Item item) {
		this.item = item;
	}

	

	public String getUserEmail() {
		return userEmail;
	}


	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}


	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}
	
	

	@Override
	public String toString() {
		return "Review\n[id=" + getId() + ", Item=" + getItem() 
				+ ", UserEmail=" + getUserEmail() + ", Rating=" + getRating() 
				+ ", Comments=" + getComments() + "]\n";
	}


}