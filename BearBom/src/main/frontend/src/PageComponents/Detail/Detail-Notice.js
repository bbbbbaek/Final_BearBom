function Notice() {
  return (
    <>
      <h5>
        <b>유의사항</b>
      </h5>
      <table className="notice-table">
        <tr>
          <td>
            <img className="notice-img" src="/logo192.png" />
          </td>
          <td>
            강의 수강률이 50%를 넘어가게 되면 환불이 불가하니 참고해주세요
          </td>
        </tr>
        <tr>
          <td>
            <img className="notice-img" src="/logo192.png" />
          </td>
          <td>강의 수강률이 50%를 넘어가도 환불이 불가하니 참고하세요</td>
        </tr>
        <tr>
          <td>
            <img className="notice-img" src="/logo192.png" />
          </td>
          <td>기타 문의 사항이 있으시면 문의를 남겨주세요</td>
        </tr>
      </table>
    </>
  );
}
export default Notice;
