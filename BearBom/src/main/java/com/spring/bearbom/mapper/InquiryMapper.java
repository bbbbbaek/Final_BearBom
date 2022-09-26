package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.entity.Inquiry;

@Mapper
public interface InquiryMapper {



//	@Select("SELECT * FROM T_INQUIRY WHERE INQUIRY_USE_YN = 'Y'")
//	List<Inquiry> inquiryInfoReference(Inquiry inquiry);
	
	
	//이건 헬프데스크 일대일문의 쿼리
	
	
	@Insert("insert into t_inquiry(INQUIRY_IDX, INQUIRY_SORT, INQUIRY_TITLE, INQUIRY_CONTENT, INQUIRY_USE_YN, INQUIRY_YN, INQUIRY_REGDATE, REPLY_REGDATE, REPLY_YN, REPLY_TITLE, REPLY_CONTENT, USER_ID) value (("
			+ "					SELECT IFNULL(MAX(INQUIRY_IDX),0) + 1"
			+ "					FROM T_INQUIRY A"
			+ "				), #{inquirySort}, #{inquiryTitle}, #{inquiryContetnt}, 'Y', 'Y', #{inquiryRegdate},#{replyRegdate},'N', #{replyTitle}, #{replyContent}, #{userId})")
	void insertInquiry(InquiryDTO inquiryDTO);
//	@Insert("insert into t_inquiry value (#{inquiryIdx}, #{inquiryEmail}, #{inquirySort}, #{inquiryTitle}, #{inquiryContetnt}, #{userId}, 'Y', 'Y')")
//	@Insert("insert into t_inquiry(INQUIRY_IDX, INQUIRY_EMAIL, INQUIRY_SORT, INQUIRY_TITLE, INQUIRY_CONTENT, USER_ID, INQUIRY_USE_YN, INQUIRY_YN) value ((select ifnull(max(a.inquiry_idx), 0) + 1 from t_inquiry a), #{inquiryEmail}, #{inquirySort}, #{inquiryTitle}, #{inquiryContetnt}, #{userId}, 'Y', 'Y')")
//	InquiryDTO insertInquiry(InquiryDTO inquiryDTO);

	@Select("SELECT * FROM T_INQUIRY WHERE INQUIRY_USE_YN = 'Y'")
	List<InquiryDTO> inquiryInfoReference(InquiryDTO inquiryDTO);

	
	
	
	
	void updateInquiry(InquiryDTO inquiryDTO);
	
	
			
	

}
