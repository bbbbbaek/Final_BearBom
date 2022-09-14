package com.spring.bearbom.controller.helpdesk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.helpdesk.NoticeService;

@RestController
@RequestMapping("api/helpdesk")
public class NoticeController {
	
	@Autowired
	private NoticeService noticeService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;

}
