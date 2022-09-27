package com.spring.bearbom.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.entity.User;

@Mapper
public interface CourserMapper {
	
	@Select("SELECT COUNT(*) FROM T_COURSER WHERE COURSER_ID = #{courserIdx}")
	public double getRatingAvg(int courserIdx);

	@Select("SELECT round(AVG(courser_rate),2) FROM t_courser")
	public double updateRating1(Courser courser);
	
	@Select("SELECT IFNULL(C.AVG_RATE, 0)\n"
			+ "	FROM T_COURSE A\n"
			+ "    LEFT OUTER JOIN (\n"
			+ "						SELECT ROUND(AVG(B.COURSER_RATE) , 2) AS AVG_RATE\n"
			+ "							 , B.COURSE_IDX\n"
			+ "							FROM T_COURSER B\n"
			+ "                            GROUP BY B.COURSE_IDX\n"
			+ "					) C\n"
			+ "	ON A.COURSE_IDX = C.COURSE_IDX"
			+ " WHERE A.COURSE_IDX = #{courseIdx}")
	public double updateRating(int courseIdx);

	
	@Select("select * from t_course where course_idx = #{courseIdx}")
    Course getCourse(@Param("courseIdx") int courseIdx);
	
	@Update("update t_course set course_cnt = course_cnt + 1 where course_idx=#{courseIdx}")
	void updateCourseCnt(int courseIdx);

	@Select("select sum(course_cur_cnt) from t_course where user_id = #{userId}")
	public int getCourseCurCnt(String userId);

	@Select("select a.* from t_user a, t_course b where a.user_id = b.user_id and b.course_idx = #{courseIdx}")
	public User getTeacherInfo(int courseIdx);

	@Select("SELECT * FROM T_USER WHERE USER_ID = #{userId}")
	public List<User> userInfo(String userId);
}
