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
	
	@Insert("insert into t_inquiry value (#{inquiryIdx}, #{inquiryEmail}, #{inquirySort}, #{inquiryTitle}, #{inquiryContetnt}, #{userId}, 'Y', 'Y')")
	void insertInquiry(InquiryDTO inquiryDTO);
//	@Insert("insert into t_inquiry value (#{inquiryIdx}, #{inquiryEmail}, #{inquirySort}, #{inquiryTitle}, #{inquiryContetnt}, #{userId}, 'Y', 'Y')")
//	@Insert("insert into t_inquiry(INQUIRY_IDX, INQUIRY_EMAIL, INQUIRY_SORT, INQUIRY_TITLE, INQUIRY_CONTENT, USER_ID, INQUIRY_USE_YN, INQUIRY_YN) value ((select ifnull(max(a.inquiry_idx), 0) + 1 from t_inquiry a), #{inquiryEmail}, #{inquirySort}, #{inquiryTitle}, #{inquiryContetnt}, #{userId}, 'Y', 'Y')")
//	InquiryDTO insertInquiry(InquiryDTO inquiryDTO);

	@Select("SELECT * FROM T_INQUIRY WHERE INQUIRY_USE_YN = 'Y'")
	List<InquiryDTO> inquiryInfoReference(InquiryDTO inquiryDTO);
	
	
			
	

}
