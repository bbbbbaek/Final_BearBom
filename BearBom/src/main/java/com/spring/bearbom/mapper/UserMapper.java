package com.spring.bearbom.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Select("SELECT COUNT(*) FROM T_USER WHERE USER_ID = #{userId}")
    int idDuplicate(String userId);
}
