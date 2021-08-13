import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

const TableComp = ({ notesArray }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Denomination</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notesArray[0] > 0 && (
            <StyledTableRow>
              <StyledTableCell align="center" component="th" scope="row">
                1000 Rs
              </StyledTableCell>
              <StyledTableCell align="center">{notesArray[0]}</StyledTableCell>
            </StyledTableRow>
          )}

          {notesArray[1] > 0 && (
            <StyledTableRow>
              <StyledTableCell align="center" component="th" scope="row">
                500 Rs
              </StyledTableCell>
              <StyledTableCell align="center">{notesArray[1]}</StyledTableCell>
            </StyledTableRow>
          )}

          {notesArray[2] > 0 && (
            <StyledTableRow>
              <StyledTableCell align="center" component="th" scope="row">
                200 Rs
              </StyledTableCell>
              <StyledTableCell align="center">{notesArray[2]}</StyledTableCell>
            </StyledTableRow>
          )}

          {notesArray[3] > 0 && (
            <StyledTableRow>
              <StyledTableCell align="center" component="th" scope="row">
                100 Rs
              </StyledTableCell>
              <StyledTableCell align="center">{notesArray[3]}</StyledTableCell>
            </StyledTableRow>
          )}

          {notesArray[4] > 0 && (
            <StyledTableRow>
              <StyledTableCell align="center" component="th" scope="row">
                50 Rs
              </StyledTableCell>
              <StyledTableCell align="center">{notesArray[4]}</StyledTableCell>
            </StyledTableRow>
          )}

          {notesArray[5] > 0 && (
            <StyledTableRow>
              <StyledTableCell align="center" component="th" scope="row">
                20 Rs
              </StyledTableCell>
              <StyledTableCell align="center">{notesArray[5]}</StyledTableCell>
            </StyledTableRow>
          )}

          {notesArray[6] > 0 && (
            <StyledTableRow>
              <StyledTableCell align="center" component="th" scope="row">
                10 Rs
              </StyledTableCell>
              <StyledTableCell align="center">{notesArray[6]}</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
