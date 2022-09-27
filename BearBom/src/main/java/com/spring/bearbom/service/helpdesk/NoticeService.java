package com.spring.bearbom.service.helpdesk;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.NoticeDTO;
import com.spring.bearbom.entity.Notice;

public interface NoticeService {

	List<Notice> notice1(Notice notice);

	void insertNotice(NoticeDTO noticeDTO);

//	void updateNotice(NoticeDTO noticeDTO);

	void mdfNotice(NoticeDTO noticeDTO);

	void updateNotice(Map<String, Object> paramMap);

}
