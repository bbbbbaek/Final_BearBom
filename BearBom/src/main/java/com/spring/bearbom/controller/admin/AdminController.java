package com.spring.bearbom.controller.admin;

import com.spring.bearbom.service.admin.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@Slf4j
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    //admin 상단 위젯 4개
    @GetMapping("/getAdminCnt")
    public Map<String, Object> getAdminCnt(Map<String, Object> paramMap){
        try{
            List<Map<String, Object>> totalSales = adminService.totalSales();
            List<Map<String, Object>> totalOrders = adminService.totalOrders();
            List<Map<String, Object>> totalUsers = adminService.totalUsers();
            List<Map<String, Object>> totalCourses = adminService.totalCourses();
            List<Map<String, Object>> todaySales = adminService.todaySales();
            List<Map<String, Object>> orderList = adminService.orderList();

            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("totalSales", totalSales);
            resultMap.put("totalOrders", totalOrders);
            resultMap.put("totalUsers", totalUsers);
            resultMap.put("totalCourses", totalCourses);
            resultMap.put("todaySales",todaySales);
            resultMap.put("orderList", orderList);

            return resultMap;

        }catch (Exception e) {
            Map<String, Object> errorMap = new HashMap<>();
            errorMap.put("error", e.getMessage());
            return errorMap;
        }
    }
    //admin orderlist
    @GetMapping("/getAdminOrderList")
    public Map<String, Object> getAdminOrderList(Map<String, Object> paramMap){
        try{
            List<Map<String, Object>> getAdminOrderList = adminService.getAdminOrderList();

            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("getAdminOrderList", getAdminOrderList);

            return resultMap;

        }catch (Exception e) {
            Map<String, Object> errorMap = new HashMap<>();
            errorMap.put("error", e.getMessage());
            return errorMap;
        }
    }
}
