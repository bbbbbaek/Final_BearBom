import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createItems, createData } from "../../../customHooks/create";
import adminProfileImage from "../../../images/adminProfileImage.png";

const TableCopy = () => {
  const items = [
    createItems("item", "width", "height", "age", "rate", "merong"),
  ];
  const data = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{items[0].item1}</TableCell>
                <TableCell className="tableCell">{items[0].item2}</TableCell>
                <TableCell className="tableCell">{items[0].item3}</TableCell>
                <TableCell className="tableCell">{items[0].item4}</TableCell>
                <TableCell className="tableCell">{items[0].item5}</TableCell>
                <TableCell className="tableCell">{items[0].item6}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((a) => (
                <TableRow
                  key={a.data1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{a.data1}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={adminProfileImage} alt="pp" />
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{a.data2}</TableCell>
                  <TableCell className="tableCell">{a.data3}</TableCell>
                  <TableCell className="tableCell">{a.data4}</TableCell>
                  <TableCell className="tableCell">{a.data5}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default TableCopy;
