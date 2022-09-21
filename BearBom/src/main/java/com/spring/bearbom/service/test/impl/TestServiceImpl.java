package com.spring.bearbom.service.test.impl;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.mapper.TestMapper;
import com.spring.bearbom.service.test.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TestServiceImpl implements TestService {

    @Autowired
    private TestMapper testMapper;

    @Override
    public List<Map<String, Object>> liketest(CourseDTO courseDTO) {
        return testMapper.liketest(courseDTO);
    }

    @Override
    public List<Map<String, Object>> likedCourseCnt(CourseDTO courseDTO) {
        return testMapper.likedCourseCnt(courseDTO);
    }

    @Override
    public List<Map<String, Object>> takingCourseCnt(CourseDTO courseDTO) {
        return testMapper.takingCourseCnt(courseDTO);
    }

    @Override
    public List<Map<String, Object>> takenCourseCnt(CourseDTO courseDTO) {
        return testMapper.takenCourseCnt(courseDTO);
    }

    @Override
    public List<Map<String, Object>> openedCourseCnt(CourseDTO courseDTO) {
        return testMapper.openedCourseCnt(courseDTO);
    }
}
