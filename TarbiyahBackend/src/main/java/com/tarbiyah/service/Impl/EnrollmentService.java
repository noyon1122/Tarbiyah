package com.tarbiyah.service.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tarbiyah.entity.Enrollment;
import com.tarbiyah.entity.User;
import com.tarbiyah.repository.EnrollmentRepository;
import com.tarbiyah.service.IEnrollmentService;

@Service

public class EnrollmentService implements IEnrollmentService {
	
	private EnrollmentRepository enrollmentRepository;
	

	public EnrollmentService(EnrollmentRepository enrollmentRepository) {
		super();
		this.enrollmentRepository = enrollmentRepository;
	}



	@Override
	public List<Enrollment> findByStudent(User student) {
		// TODO Auto-generated method stub
		List<Enrollment> enrollCourses=enrollmentRepository.findByStudent(student);
		return enrollCourses;
	}

	
}
