package com.spring.bearbom.service.oauth;

import lombok.Data;

@Data
public class KakaoProfile {

    public long id;
    public String connected_at;
    public KakaoOauthParams.Properties properties;
    public KakaoOauthParams.KakaoAccount kakao_account;

    @Data
    public class Properties {
        public String nickname;
    }

    @Data
    public class KakaoAccount {
        public boolean profile_nickname_needs_agreement;
        public KakaoOauthParams.Profile profile;
        public Boolean has_email;
        public Boolean email_needs_agreement;
        public Boolean is_email_valid;
        public Boolean is_email_verified;
        public String email;
    }

    @Data
    public class Profile {
        public String nickname;

//            public String thumbnail_image_url;
//            public String profile_image_url;


    }

}