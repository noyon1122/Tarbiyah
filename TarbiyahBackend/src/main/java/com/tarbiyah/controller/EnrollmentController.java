package com.tarbiyah.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.tarbiyah.dto.EnrollmentRequest;
import com.tarbiyah.entity.Course;
import com.tarbiyah.entity.Enrollment;
import com.tarbiyah.entity.User;
import com.tarbiyah.service.IEnrollmentService;
import com.tarbiyah.service.IUserService;
@RestController
@RequestMapping("/api")

public class EnrollmentController {

	private final IEnrollmentService enrollmentService;
    private final IUserService userService;
	
	public EnrollmentController(IEnrollmentService enrollmentService, IUserService userService) {
		super();
		this.enrollmentService = enrollmentService;
		this.userService = userService;
	}

	@PostMapping("/enrolls")
	public ResponseEntity<Enrollment> enrollCourse(@RequestBody EnrollmentRequest request) {
	    Enrollment enroll = enrollmentService.enrollCourse(request.getStudent(), request.getCourse());
	    return ResponseEntity.ok(enroll);
	}
	
	@GetMapping("/enrolls")
	public ResponseEntity<List<Course>> findAllEnrollCourseByStudent(Principal principal) {
	    String email = principal.getName();
	    User student = userService.findByEmail(email);
	    List<Course> courses = enrollmentService.findByStudent(student)
	        .stream()
	        .map(Enrollment::getCourse)
	        .toList();
	    return ResponseEntity.ok(courses);
	}

}
