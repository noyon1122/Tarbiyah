package com.tarbiyah.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User implements UserDetails{

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String firstName;
	private String lastName;
	private String username;
	@Column( unique = true)
	private String email;
	private String password;
	private String mobile;
	private String gender;
	private String imageUrl;
	private LocalDate dob;
	private String address;
	private Boolean isActive;
	@Enumerated(EnumType.STRING)
	private Role role;
	private LocalDateTime createAt;
	
	@OneToMany(mappedBy = "user")
	private List<Token> tokens;
	
	@OneToMany(mappedBy = "teacher")
	private List<Course> courses;
	@OneToMany(mappedBy = "student")
	private List<Enrollment> enrollments;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(Long id, String firstName, String lastName, String username, String email, String password,
			String mobile, String gender, String imageUrl, LocalDate dob, String address, Boolean isActive, Role role,
			LocalDateTime createAt, List<Token> tokens) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.gender = gender;
		this.imageUrl = imageUrl;
		this.dob = dob;
		this.address = address;
		this.isActive = isActive;
		this.role = role;
		this.createAt = createAt;
		this.tokens = tokens;
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
		return email;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	public LocalDateTime getCreateAt() {
		return createAt;
	}
	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}
	
	public List<Token> getTokens() {
		return tokens;
	}

	public void setTokens(List<Token> tokens) {
		this.tokens = tokens;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return List.of(new SimpleGrantedAuthority("ROLE_"+this.role.name()));
	}
	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		
		return true;
	}
	@Override
	public boolean isEnabled() {
		
		return true;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", username=" + username
				+ ", email=" + email + ", password=" + password + ", mobile=" + mobile + ", gender=" + gender
				+ ", imageUrl=" + imageUrl + ", dob=" + dob + ", address=" + address + ", isActive=" + isActive
				+ ", role=" + role + ", createAt=" + createAt + "]";
	}
	
	
}
