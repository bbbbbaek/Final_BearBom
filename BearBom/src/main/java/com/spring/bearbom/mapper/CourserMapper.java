package com.spring.bearbom.mapper;


import java.util.List;


import com.spring.bearbom.entity.Courser;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.spring.bearbom.entity.Course;

@Mapper
public interface CourserMapper {
	
	@Select("SELECT COUNT(*) FROM T_COURSER WHERE COURSER_ID = #{courserIdx}")
	public double getRatingAvg(int courserIdx);
	
	@Select("SELECT AVG(a.courser_rate) FROM t_courser a, t_course b  where a.course_idx = b.courser_idx and course_idx = 14")
	public double updateRating1(Courser courser);
	
	
	@Select("SELECT AVG(courser_rate) FROM t_courser")
	public double updateRating(Courser courser);
	
	@Select("select * from t_course where course_use_yn = 'Y' order by course_cnt desc")
    List<Course> getCourseList(Course course);
	
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

