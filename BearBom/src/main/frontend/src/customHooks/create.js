export const createItems = (
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7
) => {
  return { item1, item2, item3, item4, item5, item6, item7 };
};
export const createData = (data1, data2, data3, data4, data5, data6, data7) => {
  return { data1, data2, data3, data4, data5, data6, data7 };
};

export class Data {
  constructor(title, prop, cell) {
    this.title = title;
    this.prop = prop;
    this.cell = cell;
  }
}
