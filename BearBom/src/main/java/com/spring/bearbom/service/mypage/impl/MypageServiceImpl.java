package com.spring.bearbom.service.mypage.impl;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.mapper.MypageMapper;
import com.spring.bearbom.mapper.UserMapper;
import com.spring.bearbom.repository.UserRepository;
import com.spring.bearbom.service.mypage.MypageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MypageServiceImpl implements MypageService{

	@Autowired
	private UserMapper userMapper;

	@Autowired
	MypageMapper mypageMapper;

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<CourseDTO> getWishList(CourseDTO courseDTO) {
		// TODO Auto-generated method stub
		return mypageMapper.getWishList(courseDTO);
	}

	@Override
	public List<CourseDTO> getWishCnt(CourseDTO courseDTO) {
		// TODO Auto-generated method stub
		return mypageMapper.getWishCnt(courseDTO);
	}

	@Override
	public User getUser(String userId) {
//		User getUser = userrepository.findbyUserId(userId);

		return userRepository.findByUserId(userId);
	}


	@Override
	public void updateUser(User user) {
		// TODO Auto-generated method stub
		System.out.println(user.toString());
		userMapper.updateUser(user);
	}

//	@Override
//	public List<Map<String, Object>> getInquiryReference(String userId) {
//		return null;
//	}

	// 유저 정보 수정
	// @Override
//		public void updateUser(User user) {
//		 return updateUser;
//		userRepository.save(user);
//	}

	// 유저 탈퇴
//	@Override
//	public void deleteUser(User user) {
//		userMapper.deleteUser(user);
//	}

	// 유저 탈퇴 0922
	@Override
	public String deleteUserInfo(String userId) {
		try {
			mypageMapper.deleteUserInfo(userId);

			return "sussecc";
		} catch(Exception e) {
			return "fail : " + e.getMessage();
		}
	}
	//===========================================================//


//    @Override
//    public List<Map<String, Object>> getInquiryReference(String userId) {
//        return mypageMapper.getInquiryReference(userId);
//    }

//    @Override
//    public List<Map<String, Object>> getInquiryReference(String userId) {
//        return mypageMapper.getInquiryReference(userId);
//    }


	//재현

	@Override
	public List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO) {
		// TODO Auto-generated method stub
		return mypageMapper.getInquiryReference(inquiryDTO);
	}


	@Override
	public void updateInquiryReference(InquiryDTO inquiryDTO) {
		// TODO Auto-generated method stub
		mypageMapper.updateInquiryReference(inquiryDTO);
	}

}

