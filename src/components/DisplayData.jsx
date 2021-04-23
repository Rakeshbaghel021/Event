import React, { useState, useContext } from "react";
import { multiEventContext } from "../EventContext";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";

function DisplayData() {
  const { finalData } = useContext(multiEventContext);
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          border="1"
          size="small"
          aria-label="caption table"
          style={{ width: "70%", justifyContent: "center" }}
        >
          <TableHead>
            <TableRow style={{ backgroundColor: "balck", color: "red" }}>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Number of People</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Vendor</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((data) => (
              <TableRow key={data.amount}>
                <TableCell>{data.firstname}</TableCell>
                <TableCell>{data.lastname}</TableCell>
                <TableCell>{data.numberofpeople}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.vendor}</TableCell>
                <TableCell>{data.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DisplayData;
