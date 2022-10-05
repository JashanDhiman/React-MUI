import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(({ id, first_name, last_name, email }) => (
            <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{id}</TableCell>
              <TableCell>{first_name}</TableCell>
              <TableCell>{last_name}</TableCell>
              <TableCell align="center">{email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Marcelline",
    last_name: "Gravenall",
    email: "mgravenall0@wp.com",
    gender: "Female",
    ip_address: "157.82.20.80",
  },
  {
    id: 2,
    first_name: "Kalli",
    last_name: "Mardling",
    email: "kmardling1@merriam-webster.com",
    gender: "Female",
    ip_address: "53.110.147.176",
  },
  {
    id: 3,
    first_name: "Edith",
    last_name: "Androli",
    email: "eandroli2@goo.gl",
    gender: "Female",
    ip_address: "161.245.39.134",
  },
  {
    id: 4,
    first_name: "Beau",
    last_name: "Wellbank",
    email: "bwellbank3@hostgator.com",
    gender: "Genderfluid",
    ip_address: "151.228.80.7",
  },
  {
    id: 5,
    first_name: "Bernie",
    last_name: "O' Shea",
    email: "boshea4@engadget.com",
    gender: "Female",
    ip_address: "141.178.225.32",
  },
  {
    id: 6,
    first_name: "Elora",
    last_name: "Rosenwasser",
    email: "erosenwasser5@youtube.com",
    gender: "Female",
    ip_address: "90.58.7.201",
  },
  {
    id: 7,
    first_name: "Judon",
    last_name: "Pilgrim",
    email: "jpilgrim6@netscape.com",
    gender: "Male",
    ip_address: "209.248.89.155",
  },
  {
    id: 8,
    first_name: "Cesya",
    last_name: "Karlsson",
    email: "ckarlsson7@nyu.edu",
    gender: "Female",
    ip_address: "120.251.143.242",
  },
  {
    id: 9,
    first_name: "Andy",
    last_name: "Baptista",
    email: "abaptista8@ask.com",
    gender: "Male",
    ip_address: "199.182.15.139",
  },
  {
    id: 10,
    first_name: "Moses",
    last_name: "Coorington",
    email: "mcoorington9@wsj.com",
    gender: "Male",
    ip_address: "83.104.83.42",
  },
];
