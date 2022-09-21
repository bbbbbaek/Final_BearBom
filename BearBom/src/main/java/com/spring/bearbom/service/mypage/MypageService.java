package com.spring.bearbom.service.mypage;

import com.spring.bearbom.entity.User;

public interface MypageService {

	User getUser(String userId);
	
	//유저 정보 수정
	void updateUser(User user);
}
