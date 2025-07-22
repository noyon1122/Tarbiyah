package com.tarbiyah.dto;

import java.time.LocalDate;

import com.tarbiyah.entity.Role;

public class UserDTO {
	private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String mobile;
    private String gender;
    private String imageUrl;
    private LocalDate dob;
    private String address;
    private Boolean isActive;
    private Role role;
	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserDTO(Long id,String firstName, String lastName, String username, String email, String mobile, String gender,
			String imageUrl, LocalDate dob, String address, Boolean isActive, Role role) {
		super();
		this.id=id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.mobile = mobile;
		this.gender = gender;
		this.imageUrl = imageUrl;
		this.dob = dob;
		this.address = address;
		this.isActive = isActive;
		this.role = role;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Boolean getIsActive() {
		return isActive;
	}
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "UserDTO [firstName=" + firstName + ", lastName=" + lastName + ", username=" + username + ", email="
				+ email + ", mobile=" + mobile + ", gender=" + gender + ", imageUrl=" + imageUrl + ", dob=" + dob
				+ ", address=" + address + ", isActive=" + isActive + ", role=" + role + "]";
	}

    
}
