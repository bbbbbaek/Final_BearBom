package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

import com.spring.bearbom.dto.InquiryDTO;

@Mapper
public interface AdminInquiryMapper {

	//1대1문의 쿼리
	List<InquiryDTO> adminInquiryMapper();

	@Update("update t_inquiry set inquiry_use_yn ='N' where INQUIRY_IDX = #{inquiryIdx}")
	void updateInquiry(InquiryDTO inquiryDTO);
	
	//공지사항 문의
	
}
