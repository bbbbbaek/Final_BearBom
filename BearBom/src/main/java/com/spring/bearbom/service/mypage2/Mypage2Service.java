package com.spring.bearbom.service.mypage2;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.InquiryDTO;

public interface Mypage2Service {

	List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

	List<Map<String, Object>> updateInquiryReference(String userId);

}
