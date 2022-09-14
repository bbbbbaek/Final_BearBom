package com.spring.bearbom.service.helpdesk.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.repository.NoticeRepository;
import com.spring.bearbom.service.helpdesk.NoticeService;

@Service
public class NoticeServiceImpl implements NoticeService{

	@Autowired
	private NoticeRepository noticeRepository;
}
