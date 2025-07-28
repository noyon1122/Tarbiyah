package com.tarbiyah.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tarbiyah.entity.Course;
import com.tarbiyah.entity.Enrollment;
import com.tarbiyah.entity.User;

@Repository

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
  
	boolean existsByStudentAndCourse(User student,Course course);
	List<Enrollment> findByStudent(User student);
	List<Enrollment> findByCourse(Course course);
}
