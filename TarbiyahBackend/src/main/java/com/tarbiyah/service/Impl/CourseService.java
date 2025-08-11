package com.tarbiyah.service.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tarbiyah.entity.Course;
import com.tarbiyah.exception.CustomException;
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
	
	@Override
	public Course findById(Long id) {
		
		return courseRepository.findById(id).orElseThrow(()->new CustomException("Opps Sorry!! Course not found"));
	}

	
	

}
