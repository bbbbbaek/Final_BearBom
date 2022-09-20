package com.spring.bearbom.service.mypage.impl;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.mapper.MypageMapper;
import com.spring.bearbom.service.mypage.MypageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MypageServiceImpl implements MypageService {

    @Autowired
    private MypageMapper mypageMapper;

    @Override
    public List<Map<String, Object>> getInquiryReference(String userId) {
        return mypageMapper.getInquiryReference(userId);
    }

//    @Override
//    public List<Map<String, Object>> getInquiryReference(String userId) {
//        return mypageMapper.getInquiryReference(userId);
//    }
}
