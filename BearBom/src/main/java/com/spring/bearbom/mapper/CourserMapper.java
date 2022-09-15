package com.spring.bearbom.mapper;

import com.spring.bearbom.entity.Courser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface CourserMapper {
	
	@Select("SELECT COUNT(*) FROM T_COURSER WHERE COURSER_ID = #{courserIdx}")
	public double getRatingAvg(int courserIdx);
	
	@Select("SELECT AVG(courser_rate) FROM t_courser where course_idx = #{courseIdx}")
	public double updateRating(Courser courser);
	
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

