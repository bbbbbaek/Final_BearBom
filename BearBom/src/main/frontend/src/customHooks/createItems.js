// 테이블 만들기 위한 Data 클래스
export class Data {
  constructor(title, prop, cell) {
    this.title = title;
    this.prop = prop;
    this.cell = cell;
  }
}

// ----------------------- 고객센터 -----------------------

// 공지사항 (Notice)
export const noticeItems = [
  new Data("번호", "l10", "noticeIdx"),
  new Data("제목", "l40", "noticeTitle"),
  // new Data("작성자", "l10", "user"),
  new Data("작성일", "l10", "noticeRegdate"),
  // new Data("조회수", "l10", "noticeMdfdate"),
];

// FAQ - helpdesk 말고 관리자 페이지에서 조회할 때만 사용하기
export const faqItems = [
  new Data("번호", "l10", "guideIdx"),
  new Data("제목", "l40", "guideTitle"),
  // new Data("내용", "l40", "guideContent"),
  new Data("작성일", "l10", "guideRegdate"),
  // new Data("수정일", "l10", "guideMdfdate"),
];

// ----------------------- 마이페이지 -----------------------

// 좌상단 프로필
export const profileItems = ["사진", "이름", "이메일", "연락처"];

// 상단 widget

// 최근 거래 내역 (메인메뉴)
export const recentTransactionItems = [
  new Data("", "l5", ""),
  new Data("강의번호", "l10", "courseIdx"),
  new Data("강의명", "l40", "courseNm"),
  new Data("강사명", "l10", "userId"),
  new Data("가격", "l10", "courseCost"),
  new Data("난이도", "l10", "courseLevel"),
  // new Data("등록일", "l10", "courseRegdate"),
  // new Data("구매일", "l10", "orderDate"),
  // new Data("상태", "l10", "status"), // 없음
];

// 찜한 클래스 조회
export const wishListItems = [
  new Data("", "l5", ""),
  new Data("강의번호", "l10", "courseIdx"),
  new Data("이미지", "l10", "courseThumbnailNm"),
  new Data("강의명", "l40", "courseNm"),
  new Data("강사명", "l10", "userId"),
  new Data("시작일", "l10", "courseStDate"),
];

// 수강 클래스 조회
export const takenClassItems = [
  new Data("", "l5", ""),
  new Data("강의번호", "l10", "courseIdx"),
  new Data("이미지", "l20", "courseThumbnailNm"),
  new Data("강의명", "l40", "courseNm"),
  new Data("강사명", "l10", "userId"),
  new Data("구매일", "l10", "courseRegdate"),
  // new Data("상태", "l10", "courseUseYn"), // 없음
];

// 개설 클래스 조회
export const openedClassItems = [
  new Data("", "l5", ""),
  new Data("강의번호", "l10", "courseIdx"),
  new Data("이미지", "l10", "courseThumbnailNm"),
  new Data("강의명", "l30", "courseNm"),
  // new Data("강사명", "l10", "user"),
  new Data("개설일", "l10", "courseRegdate"), // 없음
  new Data("시작일", "l10", "courseStDate"),
  new Data("종료일", "l10", "courseEndDate"),
  // new Data("상태", "l20", "status"), // 없음
];

// 개인 정보 수정
export const userInfoItems = [
  "이메일",
  "비밀번호",
  "이름",
  "닉네임",
  "전화번호",
  "주소",
  "상세주소",
  "우편번호",
];

// 강사 프로필 수정
export const lecturerProfileItems = ["사진", "닉네임", "내용"];

// 문의 내역 조회
export const inquiryItems = [
  new Data("", "l5", ""),
  new Data("문의번호", "l10", "inquiryIdx"),
  new Data("종류", "l10", "inquirySort"),
  new Data("제목", "l30", "inquiryTitle"),
  // new Data("내용", "l40", "inquiryContent"),
  new Data("작성자", "l10", "userId"),
  new Data("작성일", "l10", "inquiryRegdate"),
  new Data("답변일", "l10", "inquiryReplydate"),
  new Data("답변여부", "l10", "inquiryReplyYn"),
];

