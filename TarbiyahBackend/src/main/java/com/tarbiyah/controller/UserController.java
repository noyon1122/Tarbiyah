package com.tarbiyah.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tarbiyah.dto.AuthenticationResponse;
import com.tarbiyah.entity.Role;

import com.tarbiyah.service.Impl.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

	private final UserService userService;
	
	
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}



	@GetMapping("/users")
	public ResponseEntity<AuthenticationResponse> findTeachers(@RequestParam Role role){
	
		AuthenticationResponse response=userService.findUsers(role);
		
		return ResponseEntity.ok(response);
	}
}
