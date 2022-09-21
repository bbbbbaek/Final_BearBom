package com.spring.bearbom.controller.mypage3;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.service.mypage.MypageService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/like")
@Slf4j
public class MypageController {

	@Autowired
	MypageService mypageService;
	
	@GetMapping("/getWishList")
	public Map<String, Object> getWishList(@AuthenticationPrincipal String userId) {
		 CourseDTO courseDTO = new CourseDTO();
		 log.info("userId : {}", userId);
		 
		try {
			courseDTO.setUserId(userId);
			
			List<CourseDTO> wishList = mypageService.getWishList(courseDTO);
			Map<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("wishList", wishList);
			
			return resultMap;
		}
		catch (Exception e){
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}
	
	@GetMapping("/getWishCnt")
	public Map<String, Object> getWishCnt(@AuthenticationPrincipal String userId) {
		 CourseDTO courseDTO = new CourseDTO();
		 log.info("userId : {}", userId);
		 
		try {
			courseDTO.setUserId(userId);
			
			List<CourseDTO> wishCntList = mypageService.getWishCnt(courseDTO);
			Map<String, Object> resultMap = new HashMap<String, Object>();
			
			resultMap.put("wishCntList", wishCntList);
			
			return resultMap;
		}
		catch (Exception e){
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}
}
