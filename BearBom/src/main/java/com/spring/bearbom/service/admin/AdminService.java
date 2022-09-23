package com.spring.bearbom.service.admin;

import java.util.List;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.entity.Inquiry;

public interface AdminService {

	List<InquiryDTO> inquiryInfoReference();

	void updateInquiry(InquiryDTO inquiryDTO);

	

//	List<Inquiry> inquiryInfoReference(Inquiry inquiry);

}
