package com.spring.bearbom.controller.helpdesk;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.Notice;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.helpdesk.NoticeService;

@RestController
@RequestMapping("api/helpdesk")
public class NoticeController {
	
	@Autowired
	private NoticeService noticeService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	//공지사항 띄우는 것 
	@PostMapping("/getNoticeList")
	public ResponseEntity<?> getNoticeList(@RequestBody Notice notice) {
		try {
			
			List<Notice> noticetest = noticeService.notice(notice);
	    	ResponseDTO<Notice> response = new ResponseDTO<Notice>();
	    	response.setData(noticetest);
			
			return ResponseEntity.ok().body(response);
		} catch(Exception e) {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();

			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}
	
//	@PostMapping("insertNotice")
//	public ResponseEntity<?> insertNotice(@RequestBody Notice notice){
//		System.out.println(notice.getNoticeIdx());
//		System.out.println(notice.getNoticeNm());
//		System.out.println(notice.getNoticeContent());
//		System.out.println(notice.getNoticeRegdate());
//		System.out.println(notice.getNoticeMdfdate());
//		System.out.println(notice.getNoticeUseYn());
//		System.out.println(notice.getUser());
//		
//		
//		Notice rhdwl = noticeService.insertNotice(notice);
//		NoticeDTO noticeDTO = new NoticeDTO();
//		
//		noticeDTO.setNoticeIdx(rhdwl.getNoticeIdx());
//		noticeDTO.setNoticeNm(rhdwl.getNoticeNm());
//		noticeDTO.setNoticeContent(rhdwl.getNoticeContent());
//		noticeDTO.setNoticeRegdate(rhdwl.getNoticeRegdate());
//		noticeDTO.setNoticeMdfdate(rhdwl.getNoticeMdfdate());
//		noticeDTO.setNoticeUseYn(rhdwl.getNoticeUseYn());
//		noticeDTO.setUser(rhdwl.getUser());
//		
//		return ResponseEntity.ok().body(noticeDTO);
//		
//	//	return ResponseEntity.ok().body(inquiryDTO);
//	}

}
