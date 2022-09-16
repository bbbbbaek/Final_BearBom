// 테이블을 여러 컴포넌트에서 쉽게 사용하기 위해 클래스 문법 사용

export class TableMenuItems {
  constructor(title, item1, item2, item3, item4, item5, item6, item7) {
    this.title = title;
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
    this.item4 = item4;
    this.item5 = item5;
    this.item6 = item6;
    this.item7 = item7;
  }
}

export class TableDataItems {
  constructor(data1, data2, data3, data4, data5, data6, data7) {
    this.data1 = data1;
    this.data2 = data2;
    this.data3 = data3;
    this.data4 = data4;
    this.data5 = data5;
    this.data6 = data6;
    this.data7 = data7;
  }
}
