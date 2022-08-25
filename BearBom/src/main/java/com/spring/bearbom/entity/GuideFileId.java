package com.spring.bearbom.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class GuideFileId implements Serializable {
	private int guideFileIdx;
	private int guide;
}
