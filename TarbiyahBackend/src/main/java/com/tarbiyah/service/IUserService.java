package com.tarbiyah.service;


import com.tarbiyah.dto.AuthenticationResponse;
import com.tarbiyah.entity.Role;
import com.tarbiyah.entity.User;


public interface IUserService {
  
	AuthenticationResponse findTeachers(Role role);
	public User findByEmail(String email);
	
}
