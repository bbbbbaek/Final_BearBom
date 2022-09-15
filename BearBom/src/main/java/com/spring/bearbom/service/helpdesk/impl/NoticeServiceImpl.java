package com.spring.bearbom.service.helpdesk.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.entity.Notice;
import com.spring.bearbom.repository.NoticeRepository;
import com.spring.bearbom.service.helpdesk.NoticeService;

@Service
public class NoticeServiceImpl implements NoticeService{

	@Autowired
	private NoticeRepository noticeRepository;

	@Override
	public List<Notice> notice(Notice notice) {
		// TODO Auto-generated method stub
		List<Notice> noticeList = noticeRepository.findAll();
		return noticeList;
	}
}
