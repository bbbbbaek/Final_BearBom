package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.spring.bearbom.dto.GuideDTO;
import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.entity.Inquiry;

@Mapper
public interface FaqMapper {
	@Select("SELECT * FROM t_guide WHERE GUIDE_USE_YN = 'Y'")
	List<Guide> faq(Guide guide);

	@Update("update t_guide set guide_use_yn ='N' where GUIDE_IDX = #{guideIdx}")
	void updateFaq(GuideDTO guideDTO);

	//수정 정보저장
	@Update("update t_guide set guide_title = #{guideTitle} guide_content = #{guideContent} where GUIDE_IDX = #{guideIdx}")
	void mdfFaq(GuideDTO guideDTO);
}
