package com.tarbiyah.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tarbiyah.entity.Course;
import com.tarbiyah.entity.User;

@Repository

public interface CourseRepository extends JpaRepository<Course, Long> {

	Optional<Course>findById(Long id);
	Optional<Course>findByTeacher(User teacher);
	
	//show popular course
	List<Course>findByPopularTrue();
	
	
	// Show newest courses for homepage
	 @Query("SELECT c FROM Course c ORDER BY c.createDate DESC")
	 List<Course> findTop10ByOrderByCreateDateDesc();
}
