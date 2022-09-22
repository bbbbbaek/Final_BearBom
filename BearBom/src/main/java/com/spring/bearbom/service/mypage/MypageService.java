package com.spring.bearbom.service.mypage;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;

public interface MypageService {
	User getUser(String userId);

	
	// 유저 정보 수정
	void updateUser(User user);
	
	// 유저 탈퇴 0922
	String deleteUserInfo(String userId);
	
	//
    List<Map<String, Object>> getInquiryReference(String userId);

}
