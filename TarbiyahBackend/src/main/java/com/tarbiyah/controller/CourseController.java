package com.tarbiyah.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tarbiyah.entity.Course;
import com.tarbiyah.entity.Role;
import com.tarbiyah.entity.User;
import com.tarbiyah.service.Impl.CourseService;
import com.tarbiyah.service.Impl.UserService;

@RestController
@RequestMapping("/api")

public class CourseController {

	private final CourseService courseService;
	private final UserService userService;
	
	public CourseController(CourseService courseService, UserService userService) {
		super();
		this.courseService = courseService;
		this.userService = userService;
	}

	@PostMapping("/courses/create")
	public ResponseEntity<Course> createCourse(@RequestBody Course course,Principal principal)
	{
		User admin=userService.findByEmail(principal.getName());
		
		if (admin.getRole() != Role.ADMIN) {
            return ResponseEntity.status(403).build();
        }
        Course saved = courseService.createCourse(course);
        return ResponseEntity.ok(saved);
	}
	
	@GetMapping("/course/popular")
	public ResponseEntity<List<Course>> getPopularCourse(){
		List<Course> courseList=courseService.getPopularCourse();
		return ResponseEntity.ok(courseList);
	}
	
	@GetMapping("/courses")
	public ResponseEntity<List<Course>> getAllCourse(){
		List<Course> allCourse=courseService.getAllCourse();
		return ResponseEntity.ok(allCourse);
	}
}
