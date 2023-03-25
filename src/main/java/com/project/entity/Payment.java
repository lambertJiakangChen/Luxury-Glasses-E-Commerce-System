package com.project.entity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.*;

@Entity
public class Payment {
	
	@NotNull
	@Size(min = 16, max = 16, message = "Card number must be 16 characters long") 
	private long cardNum;
	@NotBlank
	@Pattern(regexp = "/")
	private Date exp; // in "MM/YY"
	@NotBlank
	private String cvv;
	
	
	public Payment(long cardNum, String mmyy, String cvv) throws ParseException {
		super();
		this.cardNum = cardNum;
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
	public long getCardNum() {
		return cardNum;
	}
	/**
	 * @param cardNum the cardNum to set
	 */
	public void setCardNum(long cardNum) {
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
