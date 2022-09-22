//import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
package com.spring.bearbom.controller.mypage;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.mypage.MypageService;
import com.spring.bearbom.service.mypage2.Mypage2Service;
import com.spring.bearbom.service.user.UserService;

import lombok.extern.slf4j.Slf4j;

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
	
	// 유저 정보 변경
	@PostMapping("/updateUserInfo")
	public ResponseEntity<?> updateUserInfo(@RequestBody User user, @AuthenticationPrincipal String userId){
		// 등록된 사용자 정보를 조회한다 
//		User oldUser = mypageService.getUser(user.getUserId());
//
//		// 화면 input 항목에서 받아온 값들을 변경한다 
//		oldUser.setUserPw(user.getUserPw());
//		oldUser.setUserNm(user.getUserNm());
//		oldUser.setUserNickName(user.getUserNickName());
//		oldUser.setUserTel(user.getUserTel());
//		oldUser.setUserAddress(user.getUserAddress());
//		oldUser.setUserAddressDef(user.getUserAddressDef());
//		oldUser.setUserZipcode(user.getUserZipcode());
//		oldUser.setUserEmail(user.getUserEmail());
//		oldUser.setUserYn(user.getUserYn());
		System.out.println("userId : "+user.getUserId());
//		user.setUserId(userId);	
			
		mypageService.updateUser(user);
		
		User newUser = mypageService.getUser(user.getUserId());
		
		UserDTO userDTO = new UserDTO();
		
		// 실제 DB 저장 
//		userService.updateUser(oldUser);
		return ResponseEntity.ok().body("success");
	}
		
	//====================================================================================================//
	
	// 유저 탈퇴
//	@PostMapping("deleteUserInfo")
//	public ResponseEntity<?> deleteUserInfo(@RequestBody User user, @AuthenticationPrincipal String userId){
//		// 등록된 사용자 정보를 조회 
//
//		mypageService.deleteUser(user);
//		
//		User newUser = mypageService.getUser(user.getUserId());
//		
//		UserDTO userDTO = new UserDTO();
//		
//		if(newUser == null) {
//			return ResponseEntity.ok().body("이미 탈퇴한 회원입니다");
//		}else {
//			// DB에서 삭제 
//			mypageService.deleteUser(newUser);
//			return ResponseEntity.ok().body("탈퇴 성공!");
//			
//		}
//	}
	
	// 유저 탈퇴 Y-> N 
		@PostMapping("/deleteUserInfo")
		public Map<String, String> deleteUserInfo(@AuthenticationPrincipal String userId){
			try {
				Map<String, String> resultMap = new HashMap<String, String>();
				
				String message = mypageService.deleteUserInfo(userId);
				
				resultMap.put("message", message);
				
				return resultMap;
			} catch(Exception e) {
				Map<String, String> error = new HashMap<String, String>();
				error.put("error", e.getMessage());
				return error;
			}
		}
}