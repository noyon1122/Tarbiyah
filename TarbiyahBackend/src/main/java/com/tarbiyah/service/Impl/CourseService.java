package com.tarbiyah.service.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tarbiyah.entity.Course;
import com.tarbiyah.repository.CourseRepository;
import com.tarbiyah.service.ICourseService;

@Service

public class CourseService implements ICourseService {
	
	private final CourseRepository courseRepository;

	public CourseService(CourseRepository courseRepository) {
		super();
		this.courseRepository = courseRepository;
	}

	@Override
	public Course createCourse(Course course) {
		
		return courseRepository.save(course);
	}

	@Override
	public List<Course> getAllCourse() {
		// TODO Auto-generated method stub
		return courseRepository.findAll();
	}

	@Override
	public List<Course> getPopularCourse() {
		
		return courseRepository.findByPopularTrue();
	}
	
	
	

}
