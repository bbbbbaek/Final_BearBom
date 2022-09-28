package com.spring.bearbom.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.dto.InquiryDTO;

@Mapper
public interface MypageMapper {
	
	public List<CourseDTO> getWishList( CourseDTO courseDTO);
		
	public List<CourseDTO> getWishCnt(CourseDTO courseDTO);


    // 유저 탈퇴 Y->N 0922
    void deleteUserInfo(String userId);

    //재현
    List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

	void updateInquiryReference(InquiryDTO inquiryDTO);
}