package com.tarbiyah.service;

import java.util.List;

import com.tarbiyah.entity.Enrollment;
import com.tarbiyah.entity.User;

public interface IEnrollmentService {

	List<Enrollment> findByStudent(User student);
	Enrollment enrollCourse(Long studentId,Long courseId);
}
