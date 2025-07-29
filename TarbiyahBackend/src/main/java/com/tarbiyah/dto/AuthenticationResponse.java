package com.tarbiyah.dto;

import java.util.List;

public class AuthenticationResponse {
    private int statusCode;
	private String message;
	private String accessToken;
	private String refreshToken;
    private UserDTO user;
    private List<UserDTO>userList;
	
	public AuthenticationResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public AuthenticationResponse(int statusCode, String message, String accessToken, String refreshToken, UserDTO user,
			List<UserDTO> userList) {
		super();
		this.statusCode = statusCode;
		this.message = message;
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.user = user;
		this.userList = userList;
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
	
	public String getAccessToken() {
		return accessToken;
	}


	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}


	public String getRefreshToken() {
		return refreshToken;
	}


	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}


	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}


	public List<UserDTO> getUserList() {
		return userList;
	}


	public void setUserList(List<UserDTO> userList) {
		this.userList = userList;
	}


	@Override
	public String toString() {
		return "AuthenticationResponse [message=" + message + "]";
	}
	
	
	
	
}
