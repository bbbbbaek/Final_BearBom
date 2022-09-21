package com.spring.bearbom.controller.mypage;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.service.mypage.MypageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/mypage")
@Slf4j
public class MypageInquiryController {

    @Autowired
    private MypageService mypageService;

    @GetMapping("/getInquiryReference")
    public Map<String, Object> getInquiryReference(InquiryDTO inquiryDTO, @AuthenticationPrincipal String userId) {
        try{

            inquiryDTO.setUserId(userId);

            List<Map<String, Object>> getInquiryReference = mypageService.getInquiryReference(inquiryDTO.getUserId());

            Map<String, Object> resultMap = new HashMap<String, Object>();

            resultMap.put("getInquiryReference", getInquiryReference);

            return resultMap;

        } catch (Exception e) {
            Map<String, Object> errorMap = new HashMap<>();
            errorMap.put("error", e.getMessage());
            return errorMap;
        }
    }
}
