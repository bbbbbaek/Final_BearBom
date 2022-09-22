package com.spring.bearbom.service.mypage;


import com.spring.bearbom.entity.User;
import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.dto.CourseDTO;
import java.util.List;
import java.util.Map;

public interface MypageService {
	User getUser(String userId);


	
	//유저 정보 수정
	void updateUser(User user);

//    List<Map<String, Object>> getInquiryReference(String userId);
    
    List<CourseDTO> getWishList(CourseDTO courseDTO);
	List<CourseDTO> getWishCnt(CourseDTO courseDTO);


    //재현
	List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

	void updateInquiryReference(InquiryDTO inquiryDTO);
	
}
