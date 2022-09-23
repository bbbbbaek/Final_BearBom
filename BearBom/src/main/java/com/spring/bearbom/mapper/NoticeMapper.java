package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.spring.bearbom.dto.NoticeDTO;
import com.spring.bearbom.entity.Inquiry;
import com.spring.bearbom.entity.Notice;

@Mapper
public interface NoticeMapper {

	@Select("SELECT * FROM T_NOTICE WHERE NOTICE_USE_YN = 'Y'")
	List<Notice> notice1(Notice notice);

	@Insert("insert into t_notice value (#{noticeIdx}, #{noticeTitle}, #{noticeContent}, #{noticeMdfdate}, #{noticeRegdate}, #{userId})")
	void insertNotice(NoticeDTO noticeDTO);

	
	@Update("update t_notice set notice_use_yn = 'N' where NOTICE_IDX = #{noticeIdx}")
	void updateNotice(NoticeDTO noticeDTO);

	@Update("update t_notice set notice_title = #{inquiryTitle} notice_content = #{inquiryContent} where NOTICE_IDX = #{noticeIdx}")
	void mdfNotice(NoticeDTO noticeDTO);

	
	
//	@Select()
//	
//	
//	@Insert()
//	Notice insertNotice(Notice notice);

}
