package com.spring.bearbom.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;

@Mapper
public interface CourserMapper {
	
	@Select("SELECT COUNT(*) FROM T_COURSER WHERE COURSER_ID = #{courserIdx}")
	public double getRatingAvg(int courserIdx);
	
	@Select("SELECT AVG(courser_rate) FROM t_courser where course_idx = #{courseIdx}")
	public double updateRating1(Courser courser);
	
	
	@Select("SELECT round(AVG(courser_rate),1) FROM t_courser")
	public double updateRating(Courser courser);
	
//	@Select("select * from t_course where course_use_yn = 'Y' and course_idx = #{courseIdx} order by course_cnt desc")
//    List<Course> getCourseList(Course course);
	
	@Select("select * from t_course where course_idx = #{courseIdx}")
    Course getCourse(@Param("courseIdx") int courseIdx);
	
}


//public interface CourserMapper {
//
//    @Select("SELECT COUNT(*) FROM T_COURSER WHERE COURSER_ID = #{courserIdx}")
//    public double getRatingAvg(int courserIdx);
//
//    @Select("SELECT AVG(courser_rate) FROM t_courser")
//    public double updateRating(String string);
//
//}

