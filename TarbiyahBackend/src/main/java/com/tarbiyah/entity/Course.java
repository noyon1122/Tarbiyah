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
@Table(name = "courses")

public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String description;
	private Integer fee;
	private Integer startAge;
	private Integer endAge;
	private LocalDate startDate;
	private LocalDate endDate;
	private Boolean popular;
	private LocalDate createDate;
	private String imageUrl;

	
	@ManyToOne
	@JoinColumn(name = "teacher_id")
	private User teacher;


	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Course(Long id, String title, String description, Integer fee, Integer startAge, Integer endAge,
			LocalDate startDate, LocalDate endDate, Boolean popular, LocalDate createDate, String imageUrl,
			User teacher) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.fee = fee;
		this.startAge = startAge;
		this.endAge = endAge;
		this.startDate = startDate;
		this.endDate = endDate;
		this.popular = popular;
		this.createDate = createDate;
		this.imageUrl = imageUrl;
		this.teacher = teacher;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Integer getFee() {
		return fee;
	}


	public void setFee(Integer fee) {
		this.fee = fee;
	}


	public Integer getStartAge() {
		return startAge;
	}


	public void setStartAge(Integer startAge) {
		this.startAge = startAge;
	}


	public Integer getEndAge() {
		return endAge;
	}


	public void setEndAge(Integer endAge) {
		this.endAge = endAge;
	}


	public LocalDate getStartDate() {
		return startDate;
	}


	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}


	public LocalDate getEndDate() {
		return endDate;
	}


	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}


	public Boolean getPopular() {
		return popular;
	}


	public void setPopular(Boolean popular) {
		this.popular = popular;
	}


	public String getImageUrl() {
		return imageUrl;
	}


	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}


	public User getTeacher() {
		return teacher;
	}


	public void setTeacher(User teacher) {
		this.teacher = teacher;
	}

	

	public LocalDate getCreateDate() {
		return createDate;
	}





	public void setCreateDate(LocalDate createDate) {
		this.createDate = createDate;
	}





	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", description=" + description + ", fee=" + fee + ", startAge="
				+ startAge + ", endAge=" + endAge + ", startDate=" + startDate + ", endDate=" + endDate + ", popular="
				+ popular + ", teacher=" + teacher + "]";
	}
	
	
	
	
	
	
}

