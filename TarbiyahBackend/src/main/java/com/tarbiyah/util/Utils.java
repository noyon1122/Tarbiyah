package com.tarbiyah.util;

import com.tarbiyah.dto.UserDTO;
import com.tarbiyah.entity.User;

public class Utils {

	public static UserDTO mapUserEntityToUserDTO (User user) {
		UserDTO userDTO=new UserDTO();
		userDTO.setId(user.getId());
		userDTO.setFirstName(user.getFirstName());
		userDTO.setLastName(user.getLastName());
		userDTO.setUsername(user.getUsername());
		userDTO.setEmail(user.getEmail());
		userDTO.setMobile(user.getMobile());
		userDTO.setGender(user.getGender());
		userDTO.setImageUrl(user.getImageUrl());
		userDTO.setDob(user.getDob());
		userDTO.setAddress(user.getAddress());
		userDTO.setIsActive(user.getIsActive());
		userDTO.setRole(user.getRole());
		return userDTO;
	}
}
