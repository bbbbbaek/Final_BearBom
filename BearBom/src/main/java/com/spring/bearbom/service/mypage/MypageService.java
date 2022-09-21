package com.spring.bearbom.service.mypage;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.entity.User;

public interface MypageService {
	User getUser(String userId);

    //재현
	List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

	void updateInquiryReference(InquiryDTO inquiryDTO);
	
}
