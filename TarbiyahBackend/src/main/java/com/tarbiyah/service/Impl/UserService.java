package com.tarbiyah.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tarbiyah.dto.AuthenticationResponse;
import com.tarbiyah.dto.UserDTO;
import com.tarbiyah.entity.Role;
import com.tarbiyah.entity.User;
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
	public AuthenticationResponse findUsers(Role role) {
		
		AuthenticationResponse response=new AuthenticationResponse();
		
		try {
			List<User> users=userRepository.findAllByRole(role);
			List<UserDTO> userDtos=Utils.mapUserListEntityToUserListDTO(users);
			response.setStatusCode(200);
			response.setUserList(userDtos);
			response.setMessage("All Users Found Successfully!");
			
		} catch (Exception e) {
			response.setStatusCode(404);
			response.setMessage("Something went wrong! All users not found!!");
		}
		return response;
	}
	
	@Override
	public User findByEmail(String email) {
		
		
		  User user= userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found with email: " + email));
		 
			return user; 
	}


}
