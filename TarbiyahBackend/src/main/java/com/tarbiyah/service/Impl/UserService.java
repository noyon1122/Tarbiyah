package com.tarbiyah.service.Impl;

import org.springframework.stereotype.Service;

import com.tarbiyah.dto.AuthenticationResponse;
import com.tarbiyah.dto.LoginRequest;
import com.tarbiyah.dto.UserDTO;
import com.tarbiyah.entity.Role;
import com.tarbiyah.entity.User;
import com.tarbiyah.exception.CustomException;
import com.tarbiyah.repository.UserRepository;
import com.tarbiyah.service.IUserService;
import com.tarbiyah.util.Utils;

@Service

public class UserService implements IUserService {

	private final UserRepository userRepository;
	
	
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
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
			
	        //save user 
			User savedUser=userRepository.save(user);
			UserDTO userDTO = Utils.mapUserEntityToUserDTO(savedUser);
			response.setStatusCode(200);
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
		
		
		
		return null;
	}

}
