package com.spring.bearbom.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class CourserId implements Serializable {
	private int courserIdx;
	private int course;
}
