package com.spring.bearbom.controller.admin;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.GuideDTO;
import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.Inquiry;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.admin.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminInquiryController {
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@GetMapping("/getInquiryInfoReferenceList")
	public ResponseEntity<?> getInquiryInfoReferenceList() {
		try {
			
			
			List<InquiryDTO> inquiryInfoReference = adminService.inquiryInfoReference();
			
			System.out.println(inquiryInfoReference);
			
	    	ResponseDTO<InquiryDTO> response = new ResponseDTO<InquiryDTO>();
	    	response.setData(inquiryInfoReference);
			
			return ResponseEntity.ok().body(response);
		} catch(Exception e) {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();

			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	
	
//	@PostMapping("/updateInquiry")
//	public void updateInquiry(@RequestBody InquiryDTO inquiryDTO){	
//		
//		System.out.println("before inquiryDTO : " +inquiryDTO);
//		adminService.updateInquiry(inquiryDTO);
//		System.out.println("after guideDTO : " +inquiryDTO);
//	}
	@PostMapping("updateInquiry")
	public void updateInquiry(@RequestBody Map<String, Object> paramMap) {
		System.out.println("////paramMap : "+paramMap);
		System.out.println(paramMap.get("inquiryIdx"));
		adminService.updateInquiry(paramMap);
	}
	
	
	
}
