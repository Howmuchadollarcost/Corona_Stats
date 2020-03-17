import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


import { DateFormatter } from '../utils/dateFormatter';

const useStyles = makeStyles({
  table: {
    maxWidth: 600
  }
});

function WorldTable(props) {
  const classes = useStyles();
  return (
    <div className="data-table">
      {
        props.stats[0] ? (
          <>
          <TableContainer component={Paper}>

          <Typography
              className={classes.title}
              variant="h4"
              id="tableTitle"
              align="center"
            >
              ዓለም አቀፍ ውሂብ
            </Typography>
          <Table className={classes.table} aria-label="world corona stats">
            <TableHead>
              <TableRow>
                <TableCell>ሀገር</TableCell>
                <TableCell>ክልል</TableCell>
                <TableCell align="right">በበሽታው የተጠቁ</TableCell>
                <TableCell align="right">ያገገሙ</TableCell>
                <TableCell align="right">ሞት</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.stats.map((stat, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="stat">
                    {stat.countryRegion}
                  </TableCell>
                  <TableCell align="right">{stat.provinceState}</TableCell>
                  <TableCell align="right">{stat.confirmed}</TableCell>
                  <TableCell align="right">{stat.recovered}</TableCell>
                  <TableCell align="right">{stat.deaths}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        <section>
              <small>last updated: {props.stats[0] ? <h3>{DateFormatter(1584233582000)}</h3> : null}</small>
        </section>
        </>
        ):
        null
      }
    </div>
  );
}

export default WorldTable;
