package com.spring.bearbom.mapper;

import java.util.List;
import java.util.Map;

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

	@Insert("insert into t_notice(NOTICE_IDX, NOTICE_TITLE, NOTICE_CONTENT, NOTICE_MDFDATE, NOTICE_REGDATE, NOTICE_USE_YN, USER_ID) values (("
			+ "	SELECT IFNULL(MAX(NOTICE_IDX),0) + 1"
			+ "	FROM T_NOTICE A"
			+ "	), #{noticeTitle}, #{noticeContent}, #{noticeMdfdate}, #{noticeRegdate}, 'Y', #{userId})")
	void insertNotice(NoticeDTO noticeDTO);

	
//	@Update("update t_notice set notice_use_yn = 'N' where NOTICE_IDX = #{noticeIdx}")
//	void updateNotice(NoticeDTO noticeDTO);

	@Update("update t_notice set notice_title = #{inquiryTitle} notice_content = #{inquiryContent} where NOTICE_IDX = #{noticeIdx}")
	void mdfNotice(NoticeDTO noticeDTO);
	
	
	
	@Update("update t_notice set notice_use_yn = 'N' where NOTICE_IDX = #{noticeIdx}")
	void updateNotice(Map<String, Object> paramMap);
	

	
	
//	@Select()
//	
//	
//	@Insert()
//	Notice insertNotice(Notice notice);

}
