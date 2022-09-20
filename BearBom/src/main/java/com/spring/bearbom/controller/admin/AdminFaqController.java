package com.spring.bearbom.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.guide.GuideService;

@RestController
@RequestMapping("/api/admin")
public class AdminFaqController {
	@Autowired
	private GuideService guideService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@PostMapping("/insertFaq")
	public ResponseEntity<?> insertFaq (@RequestBody Guide guide) {
		Guide rkdlem = guideService.insertFaq(guide);
		
		guide.setGuideIdx(rkdlem.getGuideIdx());
		guide.setGuideTitle(rkdlem.getGuideTitle());
		guide.setGuideContent(rkdlem.getGuideContent());
		guide.setGuideMdfdate(rkdlem.getGuideMdfdate());
		guide.setGuideRegdate(rkdlem.getGuideRegdate());
		guide.setGuideUseYn(rkdlem.getGuideUseYn());
		
		return ResponseEntity.ok().body(guide);
	}

}
