package com.spring.bearbom.service.oauth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.spring.bearbom.dto.SocialDto;
import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;


import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class OAuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String getKakaoAccessToken (String code) {
        String access_Token = "";
        String refresh_Token = "";
        String reqURL = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=270cc2a7828a97d0c726b66555068ea3"); // TODO REST_API_KEY 입력
            sb.append("&redirect_uri=http://localhost:3000/oauth/kakao"); // TODO 인가코드 받은 redirect_uri 입력
            sb.append("&code=" + code);
            sb.append("&client_secret=HqYkt34CTcUF9O7Ci8JYLQSCkU1aYCOh");
            bw.write(sb.toString());
            bw.flush();

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body : " + result);

            //Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            access_Token = element.getAsJsonObject().get("access_token").getAsString();
            refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return access_Token;
    }

    public SocialDto createKakaoUser(String token) throws Exception {

        String reqURL = "https://kapi.kakao.com/v2/user/me";

        SocialDto socialDto = new SocialDto();
        //access_token을 이용하여 사용자 정보 조회

            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body : " + result);

            //Gson 라이브러리로 JSON파싱
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            long id = element.getAsJsonObject().get("id").getAsLong();
            boolean hasEmail = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("has_email").getAsBoolean();
            String email = "";
            String test = "";
            if (hasEmail) {
                email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email").getAsString();
                test = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("profile").getAsJsonObject().get("nickname").getAsString();
            }

            System.out.println("id : " + id);
            System.out.println("email : " + email);
            System.out.println("nickname : " + test);
            User user;
            String emailTest = "mooooo1997@naver.com";
            String kakaoPassword = passwordEncoder.encode(test);
            String role = "ROLE_USER";
//            if (userRepository.findByUserEmail(email).isPresent()) {
//                //가입이 되어있으면 정보 담아줌
////                System.out.println("/////////////" + email);
////                System.out.println("/////////////" +user.getUserEmail());
////                System.out.println("/////////////" + emailTest);
//
//                user = userRepository.findByUserEmail(emailTest).get();
//                System.out.println(user);
//
//            } else {
//                //가입이 안되어있으면 null 리턴하여 가입 진행
//                user = null;
////                System.out.println("/////////////" + email);
//            }
//            System.out.println("/////////////" + email);
        socialDto.setUserId("kakao" + "_" + email.split("@")[0]);
        socialDto.setUserNm(test);
        socialDto.setUserEmail(email);
        socialDto.setUserPw(kakaoPassword);
        socialDto.setRole(role);
        socialDto.setUserAddress("kakao");
        socialDto.setUserNickName(test);
        socialDto.setUserPoint(0);
        socialDto.setUserPwFailCnt(0);
        socialDto.setUserTel("0");
        socialDto.setUserYn('Y');
        socialDto.setUserZipcode("0");
            br.close();

        System.out.println("OAuthService socialDto : " + socialDto);
            return socialDto;
        }


