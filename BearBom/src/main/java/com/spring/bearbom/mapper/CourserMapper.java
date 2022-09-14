package com.spring.bearbom.mapper;

import org.apache.ibatis.annotations.Select;


public interface CourserMapper {

    @Select("SELECT COUNT(*) FROM T_COURSER WHERE COURSER_ID = #{courserIdx}")
    public double getRatingAvg(int courserIdx);

    @Select("SELECT AVG(courser_rate) FROM t_courser")
    public double updateRating(String string);

}