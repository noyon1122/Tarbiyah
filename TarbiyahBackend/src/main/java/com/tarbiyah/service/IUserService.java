package com.tarbiyah.service;

import java.util.List;

import com.tarbiyah.entity.Role;
import com.tarbiyah.entity.User;

public interface IUserService {
  
	List<User> findTeachers(Role role);
	
}