//    public void getKakaoAccessToken1 (String code) throws Exception{
//
//        //POST방식으로 key-value 데이터를 요청(카카오쪽으로)
//        RestTemplate rt = new RestTemplate(); //http 요청을 간단하게 해줄 수 있는 클래스
//
//        //HttpHeader 오브젝트 생성
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
//
//        //HttpBody 오브젝트 생성
//        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
//        params.add("grant_type","authorization_code");
//        params.add("client_id","270cc2a7828a97d0c726b66555068ea3");
//        params.add("redirect_uri","http://localhost:8080/oauth/kakao");
//        params.add("code", code);
//        params.add("client_secret", "HqYkt34CTcUF9O7Ci8JYLQSCkU1aYCOh");
//
//        //HttpHeader와 HttpBody를 하나의 오브젝트에 담기
//        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
//                new HttpEntity<>(params, headers);
//
//        //실제로 요청하기
//        //Http 요청하기 - POST 방식으로 - 그리고 response 변수의 응답을 받음.
//        ResponseEntity<String> response = rt.exchange(
//                "https://kauth.kakao.com/oauth/token",
//                HttpMethod.POST,
//                kakaoTokenRequest,
//                String.class
//        );
//
//
//        //Gson Library, JSON SIMPLE LIBRARY, OBJECT MAPPER(Check)
//        ObjectMapper objectMapper = new ObjectMapper();
//        OAuthToken oauthToken =null;
//        //Model과 다르게 되있으면 그리고 getter setter가 없으면 오류가 날 것이다.
//        try {
//            oauthToken = objectMapper.readValue(response.getBody(), OAuthToken.class);
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//    }
//
//    public String getKakaoAccessToken2 (String code) {
//        //POST방식으로 key-value 데이터를 요청(카카오쪽으로)
//        RestTemplate rt = new RestTemplate(); //http 요청을 간단하게 해줄 수 있는 클래스
//
//        //HttpHeader 오브젝트 생성
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
//
//        //HttpBody 오브젝트 생성
//        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
//        params.add("grant_type","authorization_code");
//        params.add("client_id","270cc2a7828a97d0c726b66555068ea3");
//        params.add("redirect_uri","http://localhost:8080/oauth/kakao");
//        params.add("code", code);
//        params.add("client_secret", "HqYkt34CTcUF9O7Ci8JYLQSCkU1aYCOh");
//
//        //HttpHeader와 HttpBody를 하나의 오브젝트에 담기
//        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
//                new HttpEntity<>(params, headers);
//
//        //실제로 요청하기
//        //Http 요청하기 - POST 방식으로 - 그리고 response 변수의 응답을 받음.
//        ResponseEntity<String> response = rt.exchange(
//                "https://kauth.kakao.com/oauth/token",
//                HttpMethod.POST,
//                kakaoTokenRequest,
//                String.class
//        );
//
//
//        //Gson Library, JSON SIMPLE LIBRARY, OBJECT MAPPER(Check)
//        ObjectMapper objectMapper = new ObjectMapper();
//        OAuthToken oauthToken =null;
//        //Model과 다르게 되있으면 그리고 getter setter가 없으면 오류가 날 것이다.
//        try {
//            oauthToken = objectMapper.readValue(response.getBody(), OAuthToken.class);
//            return oauthToken.getAccess_token();
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
////        return "accessToken: " + accessTokenResponse.getBody(); String 일때
//        System.out.println(response.getBody());
//        System.out.println(oauthToken.getAccess_token());
//        return null;
//    }
//
//
//    public void getProfile2(String accessToken, UserRepository userRepository) throws Exception {
//
////        // 이전에 받았던 Access Token 응답
////        ObjectMapper objectMapper = new ObjectMapper();
////
////        // json -> 객체로 매핑하기 위해 NaverOauthParams 클래스 생성
////        NaverOauthParams naverOauthParams = null;
////        try {
////            naverOauthParams = objectMapper.readValue(accessTokenResponse.getBody(), NaverOauthParams.class);
////        } catch (JsonProcessingException e) {
////            e.printStackTrace();
////        }
//
//        // 이전에 받았던 Access Token 응답
////        ObjectMapper objectMapper = new ObjectMapper();
////
////        // json -> 객체로 매핑하기 위해 KakaoOauthParams 클래스 생성
////        KakaoOauthParams kakaoOauthParams = null;
////        try {
////            kakaoOauthParams = objectMapper.readValue(accessTokenResponse.getBody(), KakaoOauthParams.class);
////        } catch (JsonProcessingException e) {
////            e.printStackTrace();
////        }
////
////        // 여기서부터, Access Token을 이용해서 사용자 정보를 응답 받는 코드이다.
////        HttpHeaders headers1 = new HttpHeaders();
////        headers1.add("Authorization", "Bearer " + kakaoOauthParams.getAccess_token());
////        headers1.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
////
////        HttpEntity<HttpHeaders> kakaoRequest1 = new HttpEntity<>(headers1);
////
////        ResponseEntity<String> profileResponse = rt.exchange(
////                "https://kapi.kakao.com/v2/user/me",
////                HttpMethod.POST,
////                kakaoRequest1,
////                String.class
////        );
////
////        System.out.println(profileResponse.getBody());
////    }
//
//        System.out.println("///////////////////////"+accessToken);
//        RestTemplate rt = new RestTemplate(); //http 요청을 간단하게 해줄 수 있는 클래스
//
//        //HttpHeader 오브젝트 생성
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Authorization", "Bearer "+accessToken);
//        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
//
//
//        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
//                new HttpEntity<>(headers);
//
//        //실제로 요청하기
//        //Http 요청하기 - POST 방식으로 - 그리고 response 변수의 응답을 받음.
//        ResponseEntity<String> response = rt.exchange(
//                "https://kapi.kakao.com/v2/user/me",
//                HttpMethod.POST,
//                kakaoProfileRequest,
//                String.class
//        );
//
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        KakaoProfile profile  =null;
//        //Model과 다르게 되있으면 그리고 getter setter가 없으면 오류가 날 것이다.
//        try {
//            profile = objectMapper.readValue(response.getBody(), KakaoProfile.class);
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//
//        //username, password, email
//        User user = new User();
//
//        String email = user.getUserEmail();
//
//        if(userRepository.findByUserEmail(user.getUserEmail()).isPresent()){
//            //가입이 되어있으면 정보 담아줌
//            user = userRepository.findByUserEmail(user.getUserEmail()).get();
//        } else {
//            //가입이 안되어있으면 null 리턴하여 가입 진행
//            user = null;
//        }
//
//        if(user == null) {
//
//            user.setUserNm(profile.getProperties().getNickname());
//            user.setUserEmail(profile.getKakao_account().getEmail());
////            user.setGender(1);
////            user.setAge_range(25);
////            user.setBirth(9999);
//
//            userRepository.save(user);
//        }
//    }

}