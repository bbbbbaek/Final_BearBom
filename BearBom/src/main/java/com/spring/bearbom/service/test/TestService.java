package com.spring.bearbom.service.test;

import com.spring.bearbom.dto.CourseDTO;

import java.util.List;
import java.util.Map;

public interface TestService {
    List<Map<String, Object>> liketest(CourseDTO courseDTO);

    List<Map<String, Object>> likedCourseCnt(CourseDTO courseDTO);

    List<Map<String, Object>> takingCourseCnt(CourseDTO courseDTO);

    List<Map<String, Object>> takenCourseCnt(CourseDTO courseDTO);

    List<Map<String, Object>> openedCourseCnt(CourseDTO courseDTO);
}
