package com.tarbiyah.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tarbiyah.dto.AuthenticationResponse;
import com.tarbiyah.dto.LoginRequest;
import com.tarbiyah.entity.User;
import com.tarbiyah.service.Impl.AuthService;


@RestController
@RequestMapping("/auth")
public class AuthController {

	private final AuthService authService;

	public AuthController(AuthService authService) {
		super();
		this.authService = authService;
	}
	
	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(@RequestBody User user)
	{
		AuthenticationResponse response = authService.register(user);
		
	    return ResponseEntity.ok(response);
	}
	
	@PostMapping("/login")
	public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest loginRequest){
		AuthenticationResponse response=authService.login(loginRequest);
		return ResponseEntity.ok(response);
	}
}
