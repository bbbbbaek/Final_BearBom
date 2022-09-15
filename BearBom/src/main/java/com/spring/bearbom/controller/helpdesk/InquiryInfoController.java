package com.spring.bearbom.controller.helpdesk;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.entity.Inquiry;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.helpdesk.InquiryInfoService;

@RestController
@RequestMapping("/api/helpdesk")
public class InquiryInfoController {

	@Autowired
	private InquiryInfoService inquiryInfoService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	
	//백단으로 보내서 저장시키는것
	@PostMapping("/insertInquiry")
	public ResponseEntity<?> insertInquiry(@RequestBody Inquiry inquiry){
		System.out.println(inquiry.getInquiryEmail());
		System.out.println(inquiry.getInquirySort());
		System.out.println(inquiry.getInquiryTitle());
		System.out.println(inquiry.getInquiryContent());
		
		Inquiry onetoone = inquiryInfoService.insertInquiry(inquiry);
		InquiryDTO inquiryDTO = new InquiryDTO();
		
		inquiryDTO.setInquiryIdx(onetoone.getInquiryIdx());
		inquiryDTO.setInquiryEmail(onetoone.getInquiryEmail());
		inquiryDTO.setInquirySort(onetoone.getInquirySort());
		inquiryDTO.setInquiryTitle(onetoone.getInquiryTitle());
		inquiryDTO.setInquiryContetnt(onetoone.getInquiryContent());
		
		return ResponseEntity.ok().body(inquiryDTO);
	}
	
	
	
	//가져와서 화면에 보여주는것
	
	
	
//	@PostMapping("/getInquiryInfoList")
//	public ResponseEntity<?> getInquiryInfoList(@RequestBody Helpdesk helpdesk) {
//		try {
//			
//			List<Helpdesk> inquiryInfo = inquiryInfoService.inquiryInfo(helpdesk);
//	    	ResponseDTO<Helpdesk> response = new ResponseDTO<Helpdesk>();
//	    	response.setData(inquiryInfo);
//			
//			return ResponseEntity.ok().body(response);
//		} catch(Exception e) {
//			ResponseDTO<UserDTO> response = new ResponseDTO<>();
//
//			response.setError(e.getMessage());
//			return ResponseEntity.badRequest().body(response);
//		}
//	}
}
