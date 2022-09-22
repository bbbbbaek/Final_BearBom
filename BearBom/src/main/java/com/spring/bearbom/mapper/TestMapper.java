package com.spring.bearbom.mapper;

import com.spring.bearbom.dto.CourseDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface TestMapper {
    List<Map<String, Object>> liketest(CourseDTO courseDTO);

    List<Map<String, Object>> likedCourseCnt(CourseDTO courseDTO);

    List<Map<String, Object>> takingCourseCnt(CourseDTO courseDTO);

    List<Map<String, Object>> takenCourseCnt(CourseDTO courseDTO);

    List<Map<String, Object>> openedCourseCnt(CourseDTO courseDTO);
}
