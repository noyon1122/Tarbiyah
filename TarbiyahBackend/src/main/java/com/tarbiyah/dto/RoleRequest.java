package com.tarbiyah.dto;

import com.tarbiyah.entity.Role;

public class RoleRequest {

	private Role role;

	public RoleRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RoleRequest(Role role) {
		super();
		this.role = role;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "RoleRequest [role=" + role + "]";
	}
	
	
}
