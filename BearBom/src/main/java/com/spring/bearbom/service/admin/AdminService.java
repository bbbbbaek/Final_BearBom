package com.spring.bearbom.service.admin;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.entity.Inquiry;

public interface AdminService {

	List<InquiryDTO> inquiryInfoReference();

	void updateInquiry(InquiryDTO inquiryDTO);

    List<Map<String, Object>> totalSales();

	List<Map<String, Object>> totalOrders();

	List<Map<String, Object>> totalUsers();

	List<Map<String, Object>> totalCourses();

	List<Map<String, Object>> orderList();

	List<Map<String, Object>> todaySales();


//	List<Inquiry> inquiryInfoReference(Inquiry inquiry);

}
