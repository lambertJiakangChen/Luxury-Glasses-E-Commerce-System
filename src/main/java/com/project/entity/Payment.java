package com.project.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;

@Entity
public class Payment {
	
	@Id
	private long id;
	@NotNull
	@NotBlank(message = "Please enter card number")
	@Size(min = 16, max = 16, message = "Card number must be 16 characters long") 
	private String cardNum;
	@NotBlank(message = "Please enter the expiry date on your card in MM/YY")
	@Pattern(regexp = "/")
	private Date exp; // in "MM/YY"
	@NotBlank(message = "Please enter your cvv code")
	@Size(min = 3, max = 3, message = "cvv code must be 3 characters long") 
	private String cvv;
	
	
	public Payment(String cardNum, String mmyy, String cvv) throws ParseException {
		super();
		this.cardNum = cardNum;
		this.id = Long.parseLong(cardNum);
		SimpleDateFormat input = new SimpleDateFormat("MM/YY");
		this.exp = input.parse(mmyy);
		this.cvv = cvv;
	}
	
	
	/**
	 * @return the exp
	 */
	public Date getExp() {
		return exp;
	}
	/**
	 * @param exp the exp to set
	 */
	public void setExp(Date exp) {
		this.exp = exp;
	}
	/**
	 * @return the cardNum
	 */
	public String getCardNum() {
		return cardNum;
	}
	/**
	 * @param cardNum the cardNum to set
	 */
	public void setCardNum(String cardNum) {
		this.cardNum = cardNum;
	}

	/**
	 * @return the cvv
	 */
	public String getCvv() {
		return cvv;
	}
	/**
	 * @param cvv the cvv to set
	 */
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	
	boolean isExpired() {
		Date curr = new Date(System.currentTimeMillis());
		return this.exp.after(curr);
	}
	

}
