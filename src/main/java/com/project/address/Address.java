package com.project.address;

import java.util.Objects;

public class Address {
	
	private String country;
	private String name;
	private String phone;
	private String line1;
	private String line2;
	private String city;
	private String province;
	private String postal;
	private boolean is_default = false;
	
	public Address(String country, String name, String phone, String line1, String line2,
			String city, String province, String postal, boolean makeDefault) {
		super();
		this.country = country;
		this.name = name;
		this.phone = phone;
		this.line1 = line1;
		this.line2 = line2;
		this.city = city;
		this.province = province;
		this.postal = postal;
		setDefault(makeDefault);
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
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
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
		setName(add.name);
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
		return "[Address: " + name.toUpperCase() + "\n" + line2 + " " + line1 + ",\n"
				+ city + ", " + province + " " + postal.toUpperCase() + " " + country + "\n" 
				+ phone;
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

}
