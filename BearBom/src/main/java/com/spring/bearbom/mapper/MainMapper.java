package com.spring.bearbom.mapper;

import com.spring.bearbom.entity.Course;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MainMapper {

    //@Select("select * from t_course where course_use_yn = 'Y' order by course_cnt desc")
    List<Course> getCourseList(Course course);

    @Select("SELECT * FROM t_course WHERE course_use_yn = 'Y' and DATEDIFF(DATE(NOW()), course_end_date) = 1")
    List<Course> getCourseEndDateList(Course course);
}
