package com.tarbiyah.dto;

import com.tarbiyah.entity.User;

public class AuthenticationResponse {
    private int statusCode;
	private String message;
    private UserDTO user;
	
	public AuthenticationResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public AuthenticationResponse(String message,int statusCode,UserDTO user) {
		super();
		this.message = message;
		this.statusCode = statusCode;
		this.user=user;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	
	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}



	@Override
	public String toString() {
		return "AuthenticationResponse [message=" + message + "]";
	}
	
	
	
	
}
