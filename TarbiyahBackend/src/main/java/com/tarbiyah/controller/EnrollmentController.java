package com.tarbiyah.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.tarbiyah.dto.EnrollmentRequest;
import com.tarbiyah.entity.Enrollment;
import com.tarbiyah.service.IEnrollmentService;
import com.tarbiyah.service.Impl.EnrollmentService;

@RestController
@RequestMapping("/api")

public class EnrollmentController {

	private final IEnrollmentService enrollmentService;

	public EnrollmentController(EnrollmentService enrollmentService) {
		super();
		this.enrollmentService = enrollmentService;
	}
	
	@PostMapping("/enroll")
	public ResponseEntity<Enrollment> enrollCourse(@RequestBody EnrollmentRequest request) {
	    Enrollment enroll = enrollmentService.enrollCourse(request.getStudent(), request.getCourse());
	    return ResponseEntity.ok(enroll);
	}

}
