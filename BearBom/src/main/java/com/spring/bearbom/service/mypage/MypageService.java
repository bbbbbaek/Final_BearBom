package com.spring.bearbom.service.mypage;

<<<<<<< HEAD
=======

import com.spring.bearbom.entity.User;
import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.dto.CourseDTO;
>>>>>>> 29a84b79a9766a470866bac7ed6941483ea65a6b
import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;

public interface MypageService {
	User getUser(String userId);


	
	// 유저 정보 수정
	void updateUser(User user);
<<<<<<< HEAD
	
	// 유저 탈퇴 0922
	String deleteUserInfo(String userId);
	
	//
    List<Map<String, Object>> getInquiryReference(String userId);
=======

//    List<Map<String, Object>> getInquiryReference(String userId);
    
    List<CourseDTO> getWishList(CourseDTO courseDTO);
	List<CourseDTO> getWishCnt(CourseDTO courseDTO);
>>>>>>> 29a84b79a9766a470866bac7ed6941483ea65a6b


    //재현
	List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

	void updateInquiryReference(InquiryDTO inquiryDTO);
	
}
