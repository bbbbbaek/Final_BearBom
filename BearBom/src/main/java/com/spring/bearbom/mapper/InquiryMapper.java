package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.spring.bearbom.entity.Inquiry;

@Mapper
public interface InquiryMapper {

	
	@Select("SELECT * FROM T_INQUIRY WHERE INQUIRY_USE_YN = 'Y'")
	List<Inquiry> inquiryInfoReference(Inquiry inquiry);

}
