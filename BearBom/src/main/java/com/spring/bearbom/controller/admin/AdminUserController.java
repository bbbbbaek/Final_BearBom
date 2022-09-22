package com.spring.bearbom.controller.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.service.user.UserService;

import lombok.extern.slf4j.Slf4j;
@RestController
@RequestMapping("/api/admin")
@Slf4j
public class AdminUserController {
	
	@Autowired
	private UserService userService;
	
	// admin 유저 정보 불러오기 0922
	@GetMapping("/getUserList")
    public Map<String, Object> getUserList(){
    	try {
    		Map<String, Object> returnMap = new HashMap<String, Object>();
    		
    		List<User> userList = userService.getUserList();
    		
    		returnMap.put("userList", userList);
    		
    		return returnMap;
    		
    	}catch(Exception e){
    		Map<String, Object> errorMap = new HashMap<String, Object>();
    		errorMap.put("error", e.getMessage());
    		return errorMap;
    	}
    };
}
