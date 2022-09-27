package com.spring.bearbom.service.guide;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.GuideDTO;
import com.spring.bearbom.entity.Guide;

public interface GuideService {

	//Faq컨트롤러
	void insertFaq(GuideDTO guideDTO);
	//Guide컨트롤러
	List<Guide> operation(Guide guide);


//	void updateFaq(GuideDTO guideDTO);


	void mdfFaq(GuideDTO guideDTO);
	
	
	void updateFaq(Map<String, Object> paramMap);


	

	


	

}
