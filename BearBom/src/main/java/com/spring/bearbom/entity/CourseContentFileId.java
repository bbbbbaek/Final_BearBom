package com.spring.bearbom.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class CourseContentFileId implements Serializable {
	private int courseContentFileIdx;
	private int course;
}
