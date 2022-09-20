package com.spring.bearbom.service.mypage;

import com.spring.bearbom.dto.InquiryDTO;

import java.util.List;
import java.util.Map;

public interface MypageService {

    List<Map<String, Object>> getInquiryReference(String userId);
}
