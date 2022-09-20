package com.spring.bearbom.service.helpdesk;

import java.util.List;

import com.spring.bearbom.entity.Notice;

public interface NoticeService {

	List<Notice> notice1(Notice notice);

	Notice insertNotice(Notice notice);

}
