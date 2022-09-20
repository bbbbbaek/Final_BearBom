package com.spring.bearbom.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.NoticeDTO;
import com.spring.bearbom.entity.Notice;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.helpdesk.NoticeService;

@RestController
@RequestMapping("/api/admin")

public class AdminNoticeController {
	@Autowired
	private NoticeService noticeService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@PostMapping("insertNotice")
	public ResponseEntity<?> insertNotice(@RequestBody Notice notice){
		System.out.println(notice.getNoticeIdx());
		System.out.println(notice.getNoticeNm());
		System.out.println(notice.getNoticeContent());
		System.out.println(notice.getNoticeRegdate());
		System.out.println(notice.getNoticeMdfdate());
		System.out.println(notice.getNoticeUseYn());
		System.out.println(notice.getUser());
		
		
		Notice rhdwl = noticeService.insertNotice(notice);
		NoticeDTO noticeDTO = new NoticeDTO();
		
		noticeDTO.setNoticeIdx(rhdwl.getNoticeIdx());
		noticeDTO.setNoticeNm(rhdwl.getNoticeNm());
		noticeDTO.setNoticeContent(rhdwl.getNoticeContent());
		noticeDTO.setNoticeRegdate(rhdwl.getNoticeRegdate());
		noticeDTO.setNoticeMdfdate(rhdwl.getNoticeMdfdate());
		noticeDTO.setNoticeUseYn(rhdwl.getNoticeUseYn());
		noticeDTO.setUser(rhdwl.getUser());
		
		return ResponseEntity.ok().body(noticeDTO);
		
	//	return ResponseEntity.ok().body(inquiryDTO);
	}
}
