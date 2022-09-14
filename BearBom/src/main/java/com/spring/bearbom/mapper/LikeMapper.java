package com.spring.bearbom.mapper;

import com.spring.bearbom.dto.LikeDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface LikeMapper {

    void like(LikeDto likeDto);


    @Select("SELECT COUNT(*) FROM T_LIKE WHERE COURSE_IDX=#{courseIdx} AND USER_ID=#{userId}")
    int readLike(LikeDto likeDto);

//    @Select("SELECT * FROM T_LIKE WHERE COURSE_IDX=#{courseIdx} AND USER_ID=#{userId}")
//    void readLike(LikeDto likeDto);
}
