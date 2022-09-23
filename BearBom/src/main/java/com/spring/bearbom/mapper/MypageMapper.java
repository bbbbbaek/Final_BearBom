package com.spring.bearbom.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.dto.InquiryDTO;

@Mapper
public interface MypageMapper {
   
//   @Select("SELECT A.* FROM T_COURSE A,(SELECT * FROM T_LIKE) B WHERE B.USER_ID = #{userId} AND A.COURSE_IDX = B.COURSE_IDX")
   public List<CourseDTO> getWishList( CourseDTO courseDTO);
      
//   @Select("SELECT COUNT(*) AS CNT FROM T_COURSE A,T_LIKE B WHERE B.USER_ID = #{userId} AND A.COURSE_IDX = B.COURSE_IDX")
   public List<CourseDTO> getWishCnt(CourseDTO courseDTO);
//   @Select("SELECT COUNT(A.course_idx) AS CNT FROM T_COURSE A, (SELECT * FROM T_LIKE) B WHERE A.USER_ID = #{userId} AND A.COURSE_IDX = B.COURSE_IDX")
   


<<<<<<< HEAD
=======

>>>>>>> 02cfacf445f3e16f14b9fcc48e37d95c1c51b575
    // 유저 탈퇴 Y->N 0922
    void deleteUserInfo(String userId);

    //재현
    List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO);

<<<<<<< HEAD
    void updateInquiryReference(InquiryDTO inquiryDTO);
}
=======
	void updateInquiryReference(InquiryDTO inquiryDTO);
}
>>>>>>> 02cfacf445f3e16f14b9fcc48e37d95c1c51b575
