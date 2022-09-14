package com.spring.bearbom.controller.oauth;

import com.spring.bearbom.dto.MemberDTO;
import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.dto.SocialDto;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.mapper.UserMapper;
import com.spring.bearbom.repository.UserRepository;
//import com.spring.bearbom.service.oauth.OAuthService;
import com.spring.bearbom.service.oauth.OAuthService;
import com.spring.bearbom.service.oauth.OAuthToken;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@Data
@Slf4j
@RequestMapping("/oauth")
public class OAuthController {

    @Autowired
    OAuthService oAuthService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    UserMapper userMapper;
    /**
     * 카카오 callback
     * [GET] /oauth/kakao/callback
     */
//    @ResponseBody
//    @GetMapping("/kakao")
//    public void kakaoCallback(@RequestParam String code) throws Exception {
//      log.info("code : {}", code);
//        String test = oAuthService.getKakaoAccessToken(code);
//        System.out.println("///////////////");
//        oAuthService.createKakaoUser(test);
//        System.out.println("///////////////TEST");
//
////        oAuthService.getKakaoAccessToken1(code);
//
////        oAuthService.getKakaoAccessToken1(code);
////        System.out.println("///////////////TEST");
//
////        String accessToken = oAuthService.getKakaoAccessToken2(code);
////        System.out.println("///////////////TEST");
//
////        oAuthService.getProfile2(accessToken,userRepository);
//    }

    @GetMapping("kakao")
    public ResponseEntity<?> kakaoCallbackT(@RequestParam("code") String code) throws Exception {
        log.info("code : {}", code);
        String token = oAuthService.getKakaoAccessToken(code);
//        System.out.println("///////////////");
//        oAuthService.createKakaoUser(token);
//        System.out.println("///////////////TEST");
//        @PathVariable String provider,
        String provider = "kakao";
        SocialDto socialDto = null;
        UserDTO userDTO = new UserDTO();

        if (provider.equals("kakao")) {
            socialDto = oAuthService.createKakaoUser(token);
            System.out.println("socialDto//////////" + socialDto);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<User> users = userRepository.findByUserEmail(socialDto.getUserEmail());

//        List<User> users = userRepository.findByUserEmail("mooooo1997@naver.com");

        System.out.println("//////// Optional" + users);
        System.out.println(users.isEmpty());
        if (users.isEmpty()) {
            System.out.println("실행??///////////////");
            userDTO.setUserId(socialDto.getUserId());
            userDTO.setUserNm(socialDto.getUserNm());
            userDTO.setUserPw(socialDto.getUserPw());
            userDTO.setRole(socialDto.getRole());
            userDTO.setUserAddress(socialDto.getUserAddress());
            userDTO.setUserNickName(socialDto.getUserNm());
            userDTO.setUserPoint(socialDto.getUserPoint());
            userDTO.setUserPwFailCnt(socialDto.getUserPwFailCnt());
            userDTO.setUserTel(socialDto.getUserTel());
            userDTO.setUserYn(socialDto.getUserYn());
            userDTO.setUserZipcode(socialDto.getUserZipcode());
            userDTO.setUserEmail(socialDto.getUserEmail());

            System.out.println(userDTO);
            final String tokenT = jwtTokenProvider.createT(userDTO);
            System.out.println("tokenT://////////"+tokenT);
            userDTO.setToken(tokenT);
            userMapper.insertUserKakao(userDTO);
            return ResponseEntity.ok().body(userDTO);
        } else {
            User test1 = users.get(0);
            userDTO.setUserId(test1.getUserId());
            userDTO.setUserNm(test1.getUserNm());
            userDTO.setUserPw(test1.getUserPw());
            userDTO.setRole(test1.getRole());
            userDTO.setUserAddress(test1.getUserAddress());
            userDTO.setUserNickName(test1.getUserNm());
            userDTO.setUserPoint(test1.getUserPoint());
            userDTO.setUserPwFailCnt(test1.getUserPwFailCnt());
            userDTO.setUserTel(test1.getUserTel());
            userDTO.setUserYn(test1.getUserYn());
            userDTO.setUserZipcode(test1.getUserZipcode());
            userDTO.setUserEmail(test1.getUserEmail());

            System.out.println(userDTO);
            final String tokenT = jwtTokenProvider.createT(userDTO);
            System.out.println("tokenT://////////"+tokenT);
            userDTO.setToken(tokenT);
            return ResponseEntity.ok().body(userDTO);
        }




//        oAuthService.getKakaoAccessToken1(code);

//        oAuthService.getKakaoAccessToken1(code);
//        System.out.println("///////////////TEST");

//        String accessToken = oAuthService.getKakaoAccessToken2(code);
//        System.out.println("///////////////TEST");

//        oAuthService.getProfile2(accessToken,userRepository);
    }


}