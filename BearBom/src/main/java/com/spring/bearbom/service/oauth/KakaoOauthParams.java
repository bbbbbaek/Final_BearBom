package com.spring.bearbom.service.oauth;

import lombok.Data;

@Data
public class KakaoOauthParams {


    public long id;
    public String connected_at;
    public Properties properties;
    public KakaoAccount kakao_account;

    @Data
    public class Properties {
        public String nickname;
    }

    @Data
    public class KakaoAccount {
        public boolean profile_nickname_needs_agreement;
        public Profile profile;
        public Boolean has_email;
        public Boolean email_needs_agreement;
        public Boolean is_email_valid;
        public Boolean is_email_verified;
        public String email;
    }

    @Data
    public class Profile {
        public String nickname;
    }
}
