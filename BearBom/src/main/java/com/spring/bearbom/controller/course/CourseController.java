package com.spring.bearbom.controller.course;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.CourseFile;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.service.course.CourseService;

@RestController
@RequestMapping("/api/course")
public class CourseController {
	
	@Autowired
	CourseService courseService;

	@PostMapping("/courseRegistration")
	public void courseRegistration(MultipartHttpServletRequest multiPartHttpServletRequest, HttpServletRequest request,
			@RequestParam Map<String, Object> paramMap) throws IOException {
//		userService.updatePhoneNum(paramMap.get("phoneNum"));
		
		//유저정보
		User user = new User();
		user.setUserId(String.valueOf(paramMap.get("userId")));
		//user.setUserTel(String.valueOf(paramMap.get("userTel")));
		//user.setRole("ROLE_LECTURER");
		//userService.updateUserInfoForCoureseRegistraion(user);
//		
		System.out.println(paramMap);
		
		/*코스등록 시작*/
		Course course = new Course();
		int courseIdx = courseService.findCourseIdx(0);
		course.setCourseIdx(courseIdx);
		course.setUser(user);
		course.setCourseOnOff(String.valueOf(paramMap.get("courseOnOff")));
		course.setCourseNm(String.valueOf(paramMap.get("courseNm")));
		course.setCourseCategory(String.valueOf(paramMap.get("courseCategory")));
		course.setCourseContents(String.valueOf(paramMap.get("courseContents")));
		course.setCourseLevelContent(String.valueOf(paramMap.get("courseLevelContent")));
		course.setCourseLevel(String.valueOf(paramMap.get("courseLevel")));
		course.setCourseRuntime(String.valueOf(paramMap.get("courseRuntime")));
		course.setCourseLocation(String.valueOf(paramMap.get("courseLocation")));
		course.setCourseAddressDef(String.valueOf(paramMap.get("courseAddressDef")));
		course.setCourseAddress(String.valueOf(paramMap.get("courseAddress")));
		course.setCourseAddressEx(String.valueOf(paramMap.get("courseAddressEx")));
		course.setCourseZipcode(String.valueOf(paramMap.get("courseZipcode")));
		course.setCourseMax(Integer.valueOf(String.valueOf(paramMap.get("courseMax"))));
		course.setCourseMin(Integer.valueOf(String.valueOf(paramMap.get("courseMin"))));
		System.out.println("---------------------------");
		
		//파일 업로드 시작
		List<CourseFile> fileList = new ArrayList<CourseFile>();
		
		//파일 저장 경로 설정
		String rootPath = request.getSession().getServletContext().getRealPath("/");
		String savePath = "/upload/";
		File path = new File(rootPath + savePath);
		//폴더 없을 시 생성
		if(path.exists() == false) {
			path.mkdir();
		}
		
		
		Iterator<String> iterator = multiPartHttpServletRequest.getFileNames();
		
		while(iterator.hasNext()) {
			List<MultipartFile> list = multiPartHttpServletRequest.getFiles(iterator.next());
			
			//System.out.println(list.size());
			
			for(MultipartFile m : list) {
				System.out.println(m.getOriginalFilename());
				int fileIdx = 0;
				if(!m.isEmpty()) {
					CourseFile courseFile = new CourseFile();
					//CourseFileId courseFileId = new CourseFileId();
					//courseFileId.setCourse(course.getCourseIdx());
					//courseFileId.setCourseFileIdx(fileIdx+=1);
					courseFile.setCourse(course);
					
					String uuid = UUID.randomUUID().toString();
					courseFile.setCourseFileNewNm(uuid + m.getOriginalFilename());
					courseFile.setCourseFileOrgNm(m.getOriginalFilename());
					courseFile.setCourseFilePath(rootPath+savePath);
					fileList.add(courseFile);
					
					//업로딩
					File file = new File(rootPath + savePath + uuid + m.getOriginalFilename());
					m.transferTo(file);//테스트시죽일것
					
					
				}
			}
		}
		//첫번째 이미지만 썸네일에 저장 후 리스트에서 삭제
		course.setCourseThumbnailNm(fileList.get(0).getCourseFileNewNm());
		course.setCourseThumbnailOrgNm(fileList.get(0).getCourseFileOrgNm());
		course.setCourseThumbnailPath(fileList.get(0).getCourseFilePath());
		fileList.remove(0);
		//파일 업로드 끝
		
		courseService.courseRegistration(course);//테스트시죽일것
		System.out.println(course);
		System.out.println("-----------------------------");
		
		courseService.courseFileSave(fileList);//테스트시죽일것
		System.out.println(fileList);
		
		
		
		
		/*코스 등록 끝*/

		//CourseDTO courseDTO = new CourseDTO();
		
		
		//MultipartFile m = (MultipartFile) paramMap.get("selectedImage");

		//courseService.courseReg(paramMap.get(course));
		//System.out.println(paramMap.get("courseNm"));
		//course.setCourseNm(paramMap.get(className));
		//System.out.println(m.getOriginalFilename());
		
	
	}
}
