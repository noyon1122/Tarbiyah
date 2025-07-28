package com.tarbiyah.service.Impl;

import java.util.List;

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
	public List<User> findTeachers(Role role) {

		List<User> teachersList=userRepository.findTop6ByRoleOrderByCreateAtDesc(role);
		return teachersList;
	}



	

	

}
