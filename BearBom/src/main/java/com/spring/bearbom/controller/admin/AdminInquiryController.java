package com.spring.bearbom.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	@PostMapping("/getInquiryInfoReferenceList")
	public ResponseEntity<?> getInquiryInfoReferenceList( Inquiry inquiry) {
		try {
			
			List<Inquiry> inquiryInfoReference = adminService.inquiryInfoReference(inquiry);
	    	ResponseDTO<Inquiry> response = new ResponseDTO<Inquiry>();
	    	response.setData(inquiryInfoReference);
			
			return ResponseEntity.ok().body(response);
		} catch(Exception e) {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();

			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}
}
