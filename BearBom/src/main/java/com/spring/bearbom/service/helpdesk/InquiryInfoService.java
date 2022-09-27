package com.spring.bearbom.service.helpdesk;

import java.util.List;

import com.spring.bearbom.dto.InquiryDTO;

public interface InquiryInfoService {

	void insertInquiry(InquiryDTO inquiryDTO);

	List<InquiryDTO> inquiryInfoReference(InquiryDTO inquiryDTO);


//
//	List<Helpdesk> inquiryInfo(Helpdesk helpdesk);

}
