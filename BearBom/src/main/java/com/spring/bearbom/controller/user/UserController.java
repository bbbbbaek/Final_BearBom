package com.spring.bearbom.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.user.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/join")
	public ResponseEntity<?> join(@RequestBody User user) {
		try {
			System.out.println(passwordEncoder.getClass());
			user.setUserPw(passwordEncoder.encode(user.getUserPw()));
			System.out.println(user.getUserPw());
			//회원 가입 후 가입된 회원 정보 받아오는 객체 생성
			User joinUser = userService.join(user);
			
			//리액트로 리턴해 줄 MemberDTO 객체 생성
			UserDTO userDTO = new UserDTO();
			
			//member는 리스트로 리턴되는 게 아니여서 responseBody에 memberDTO를 담아서 리턴
			userDTO.setUserId(joinUser.getUserId());
			userDTO.setUserPw(joinUser.getUserPw());
			userDTO.setRole(joinUser.getRole());
			userDTO.setUserEmail(joinUser.getUserEmail());
			userDTO.setUserNm(joinUser.getUserNm());
			userDTO.setUserNickname(joinUser.getUserNickName());
			userDTO.setUserAddress(joinUser.getUserAddress());
			userDTO.setUserAddressDef(joinUser.getUserAddressDef());
			userDTO.setUserTel(joinUser.getUserTel());
			userDTO.setUseryn(joinUser.getUserYn());
				
			return ResponseEntity.ok().body(userDTO);
		} catch(Exception e) {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();
			
			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		//로그인 한 Member 객체 생성
		User loginUser = userService.login(user.getUserId(), user.getUserPw());
		
		if(loginUser != null) {
			//로그인된 유저에 대한 토큰 발행
			final String token = jwtTokenProvider.create(loginUser);
			
			//리턴해줄 MemberDTO 객체 생성
			final UserDTO userDTO = new UserDTO();
			userDTO.setUserId(loginUser.getUserId());
			userDTO.setUserPw(loginUser.getUserPw());
			userDTO.setRole(loginUser.getRole());
			//발행된 토큰 DTO에 담아서 리턴
			userDTO.setToken(token);
			
			return ResponseEntity.ok().body(userDTO);
		} else {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();
			
			response.setError("login failed");
			
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	 @PostMapping("/idCheck")
     public String checkId(@RequestBody User user) {
        User idCheck = userService.idCheck(user.getUserId());
        
        if(idCheck == null) {
           return "2";
        } else {
           return "1";
        }
     }
}
