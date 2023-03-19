package com.project.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "REVIEW")
public class Review {

	@Id @GeneratedValue
           
    private int rating;
    private Item item;
    private Long id;
    private String comments;
	
	
	private String userName;
	private String userEmail; 
	

 
	public Review(Long id, String userName, String userEmail, String comments, int rating, Item item){
		super();
		this.id = id;
		this.userName = userName;
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


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
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
		return "Review\n[id=" + getId() + ", Item=" + getItem() + ", UserName=" + getUserName() 
				+ ", UserEmail=" + getUserEmail() + ", Rating=" + getRating() 
				+ ", Comments=" + getComments() + "]\n";
	}


}