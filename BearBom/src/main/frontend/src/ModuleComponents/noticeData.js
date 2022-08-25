function createData(
  notice_idx,
  notice_title,
  notice_regDate,
  notice_cnt,
  notice_content
) {
  return {
    notice_idx,
    notice_title,
    notice_regDate,
    notice_cnt,
    notice_content,
  };
}
const regDate = new Date("yyyy-MM-dd");

const rows = [
  createData(1, "test", "2022-08-01", 1, "안녕하세요"),
  createData(2, "test", "2022-08-01", 1, "안녕하세요"),
  createData(3, "test", "2022-08-01", 1, "안녕하세요"),
  createData(4, "test", "2022-08-01", 1, "안녕하세요"),
];

export default rows;
