package com.spring.bearbom.controller.helpdesk;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.Inquiry;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.repository.InquiryRepository;
import com.spring.bearbom.service.helpdesk.InquiryInfoService;

@RestController
@RequestMapping("/api/helpdesk")
public class InquiryInfoController {

	@Autowired
	private InquiryInfoService inquiryInfoService;

	@Autowired
	private InquiryRepository inquiryRepository;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	//
	//백단으로 보내서 저장시키는것
	@PostMapping("/insertInquiry")
	public ResponseEntity<?> insertInquiry(@RequestBody Inquiry inquiry,@AuthenticationPrincipal String userId){
//      System.out.println("email : "+inquiry.getInquiryEmail());
		System.out.println("sort : "+inquiry.getInquirySort());
		System.out.println("title : "+inquiry.getInquiryTitle());
		System.out.println("content : "+inquiry.getInquiryContent());
		System.out.println("userId : "+userId);


		int index = inquiryRepository.selectNextinquiryIdx();

		InquiryDTO inquiryDTO = new InquiryDTO();

		
		inquiryDTO.setInquiryIdx(inquiry.getInquiryIdx());
//		inquiryDTO.setInquiryEmail(inquiry.getInquiryEmail());
		inquiryDTO.setInquirySort(inquiry.getInquirySort());
		inquiryDTO.setInquiryTitle(inquiry.getInquiryTitle());
		inquiryDTO.setInquiryContetnt(inquiry.getInquiryContent());
		inquiryDTO.setInquiryUseYn(inquiry.getInquiryUseYn());
		inquiryDTO.setInquiryYn(inquiry.getInquiryYn());
		inquiryDTO.setInquiryRegdate(inquiry.getInquiryRegdate());

		inquiryDTO.setReplyRegdate(inquiry.getReplyRegdate());
		inquiryDTO.setReplyYn(inquiry.getReplyYn());
		inquiryDTO.setReplyTitle(inquiry.getReplyTitle());
		inquiryDTO.setReplyContent(inquiry.getReplyContent());

		inquiryDTO.setUserId(userId);

		inquiryInfoService.insertInquiry(inquiryDTO);

		System.out.println(inquiryDTO);
		return ResponseEntity.ok().body(inquiryDTO);
	}

	@GetMapping("/getInquiryInfoReferenceList")
	public ResponseEntity<?> getInquiryInfoReferenceList(InquiryDTO inquiryDTO, @AuthenticationPrincipal String userId) {
		try {
			inquiryDTO.setUserId(userId);

			List<InquiryDTO> inquiryInfoReference = inquiryInfoService.inquiryInfoReference(inquiryDTO);

			System.out.println(inquiryInfoReference);

			ResponseDTO<InquiryDTO> response = new ResponseDTO<InquiryDTO>();
			response.setData(inquiryInfoReference);

			return ResponseEntity.ok().body(response);
		} catch(Exception e) {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();

			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}




	//가져와서 화면에 보여주는것



//   @PostMapping("/getInquiryInfoList")
//   public ResponseEntity<?> getInquiryInfoList(@RequestBody Helpdesk helpdesk) {
//      try {
//
//         List<Helpdesk> inquiryInfo = inquiryInfoService.inquiryInfo(helpdesk);
//          ResponseDTO<Helpdesk> response = new ResponseDTO<Helpdesk>();
//          response.setData(inquiryInfo);
//
//         return ResponseEntity.ok().body(response);
//      } catch(Exception e) {
//         ResponseDTO<UserDTO> response = new ResponseDTO<>();
//
//         response.setError(e.getMessage());
//         return ResponseEntity.badRequest().body(response);
//      }
//   }
}