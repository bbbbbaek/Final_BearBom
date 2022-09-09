export const CLIENT_ID = "270cc2a7828a97d0c726b66555068ea3";
export const REDIRECT_URI = "http://localhost:3000/oauth/kakao";

// 프런트엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

// 백엔드 리다이랙트 URI 예시
// const REDIRECT_URI =  "http://localhost:5000/kakao/code";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const LOGOUT_REDIRECT_URI = "http://localhost:3000/oauth/kakao/logout";

export const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${CLIENT_ID}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

// https://kauth.kakao.com/oauth/logout?client_id=270cc2a7828a97d0c726b66555068ea3&logout_redirect_uri=http://localhost:3000/oauth/kakao/logout
