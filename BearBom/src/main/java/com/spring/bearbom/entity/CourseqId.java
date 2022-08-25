package com.spring.bearbom.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class CourseqId implements Serializable {
	private int courseqIdx;
	private int course;
}