// ----------------------- 관리자 페이지 -----------------------

// 최근 거래 내역 (메인메뉴)
export const latestTransactionItems = [
  new Data("", "l5", ""),
  new Data("주문번호", "l10", "orderIdx"),
  new Data("", "l10", "courseImage"),
  new Data("강의명", "l40", "courseNm"),
  new Data("강사명", "l10", "userId"),
  new Data("바보", "l10", "courseStTime"),
  // new Data("상태", "l10", "status"), // 없음
];

// 매출 관리
export const salesMgmtItems = [
  new Data("", "l5", ""),
  new Data("번호", "l10", "orderIdx"),
  new Data("주문번호", "l10", "orderNm"),
  new Data("강의번호", "l10", "courseIdx"),
  new Data("구매자", "l10", "userId"),
  new Data("매출액", "l20", "orderPri"),
  new Data("거래일자", "l10", "orderRegdate"),
];

// 주문 관리
export const orderMgmtItems = [
  new Data("", "l5", ""),
  new Data("주문번호", "l10", "orderNm"),
  new Data("강의번호", "l10", "courseIdx"),
  new Data("판매자", "l10", "userId"),
  new Data("가격", "l10", "orderPri"),
  new Data("구매자", "l10", "userId"),
  new Data("주문여부", "l10", "orderYn"),
  new Data("구매일", "l10", "paymentDate"),
  new Data("구매방식", "l10", "paymentMethod"),
];

// 고객 관리
export const userMgmtItems = [
  new Data("", "l5", ""),
  new Data("아이디", "l10", "userId"),
  new Data("이름", "l10", "userNm"),
  new Data("닉네임", "l10", "userNickName"),
  new Data("이메일", "l10", "userEmail"),
  new Data("연락처", "l10", "userTel"),
  new Data("연락처", "l20", "userAddress"),
  new Data("삭제", "l5", "delete"), // 없음

  // new Data("가입일", "l10", "userRegdate"),
];

// 강좌 관리
export const courseMgmtItems = [
  new Data("", "l5", ""),
  new Data("강의번호", "l10", "courseIdx"),
  new Data("강의명", "l40", "courseNm"),
  new Data("시작일", "l10", "courseStDate"),
  new Data("강사명", "l10", "userId"),
  new Data("상태", "l10", "courseUseYn"), // 없음
  new Data("삭제", "l10", "delete"), // 없음
];

// 공지사항 관리
export const noticeMgmtItems = [
  new Data("", "l5", ""),
  new Data("번호", "l10", "noticeIdx"),
  new Data("제목", "l40", "noticeTitle"),
  // new Data("제목", "l40", "noticeContent"),
  // new Data("작성자", "l10", "user"),
  new Data("작성일", "l10", "noticeRegdate"),
  new Data("삭제", "l10", "noticeMdfdate"),
];

// FAQ 관리
export const faqMgmtItems = [
  new Data("", "l5", ""),
  new Data("번호", "l10", "guideIdx"),
  new Data("제목", "l40", "guideTitle"),
  // new Data("내용", "l40", "guideContent"),
  new Data("작성일", "l10", "guideRegdate"),
  new Data("삭제", "l10", ""),
  // new Data("수정일", "l10", "guideMdfdate"),
];

// 고객문의 관리
export const inquiryMgmtItems = [
  new Data("", "l5", ""),
  new Data("번호", "l5", "inquiryIdx"),
  new Data("문의종류", "l10", "inquirySort"),
  new Data("제목", "l30", "inquiryTitle"),
  // new Data("내용", "l40", "inquiryContent"),
  new Data("작성자", "l10", "userId"),
  new Data("작성일", "l10", "inquiryRegdate"),
  new Data("답변일", "l10", "inquiryReplydate"),
  new Data("답변여부", "l10", "inquiryReplyYn"),
  new Data("삭제", "l10", ""),
];
