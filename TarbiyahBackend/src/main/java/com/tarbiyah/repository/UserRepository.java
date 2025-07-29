package com.tarbiyah.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tarbiyah.entity.Role;
import com.tarbiyah.entity.User;



@Repository

public interface UserRepository extends JpaRepository<User, Long> {

	boolean existsByEmail(String email);
	Optional<User>findByEmail(String email);
	List<User> findTop6ByRoleOrderByCreateAtDesc(Role role);
	List<User> findAllByRole(Role role);

}
