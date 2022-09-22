package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.entity.CourseFile;

public interface CourseFileMapper {

	
	public List<CourseFile> getCourseFileList( int courseIdx);
}
