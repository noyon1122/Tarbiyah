package com.tarbiyah.service.Impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tarbiyah.dto.AuthenticationResponse;
import com.tarbiyah.dto.LoginRequest;
import com.tarbiyah.dto.UserDTO;
import com.tarbiyah.entity.Role;
import com.tarbiyah.entity.Token;
import com.tarbiyah.entity.User;
import com.tarbiyah.exception.CustomException;
import com.tarbiyah.jwt.JwtService;
import com.tarbiyah.repository.TokenRepository;
import com.tarbiyah.repository.UserRepository;
import com.tarbiyah.service.IAuthService;
import com.tarbiyah.util.Utils;

@Service

public class AuthService implements IAuthService {

	private final UserRepository userRepository;
	private final TokenRepository tokenRepository;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	private final PasswordEncoder passwordEncoder;
	
	

	public AuthService(UserRepository userRepository, TokenRepository tokenRepository, JwtService jwtService,
			AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder) {
		super();
		this.userRepository = userRepository;
		this.tokenRepository = tokenRepository;
		this.jwtService = jwtService;
		this.authenticationManager = authenticationManager;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public AuthenticationResponse register(User user) {
		
		AuthenticationResponse response=new AuthenticationResponse();
		try {
			if(user.getRole()==null)
			{
				 user.setRole(Role.valueOf("USER"));
				
			}
			else if(userRepository.existsByEmail(user.getEmail()))
			{
				throw new CustomException("Opps Sorry!! The email address already exists!!");
			}
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			user.setCreateAt(LocalDateTime.now());
			user.setIsActive(true);
			//save user 
			User savedUser=userRepository.save(user);
			UserDTO userDTO = Utils.mapUserEntityToUserDTO(savedUser);
			String accessToken=jwtService.generateAccessToken(savedUser);
			String refreshToken=jwtService.generateRefreshToken(savedUser);
			
			savedUserToken(accessToken,refreshToken,user);
			
			response.setStatusCode(200);
			response.setAccessToken(accessToken);
			response.setRefreshToken(refreshToken);
			response.setUser(userDTO);
			response.setMessage("Welcome! Your registration was successful!!");
			
		}catch (CustomException e) {
			response.setStatusCode(400);
			response.setMessage(e.getMessage());
		}
		
		catch (Exception e) {
			response.setStatusCode(500);
			response.setMessage("Error Saving a User"+e.getMessage());
		}
		return response;
	}

	@Override
	public AuthenticationResponse login(LoginRequest loginRequest) {
		
		AuthenticationResponse response=new AuthenticationResponse();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),loginRequest.getPassword() ));
			User user=userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(()->new CustomException("Opps Sorru!! User not found"));
			String accessToken=jwtService.generateAccessToken(user);
			String refreshToken=jwtService.generateRefreshToken(user);
			UserDTO userDTO = Utils.mapUserEntityToUserDTO(user);
			invalidAllUserToken(user);
			savedUserToken(accessToken,refreshToken, user);
			response.setAccessToken(accessToken);
			response.setRefreshToken(refreshToken);
			response.setStatusCode(200);
			response.setUser(userDTO);
			response.setMessage("User login successfully!!");
		}catch (CustomException e) {
			response.setStatusCode(404);
		}
		catch (Exception e) {
			response.setStatusCode(500);
            response.setMessage("Error Logging in " + e.getMessage());
		}
		return response;
	}
	
	private void savedUserToken(String accessToken,String refreshToken,User user)
	{
		Token token=new Token();
		token.setAccessToken(accessToken);
		token.setRefreshToken(refreshToken);
		token.setUser(user);
		token.setLogout(false);
		tokenRepository.save(token);
	}
	
	 private void invalidAllUserToken(User user)
	    {
	    	List<Token> allTokens=tokenRepository.findAllTokensByUserId(user.getId());
	    	
	    	if(allTokens.isEmpty())
	    	{
	    		return;
	    	}
	    	
	    	allTokens.forEach(t-> t.setLogout(true));
	    	
	    	tokenRepository.saveAll(allTokens);
	    }
	
}
