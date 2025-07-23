package com.tarbiyah.service.Impl;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tarbiyah.entity.User;

import com.tarbiyah.repository.UserRepository;

@Service

public class CustomUserDetailsService implements UserDetailsService {

	private final UserRepository userRepository;
	
	public CustomUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		Optional<User>userOpt=userRepository.findByEmail(email);
		return userOpt.orElseThrow(()-> new UsernameNotFoundException("User not found!!"));
	}

}
