package com.tarbiyah.service.Impl;

import java.lang.constant.Constable;
import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.tarbiyah.entity.Course;
import com.tarbiyah.entity.Enrollment;
import com.tarbiyah.entity.User;
import com.tarbiyah.repository.CourseRepository;
import com.tarbiyah.repository.EnrollmentRepository;
import com.tarbiyah.repository.UserRepository;
import com.tarbiyah.service.IEnrollmentService;

@Service

public class EnrollmentService implements IEnrollmentService {
	
	private EnrollmentRepository enrollmentRepository;
	private UserRepository userRepository;
	private CourseRepository courseRepository;
	


	
	public EnrollmentService(EnrollmentRepository enrollmentRepository, UserRepository userRepository,
			CourseRepository courseRepository) {
		super();
		this.enrollmentRepository = enrollmentRepository;
		this.userRepository = userRepository;
		this.courseRepository = courseRepository;
	}


	@Override
	public Enrollment enrollCourse(Long studentId,Long courseId) {
		User student = userRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

		Enrollment enrollment=new Enrollment();
		enrollment.setEnrollDate(LocalDate.now());
		enrollment.setStudent(student);
		enrollment.setCourse(course);
		return enrollmentRepository.save(enrollment);
	}
    

	@Override
	public List<Enrollment> findByStudent(User student) {
		// TODO Auto-generated method stub
		List<Enrollment> enrollCourses=enrollmentRepository.findByStudent(student);
		return enrollCourses;
	}



	
	
	

	
}
