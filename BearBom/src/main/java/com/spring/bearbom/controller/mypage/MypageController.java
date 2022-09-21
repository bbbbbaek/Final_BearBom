//import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
package com.spring.bearbom.controller.mypage;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.service.mypage.MypageService;
import com.spring.bearbom.service.mypage2.Mypage2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.mypage.MypageService;
import com.spring.bearbom.service.user.UserService;

import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/mypage")
@Slf4j
public class MypageController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private MypageService mypageService;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private Mypage2Service mypage2Service;

	@GetMapping("/getUser")
  public ResponseEntity<?> mypage(User user, @AuthenticationPrincipal String userId) { 
		System.out.println(userId);
		try {
//		System.out.println(passwordEncoder.getClass());
//		user.setUserPw(passwordEncoder.encode(user.getUserPw()));
//		System.out.println(user.getUserPw());
		//회원 가입 후 가입된 회원 정보 받아오는 객체 생성
		User getUser = mypageService.getUser(userId);
//		User loginUser = userRepository.findByUserId(userId);

		//리액트로 리턴해 줄 MemberDTO 객체 생성
		UserDTO userDTO = new UserDTO();

		//member는 리스트로 리턴되는 게 아니여서 responseBody에 memberDTO를 담아서 리턴
		userDTO.setUserId(getUser.getUserId());
		userDTO.setUserPw(getUser.getUserPw());
		userDTO.setRole(getUser.getRole());
		userDTO.setUserEmail(getUser.getUserEmail()); //
		userDTO.setUserNm(getUser.getUserNm());
		userDTO.setUserNickName(getUser.getUserNickName());
		userDTO.setUserAddress(getUser.getUserAddress());
		userDTO.setUserAddressDef(getUser.getUserAddressDef());
		userDTO.setUserTel(getUser.getUserTel());

		userDTO.setUserYn(getUser.getUserYn());

		System.out.println("///////////////"+ userDTO);
		return ResponseEntity.ok().body(userDTO);
	} catch(Exception e) {
		ResponseDTO<UserDTO> response = new ResponseDTO<>();

		response.setError(e.getMessage());
		return ResponseEntity.badRequest().body(response);
	}
	
	}

//	  유저 정보 가져오기 
//	  @PostMapping("/getUser")
//	  public ResponseEntity<?> getUser(@RequestBody User user) {
//	  	try {
//  		User u = userService.findbyUserId(user.getUserId());
//  		  	
//  		List<User> userList = new ArrayList<User>();
//  		userList.add(u);
//  		
//  		ResponseDTO<User> response = new ResponseDTO<>();
//  		response.setData(userList);
//  		System.out.println("!!!!!!!");
//  		return ResponseEntity.ok().body(response);
//  		
//	  	}catch(Exception e){
//  		System.out.println(e.getMessage());
//  		ResponseDTO<User> response = new ResponseDTO<>();
//  		response.setError(e.getMessage());
//  		return ResponseEntity.badRequest().body(response);
//  	}
//  }
  
//	  @PostMapping("updateUserInfo")
//		public ResponseEntity<?> updateUserInfo(@RequestBody User user){
//		// 등록된 사용자 정보를 조회한
//		User oldUser = userService.findbyUserId(user.getUserId());
//
//		// 화면 input 항목에서 받아온 값들을 변경
//		oldUser.setUserName(user.getUserName());
//		oldUser.setUserNickname(user.getUserNickname());
//		oldUser.setUserTel(user.getUserTel());
//		oldUser.setUserMail(user.getUserMail());
//		oldUser.setUserZip(user.getUserZip());
//		oldUser.setUserAddr(user.getUserAddr());
//		oldUser.setUserAddrDetail(user.getUserAddrDetail());
//
//		// 실제 DB 저장 
//		userService.updateUser(oldUser);
//
//		return ResponseEntity.ok().body("success");
//	}

	//y 인것만 화면에 뿌려주는거 맵퍼를이용한
	@GetMapping("/getInquiryReference")
	public Map<String, Object> getInquiryReference(InquiryDTO inquiryDTO, @AuthenticationPrincipal String userId){
		try {
			inquiryDTO.setUserId(userId);
			List<Map<String, Object>> getInquiryReference1 = mypage2Service.getInquiryReference(inquiryDTO);
			Map<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("getInquiryReference1", getInquiryReference1);

			return resultMap;
		} catch(Exception e) {
			Map<String,Object> error = new HashMap<String,Object>();
			error.put("error", e.getMessage());
			return error;
		}
	}
	//y를 n으로 바꾸는 update
	@PostMapping("/updateInquiryReference")
	public void updateInquiryReference(@RequestBody InquiryDTO inquiryDTO, @AuthenticationPrincipal String userId){
		inquiryDTO.setUserId(userId);
		System.out.println("before inquiryDTO : " +inquiryDTO);
		log.info("inquiryDTO : {}", inquiryDTO);
		mypage2Service.updateInquiryReference(inquiryDTO);
		System.out.println("after inquiryDTO : " +inquiryDTO);

	}
	
	/* 마이페이지 찜한 클래스 조회 */
	@GetMapping("/getWishList")
	public Map<String, Object> getWishList(@AuthenticationPrincipal String userId) {
		 CourseDTO courseDTO = new CourseDTO();
		 log.info("userId : {}", userId);
		 
		try {
			courseDTO.setUserId(userId);
			
			List<CourseDTO> wishList = mypageService.getWishList(courseDTO);
			Map<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("wishList", wishList);
			
			return resultMap;
		}
		catch (Exception e){
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}
	
	/* mypage 찜한 클래스 갯수 */
	@GetMapping("/getWishCnt")
	public Map<String, Object> getWishCnt(@AuthenticationPrincipal String userId) {
		 CourseDTO courseDTO = new CourseDTO();
		 log.info("userId : {}", userId);
		 
		try {
			courseDTO.setUserId(userId);
			
			List<CourseDTO> wishCntList = mypageService.getWishCnt(courseDTO);
			Map<String, Object> resultMap = new HashMap<String, Object>();
			
			resultMap.put("wishCntList", wishCntList);
			
			return resultMap;
		}
		catch (Exception e){
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}
  	
}
