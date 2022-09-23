package com.spring.bearbom.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;

@Mapper
public interface UserMapper {

    @Select("SELECT COUNT(*) FROM T_USER WHERE USER_ID = #{userId}")
    int idDuplicate(String userId);
//            userDTO.setUserId("kakao" + "_" + socialDto.getUserEmail().split("@")[0]);
//            userDTO.setUserNm(socialDto.getUserNm());
//            userDTO.setUserPw(socialDto.getUserPw());
//            userDTO.setRole(socialDto.getRole());
//            userDTO.setUserAddress(socialDto.getUserAddress());
//            userDTO.setUserNickName(socialDto.getUserNm());
//            userDTO.setUserPoint(socialDto.getUserPoint());
//            userDTO.setUserPwFailCnt(socialDto.getUserPwFailCnt());
//            userDTO.setUserTel(socialDto.getUserTel());
//            userDTO.setUserYn(socialDto.getUserYn());
//            userDTO.setUserZipcode(socialDto.getUserZipcode());
//INSERT INTO bearbomdb.t_user
//            (user_id, lecturer_info, `role`, user_address, user_address_def, user_email, user_nick_name, user_nm, user_photo_new_nm, user_photo_org_nm, user_photo_path, user_point, user_pw, user_pw_fail_cnt, user_tel, user_yn, user_zipcode)
//    VALUES('aa', NULL, 'ROLE_USER', '서울 강남구 개포로 202 (개포동, 석인빌딩)', 'ㅁㅁ', 'jkwhd3@naver.com', 'aa', 'aa', NULL, NULL, NULL, 0, '$2a$10$/39uKvwPM4JTP6Wel4Tof.uBTT7WDB2kAcs6PkwXd4ucKbBUiF0pS', 0, '010-1111-1111', 'Y', 6307);
//	@Insert("INSERT INTO t_order VALUES (( SELECT IFNULL(MAX(order_no),0) + 1 FROM t_order A),#{userId},${orderPrice},#{itemNo})")

    @Update("UPDATE T_USER SET USER_PW_FAIL_CNT = 0 WHERE USER_ID = #{userId}")
    void updateResetFailCnt(String userId);
    
    @Update("UPDATE T_USER SET USER_PW_FAIL_CNT = USER_PW_FAIL_CNT + 1 WHERE USER_ID = #{userId}")
    void updateFailCnt(String userId);
    
    @Select("SELECT USER_PW_FAIL_CNT FROM T_USER WHERE USER_ID=#{userId}")
    int checkFailCnt(String userId);
    
    @Insert("INSERT INTO T_USER(USER_ID, USER_NM,USER_PW,role,USER_ADDRESS,USER_NICK_NAME,USER_EMAIL,USER_POINT,USER_PW_FAIL_CNT,USER_TEL,USER_YN,USER_ZIPCODE) VALUES (#{userId},#{userNm}, #{userPw}, #{role}, #{userAddress},  #{userNickName}, #{userEmail}, #{userPoint}, #{userPwFailCnt}, #{userTel}, #{userYn}, #{userZipcode})")
//    @Insert("INSERT INTO T_USER VALUES (USER_ID = #{userId}, USER_NM = #{userNm}, USER_PW=#{userPw}, ROLE=#{role}, USER_ADDRESS = #{userAddress}, USER_NICK_NAME = #{userNickName}, USER_EMAIL = #{userEmail}, USER_POINT = #{userPoint}, USER_PW_FAIL_CNT = #{userPwFailCnt}, USER_TEL= #{userTel}, USER_YN = #{userYn}, USER_ZIPCODE = #{userZipcode})")
    void insertUserKakao(UserDTO userDTO);

    //============================================================//
    // 유저 정보 수정 xml쿼리문 가져오기
	void updateUser(User user);

	List<User> getUserList();

	
	// admin 유저 탈퇴 시키시
//	@Update("UPDATE T_USER SET USER_YN = 'N' WHERE USER_ID = #{userId}")
//	void adminDeleteUser(UserDTO userDTO);
	
	// admin 유저 탈퇴 시키시
	@Update("UPDATE T_USER SET USER_YN = 'N' WHERE USER_ID = #{userId}")
	void adminDeleteUser(Map<String, Object> paramMap);



//    <update id="adminDeleteUser" parameterType="com.spring.bearbom.dto.UserDTO">
//   <![CDATA[
//        UPDATE T_USER
//           SET
//              USER_YN = 'N'
//           WHERE USER_ID = #{userId}
//    ]]>
//</update>

}


