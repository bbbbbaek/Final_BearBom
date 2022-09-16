package com.spring.bearbom.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CourseMapper {
	List<Map<String, Object>> getLocationCodeList();
	
	List<Map<String, Object>> getCategoryCodeList();
}
