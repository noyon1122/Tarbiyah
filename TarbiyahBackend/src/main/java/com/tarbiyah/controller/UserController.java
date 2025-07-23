package com.tarbiyah.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

	@GetMapping("/demo")
	public ResponseEntity<String > demo(){
		return ResponseEntity.ok("Hello from Sucured URL");
	}
}
