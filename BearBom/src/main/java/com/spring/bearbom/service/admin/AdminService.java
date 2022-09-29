package com.spring.bearbom.service.admin;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.InquiryDTO;

public interface AdminService {

	List<InquiryDTO> inquiryInfoReference();

    List<Map<String, Object>> totalSales();

	List<Map<String, Object>> totalOrders();

	List<Map<String, Object>> totalUsers();

	List<Map<String, Object>> totalCourses();

	List<Map<String, Object>> orderList();

	List<Map<String, Object>> todaySales();

	void updateInquiry(Integer id);
	
	List<Map<String,Object>> getAdminOrderList();

}
