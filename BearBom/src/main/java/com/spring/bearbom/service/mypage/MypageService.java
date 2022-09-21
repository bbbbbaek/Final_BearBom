package com.spring.bearbom.service.mypage;

import java.util.List;

import com.spring.bearbom.dto.CourseDTO;

public interface MypageService {

	List<CourseDTO> getWishList(CourseDTO courseDTO);
	List<CourseDTO> getWishCnt(CourseDTO courseDTO);
 
}
