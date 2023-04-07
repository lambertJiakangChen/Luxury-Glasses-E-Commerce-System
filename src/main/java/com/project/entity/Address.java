package com.project.entity;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "Address")
public class Address {
	
	@Id @GeneratedValue
	private long addId;
	
	@NotBlank(message = "Please enter country")
	private String country;
	@NotNull
	@NotBlank(message = "Please enter your phone number")
	@Size(min = 10, max = 10, message = "Phone number must be 10 characters long")
	private String phone;
	@NotBlank(message = "Please enter line 1 address")
	private String line1;
	private String line2;
	@NotBlank(message = "Please enter city")
	private String city;
	@NotBlank(message = "Please enter province/state")
	private String province;
	@NotBlank(message = "Please enter postal code")
	@Size(min = 6, max = 6, message = "Postal code must be 6 characters long no space")
	private String postal;
	private boolean is_default = false;
	
	public Address(long addId, String country, String phone, String line1, String line2,
			String city, String province, String postal, boolean makeDefault) throws Exception {
		super();
		this.addId = addId;
		this.country = country;
		this.phone = phone;
		this.line1 = line1;
		this.line2 = line2;
		this.city = city;
		this.province = province;
		this.postal = postal;
		setDefault(makeDefault);
		
		if (this.addId == 0L || this.country == null || this.phone == null || this.line1 == null 
				|| this.city == null || this.province == null || this.postal == null) {
			throw new Exception("Missing fields! Please re-enter shipping details");
		}
		
		if (!isPhoneValid()) {
			throw new Exception("Phone number must be 10 digits long");
		}
			
		if (!isPostalValid()) {
			throw new Exception("Postal code must be 6 characters long no space");
		}
	}
	
	public Address() {
		
	}

	/**
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}

	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		this.country = country;
	}

	
	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * @param phone the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * @return the line1
	 */
	public String getLine1() {
		return line1;
	}

	/**
	 * @param line1 the line1 to set
	 */
	public void setLine1(String line1) {
		this.line1 = line1;
	}

	/**
	 * @return the line2
	 */
	public String getLine2() {
		return line2;
	}

	/**
	 * @param line2 the line2 to set
	 */
	public void setLine2(String line2) {
		this.line2 = line2;
	}

	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}

	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}

	/**
	 * @return the province
	 */
	public String getProvince() {
		return province;
	}

	/**
	 * @param province the province to set
	 */
	public void setProvince(String province) {
		this.province = province;
	}

	/**
	 * @return the postal
	 */
	public String getPostal() {
		return postal;
	}

	/**
	 * @param postal the postal to set
	 */
	public void setPostal(String postal) {
		this.postal = postal;
	}

	/**
	 * @return the is_default
	 */
	public boolean isIs_default() {
		return is_default;
	}

	/**
	 * @param is_default the is_default to set
	 */
	public void setDefault(boolean is_default) {
		this.is_default = is_default;
	}
	
	public void modify(Address add) {
		setCountry(add.country);
		setPhone(add.phone);
		setLine1(add.line1);
		setLine2(add.line2);
		setCity(add.city);
		setProvince(add.province);
		setPostal(add.postal);
		setDefault(add.is_default);
	}
	
	
	@Override
	public String toString() {
		return "[Address: " + "\n" + line2 + " " + line1 + ",\n"
				+ city + ", " + province + " " + postal.toUpperCase() + " " + country + "\n" 
				+ phone + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(city, country, is_default, line1, line2, postal, province);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!(obj instanceof Address))
			return false;
		Address other = (Address) obj;
		return Objects.equals(city, other.city) && Objects.equals(country, other.country)
				&& is_default == other.is_default && Objects.equals(line1, other.line1)
				&& Objects.equals(line2, other.line2) && Objects.equals(postal, other.postal)
				&& Objects.equals(province, other.province);
	}
	
	boolean isPhoneValid() {
		return phone.length() == 10;
	}
	
	boolean isPostalValid() {
		return postal.length() == 6;
	}

}
