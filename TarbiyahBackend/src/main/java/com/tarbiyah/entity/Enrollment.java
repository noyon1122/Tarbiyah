package com.tarbiyah.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Entrollments")

public class Enrollment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate enrollDate;
	@ManyToOne
	@JoinColumn(name = "student_id")
	private User student;
	
	@ManyToOne
	@JoinColumn(name = "course_id")
	private Course course;

	public Enrollment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Enrollment(Long id, LocalDate enrollDate, User student, Course course) {
		super();
		this.id = id;
		this.enrollDate = enrollDate;
		this.student = student;
		this.course = course;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getEnrollDate() {
		return enrollDate;
	}

	public void setEnrollDate(LocalDate enrollDate) {
		this.enrollDate = enrollDate;
	}

	public User getStudent() {
		return student;
	}

	public void setStudent(User student) {
		this.student = student;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	@Override
	public String toString() {
		return "Enrollment [id=" + id + ", enrollDate=" + enrollDate + ", student=" + student + ", course=" + course
				+ "]";
	}
	
	
	
	
}
