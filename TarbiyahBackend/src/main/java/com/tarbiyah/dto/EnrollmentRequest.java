package com.tarbiyah.dto;

public class EnrollmentRequest {

	private Long student;
	private Long course;
	public EnrollmentRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EnrollmentRequest(Long student, Long course) {
		super();
		this.student = student;
		this.course = course;
	}
	public Long getStudent() {
		return student;
	}
	public void setStudent(Long student) {
		this.student = student;
	}
	public Long getCourse() {
		return course;
	}
	public void setCourse(Long course) {
		this.course = course;
	}
	@Override
	public String toString() {
		return "EnrollmentRequest [student=" + student + ", course=" + course + "]";
	}
	
	
}
