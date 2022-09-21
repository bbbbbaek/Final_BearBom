package com.spring.bearbom.controller.test;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.service.test.TestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@Slf4j
@RequiredArgsConstructor
public class TestController1 {

    private final TestService testService;

    // 찜하기 목록 리스트
    @GetMapping("/liketest")
    public Map<String, Object> liketest(@AuthenticationPrincipal String userId){
        try{
            CourseDTO courseDTO = new CourseDTO();
            courseDTO.setUserId(userId);
            List<Map<String, Object>> liketest = testService.liketest(courseDTO);

            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("liketest", liketest);
            return resultMap;

        }catch (Exception e) {
            Map<String, Object> errorMap = new HashMap<>();
            errorMap.put("error", e.getMessage());
            return errorMap;
        }
    }


    //마이페이지
    // 수강 중인 강좌(takingCourseCnt), 수강 완료 강좌(takenCourseCnt),
    // 개설한 강좌(openedCourseCnt), 찜한 클래스(likedCourseCnt) 수량 컨트롤러
    @GetMapping("/getMyPageCnt")
    public Map<String, Object> gettest(@AuthenticationPrincipal String userId) {
        // 수강 중인 강좌를 위한 현재 날짜
        LocalDate date = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        System.out.println(date.format(formatter));
        try{
            CourseDTO courseDTO = new CourseDTO();
            courseDTO.setUserId(userId);
            courseDTO.setTakingCourseDate(date.format(formatter));

            System.out.println("courseDTO : /////" +courseDTO);
            List<Map<String, Object>> likedCourseCnt = testService.likedCourseCnt(courseDTO);
            List<Map<String, Object>> takingCourseCnt = testService.takingCourseCnt(courseDTO);
            List<Map<String, Object>> takenCourseCnt = testService.takenCourseCnt(courseDTO);
            List<Map<String, Object>> openedCourseCnt = testService.openedCourseCnt(courseDTO);

            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("likedCourseCnt", likedCourseCnt);
            resultMap.put("takingCourseCnt",takingCourseCnt);
            resultMap.put("takenCourseCnt", takenCourseCnt);
            resultMap.put("openedCourseCnt", openedCourseCnt);
            return resultMap;

        }catch (Exception e) {
            Map<String, Object> errorMap = new HashMap<>();
            errorMap.put("error", e.getMessage());
            return errorMap;
        }
    }


}
