package com.spring.bearbom.service.user.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.mapper.UserMapper;
import com.spring.bearbom.repository.UserRepository;
import com.spring.bearbom.service.user.UserService;

@Service
public class UserServiceimpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserMapper userMapper;

	@Override
	public User join(User user) {
		//Member 유효성 검사
		if(user == null || user.getUserId() == null) {
			throw new RuntimeException("Invalid Argument");
		}

//		//userid 중복 체크
//		if(userRepository.existsByUserId(user.getUserId())) {
//			throw new RuntimeException("userid already exists");
//		}

		return userRepository.save(user);
	}

	@Override
	public User login(String userId, String userPw) {
		
		//return memberRepository.findByUseridAndPassword(userid, password);
		int failCnt = userMapper.checkFailCnt(userId);
		if(failCnt < 5) {
			User loginUser = userRepository.findByUserId(userId);
			
	
			if(loginUser != null && passwordEncoder.matches(userPw, loginUser.getUserPw())) {
				userMapper.updateResetFailCnt(userId);
				return loginUser;
			} else if(loginUser != null && !passwordEncoder.matches(userPw, loginUser.getUserPw())) {
				User pwFaiiledUser = new User();
				userMapper.updateFailCnt(userId);
				pwFaiiledUser.setUserId(userId);
				pwFaiiledUser.setLoginFailMessage("wrong password");
				return pwFaiiledUser;
			} else if(loginUser == null) {
				User idFailedUser = new User();
				idFailedUser.setLoginFailMessage("not exist id");
				return idFailedUser;
			}
		}
		
		User logingDenied = new User();
		logingDenied.setLoginFailMessage("loging denied");
			return logingDenied;
			
		
	
	}


	@Override
	public User idCheck(String userId) {
		User checkIdUser = userRepository.findByUserId(userId);
		System.out.println(checkIdUser);
		if(checkIdUser != null) {
			return checkIdUser;
		} else {
			return null;
		}

	}


	@Override
	public int idDuplicate(String userId) {
		return userMapper.idDuplicate(userId);
	}

	public String test() {
		return "aaa";
	}

	// admin 유저 정보 불러오기
	@Override
	   public List<User> getUserList(){
//	      return userRepository.findAll();
		return userMapper.getUserList();
	   }

//	@Override
//	public void adminDeleteUser(String userId) {
//		// TODO Auto-generated method stub
//		userMapper.adminDeleteUser(userId);
//	}
//	@Override
//	public void adminDeleteUser(UserDTO userDTO) {
//		// TODO Auto-generated method stub
//		userMapper.adminDeleteUser(userDTO);
//	}
	
	// 0923 admin 유저 정보 삭제시키기
	@Override
	public void adminDeleteUser(Map<String, Object> paramMap) {
		// TODO Auto-generated method stub
		userMapper.adminDeleteUser(paramMap);
	}



	
	


}