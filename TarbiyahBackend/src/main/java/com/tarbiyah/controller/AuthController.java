package com.tarbiyah.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tarbiyah.dto.AuthenticationResponse;
import com.tarbiyah.entity.User;
import com.tarbiyah.service.Impl.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController {

	private final UserService userService;

	public AuthController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(@RequestBody User user)
	{
		AuthenticationResponse response = userService.register(user);
		System.out.println("==> Response from service: " + response);
	    return ResponseEntity.ok(response);
	}
}
