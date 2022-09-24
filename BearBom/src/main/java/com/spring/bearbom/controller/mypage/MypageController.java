//import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
package com.spring.bearbom.controller.mypage;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.mypage.MypageService;
import com.spring.bearbom.service.test.TestService;
import com.spring.bearbom.service.user.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/mypage")
@Slf4j
@RequiredArgsConstructor
public class MypageController {
	@Autowired
	private UserService userService;

	@Autowired
	private MypageService mypageService;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Autowired
	private PasswordEncoder passwordEncoder;

	private final TestService testService;

	@GetMapping("/getUser")
	public ResponseEntity<?> mypage(User user, @AuthenticationPrincipal String userId) {
		System.out.println(userId);
		try {
//		System.out.println(passwordEncoder.getClass());
//		user.setUserPw(passwordEncoder.encode(user.getUserPw()));
//		System.out.println(user.getUserPw());
			// 회원 가입 후 가입된 회원 정보 받아오는 객체 생성
			User getUser = mypageService.getUser(userId);
//		User loginUser = userRepository.findByUserId(userId);

			// 리액트로 리턴해 줄 MemberDTO 객체 생성
			UserDTO userDTO = new UserDTO();

			// member는 리스트로 리턴되는 게 아니여서 responseBody에 memberDTO를 담아서 리턴
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

			System.out.println("///////////////" + userDTO);
			return ResponseEntity.ok().body(userDTO);

		} catch (Exception e) {
			ResponseDTO<UserDTO> response = new ResponseDTO<>();

			response.setError(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}

	}

	// 유저 정보 변경
	@PostMapping("/updateUserInfo")
	public ResponseEntity<?> updateUserInfo(@RequestBody User user, @AuthenticationPrincipal String userId) {
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
		System.out.println("userId : " + user.getUserId());
//		user.setUserId(userId);	

		mypageService.updateUser(user);

		User newUser = mypageService.getUser(user.getUserId());

		UserDTO userDTO = new UserDTO();

		// 실제 DB 저장
//		userService.updateUser(oldUser);
		return ResponseEntity.ok().body("success");
	}

	// ====================================================================================================//

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
	public Map<String, String> deleteUserInfo(@AuthenticationPrincipal String userId) {
		try {
			Map<String, String> resultMap = new HashMap<String, String>();

			String message = mypageService.deleteUserInfo(userId);

			resultMap.put("message", message);

			return resultMap;
		} catch (Exception e) {
			Map<String, String> error = new HashMap<String, String>();
			error.put("error", e.getMessage());
			return error;
		}
	}

	// 마이페이지
	// 수강 중인 강좌(takingCourseCnt), 수강 완료 강좌(takenCourseCnt),
	// 개설한 강좌(openedCourseCnt), 찜한 클래스(likedCourseCnt) 수량 컨트롤러
	@GetMapping("/getMyPageCnt")
	public Map<String, Object> getMyPageCnt(@AuthenticationPrincipal String userId) {
		// 수강 중인 강좌를 위한 현재 날짜
		LocalDate date = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

		System.out.println(date.format(formatter));
		try {
			CourseDTO courseDTO = new CourseDTO();
			courseDTO.setUserId(userId);
			courseDTO.setTakingCourseDate(date.format(formatter));

			System.out.println("courseDTO : /////" + courseDTO);
			List<Map<String, Object>> likedCourseCnt = testService.likedCourseCnt(courseDTO);
			List<Map<String, Object>> takingCourseCnt = testService.takingCourseCnt(courseDTO);
			List<Map<String, Object>> takenCourseCnt = testService.takenCourseCnt(courseDTO);
			List<Map<String, Object>> openedCourseCnt = testService.openedCourseCnt(courseDTO);

			Map<String, Object> resultMap = new HashMap<>();
			resultMap.put("likedCourseCnt", likedCourseCnt);
			resultMap.put("takingCourseCnt", takingCourseCnt);
			resultMap.put("takenCourseCnt", takenCourseCnt);
			resultMap.put("openedCourseCnt", openedCourseCnt);
			return resultMap;

		} catch (Exception e) {
			Map<String, Object> errorMap = new HashMap<>();
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
		} catch (Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}

	// 회원 프로필 사진 변경
	// 주의 : 파일 한개만 가져올 때는 axios contextType이 "multipart/form-data"라도 MultipartHttpServletRequest 사용안함
	@PostMapping("/updateUserPhoto")
	public void updateUserPhoto(
			@RequestParam Map<String, Object> paramMap, HttpServletRequest request,
			@AuthenticationPrincipal String userId) throws IllegalStateException, IOException {
		System.out.println(paramMap);
		System.out.println(request);

		System.out.println("---------------------------");
		User user = new User();

		// 프로필 파일 업로드 시작
		List<User> fileList = new ArrayList<User>();

		// 프로필 파일 저장 경로 설정
		String rootPath = request.getSession().getServletContext().getRealPath("/");
		String savePath = "/upload/";

		MultipartHttpServletRequest multiPartHttpServletRequest = (MultipartHttpServletRequest) request;

		Iterator<String> iterator = multiPartHttpServletRequest.getFileNames();
		System.out.println(multiPartHttpServletRequest.getFileNames());
		System.out.println(iterator.hasNext());
		
		//최초 마이페이지 로딩시 에러 방지
		if(iterator.hasNext()) {
		while (iterator.hasNext()) {
			List<MultipartFile> list = multiPartHttpServletRequest.getFiles(iterator.next());

			for (MultipartFile m : list) {
				System.out.println(m.getOriginalFilename());

				if (!m.isEmpty()) {
					User tempUser = new User();
					String uuid = UUID.randomUUID().toString();
					tempUser.setUserPhotoNewNm(uuid + m.getOriginalFilename());
					tempUser.setUserPhotoOrgNm(m.getOriginalFilename());
					tempUser.setUserPhotoPath(rootPath + savePath);
					fileList.add(tempUser);

					// 업로딩
					File file = new File(rootPath + savePath + uuid + m.getOriginalFilename());
					m.transferTo(file);
				}
			}
		}
		// 변경할 이미지 세팅
		user.setUserId(userId);
		user.setUserPhotoNewNm(fileList.get(0).getUserPhotoNewNm());
		user.setUserPhotoOrgNm(fileList.get(0).getUserPhotoOrgNm());
		user.setUserPhotoPath(fileList.get(0).getUserPhotoPath());
		// 파일 업로드 끝

		// 사진 업데이트
		System.out.println(user);
		userService.updateUserPhoto(user);
		}

		//프로필 사진 업데이트 끝

	}

}
