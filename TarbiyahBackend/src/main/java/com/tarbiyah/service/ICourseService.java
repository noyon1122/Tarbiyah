package com.tarbiyah.service;

import java.util.List;

import com.tarbiyah.entity.Course;

public interface ICourseService {

	public Course createCourse(Course course);
	public List<Course> getAllCourse();
	public List<Course> getPopularCourse();
}
