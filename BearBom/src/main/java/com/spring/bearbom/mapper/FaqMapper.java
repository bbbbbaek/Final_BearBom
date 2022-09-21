package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.entity.Inquiry;

@Mapper
public interface FaqMapper {
	@Select("SELECT * FROM t_guide WHERE GUIDE_USE_YN = 'Y'")
	List<Guide> faq(Guide guide);
}
