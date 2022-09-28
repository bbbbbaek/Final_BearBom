package com.spring.bearbom.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AdminMapper {
    List<Map<String, Object>> totalSales();

    List<Map<String, Object>> totalOrders();

    List<Map<String, Object>> totalUsers();

    List<Map<String, Object>> totalCourses();

    List<Map<String, Object>> orderList();

    List<Map<String, Object>> todaySales();


    List<Map<String, Object>> getAdminOrderList();
}
