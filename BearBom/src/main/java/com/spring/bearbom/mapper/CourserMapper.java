package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.spring.bearbom.entity.Course;

@Mapper
public interface CourserMapper {
	
	@Select("SELECT COUNT(*) FROM T_COURSER WHERE COURSER_ID = #{courserIdx}")
	public double getRatingAvg(int courserIdx);
	
	@Select("SELECT AVG(courser_rate) FROM t_courser")
	public double updateRating(String string);
	
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

