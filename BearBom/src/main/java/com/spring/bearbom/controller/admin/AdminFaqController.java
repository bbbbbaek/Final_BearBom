package com.spring.bearbom.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.GuideDTO;
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
	
//	백단에 저장하는것
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
	
	//백단에 저장하는것
//	@PostMapping("/insertFaq")
//	public ResponseEntity<?> insertFaq (@RequestBody Guide guide, @AuthenticationPrincipal String userId){
//		
//		Guide faq = guideService.insertFaq(guide);
//		
//		GuideDTO guideDTO = new GuideDTO();
//		
//		guideDTO.setGuideIdx(faq.getGuideIdx());
//		guideDTO.setGuideTitle(faq.getGuideTitle());
//		guideDTO.setGuideContent(faq.getGuideContent());
//		guideDTO.setGuideRegdate(faq.getGuideRegdate());
//		guideDTO.setGuideMdfdate(faq.getGuideMdfdate());
//		guideDTO.setGuideUseYn(faq.getGuideUseYn());
//		guideDTO.setUserId(userId);
//		
//		
//		return ResponseEntity.ok().body(guideDTO);
//	}
	
	
	
	
//	
//	@GetMapping("/faqReference")
//	public Map<String, Object> FaqReference
	
	
	
	
	
//	@GetMapping("/test")
//	public String test() {
//		try {
//			return "ok";
//		} catch(Exception e) {
//			return e.getMessage();
//		}
//	}
}
