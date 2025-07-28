package com.tarbiyah.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tarbiyah.entity.Role;
import com.tarbiyah.entity.User;
import com.tarbiyah.service.Impl.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

	private final UserService userService;
	
	
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}



	@GetMapping("/teachers")
	public ResponseEntity<List<User>> findTeachers(@RequestBody Role role){
		List<User> teachers=userService.findTeachers(role);
		
		return null;
	}
}
