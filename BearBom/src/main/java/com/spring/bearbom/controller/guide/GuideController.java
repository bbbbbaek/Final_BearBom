package com.spring.bearbom.controller.guide;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.guide.GuideService;

@RestController
@RequestMapping("/api/guide")
public class GuideController {
	@Autowired
	private GuideService guideService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@PostMapping("/getOperationList")
	public ResponseEntity<?> getOperationList(@RequestBody Guide guide) {
		try {
			
			List<Guide> operation = guideService.operation(guide);
	    	ResponseDTO<Guide> response = new ResponseDTO<Guide>();
	    	response.setData(operation);
			
			return ResponseEntity.ok().body(response);
		} catch(Exception e) {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();

			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	
	}
	
	
	
