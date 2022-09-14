package com.spring.bearbom.mapper;

import com.spring.bearbom.dto.LikeDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface LikeMapper {
    //좋아요 확인
    @Select("SELECT COUNT(*) FROM T_LIKE WHERE COURSE_IDX=#{courseIdx} AND USER_ID=#{userId}")
    int readLike(LikeDto likeDto);

    //좋아요 등록
    @Insert("INSERT INTO T_LIKE(COURSE_IDX, USER_ID) VALUES  (#{courseIdx}, #{userId})")
    void like(LikeDto likeDto);


    //좋아요 삭제
    @Delete("DELETE FROM T_LIKE WHERE COURSE_IDX=#{courseIdx} AND USER_ID=#{userId}")
    void unLike(LikeDto likeDto);

//    @Select("SELECT * FROM T_LIKE WHERE COURSE_IDX=#{courseIdx} AND USER_ID=#{userId}")
//    void readLike(LikeDto likeDto);
}
