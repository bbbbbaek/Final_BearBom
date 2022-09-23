package com.spring.bearbom.service.mypage;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.entity.User;

import java.util.List;
import java.util.Map;

public interface MypageService {
   User getUser(String userId);



<<<<<<< HEAD
   // 유저 정보 수정
   void updateUser(User user);


   // 유저 탈퇴 0922
   String deleteUserInfo(String userId);
=======
	// 유저 정보 수정
	void updateUser(User user);


	// 유저 탈퇴 0922
	String deleteUserInfo(String userId);
>>>>>>> 02cfacf445f3e16f14b9fcc48e37d95c1c51b575


//    List<Map<String, Object>> getInquiryReference(String userId);

<<<<<<< HEAD
   List<CourseDTO> getWishList(CourseDTO courseDTO);
   List<CourseDTO> getWishCnt(CourseDTO courseDTO);



   //재현
   List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

   void updateInquiryReference(InquiryDTO inquiryDTO);

}
=======
	List<CourseDTO> getWishList(CourseDTO courseDTO);
	List<CourseDTO> getWishCnt(CourseDTO courseDTO);



	//재현
	List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

	void updateInquiryReference(InquiryDTO inquiryDTO);

}
>>>>>>> 02cfacf445f3e16f14b9fcc48e37d95c1c51b575
