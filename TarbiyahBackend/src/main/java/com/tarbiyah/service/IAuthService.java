package com.tarbiyah.service;

import com.tarbiyah.dto.AuthenticationResponse;
import com.tarbiyah.dto.LoginRequest;
import com.tarbiyah.entity.User;

public interface IAuthService {

	AuthenticationResponse register(User user);
	AuthenticationResponse login(LoginRequest loginRequest);
}
