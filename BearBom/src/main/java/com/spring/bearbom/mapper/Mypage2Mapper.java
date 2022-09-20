package com.spring.bearbom.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.spring.bearbom.dto.InquiryDTO;

@Mapper
public interface Mypage2Mapper {

	List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

	
	List<Map<String, Object>> updateInquiryReference(String userId);

}
