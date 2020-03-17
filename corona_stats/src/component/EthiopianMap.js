import React, { useState, useEffect } from "react";
import "./ethiopianmap.css";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 200
  }
});

function EthiopianMap(props) {
  const classes = useStyles();
  const [ethiopianStats, setStats] = useState([]);

  const fetchCoronaStatsInEthiopia = async () => {
    try {
      const data = await fetch("https://covid19.mathdro.id/api/countries/ET");
      const res = await data.json();
      setStats(res);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchCoronaStatsInEthiopia();
  }, []);

  return (
    <div className="ethipia">
      <div className="ethiopia__table">
        {ethiopianStats.confirmed ? (
          <TableContainer component={Paper}>
            <Typography
              className={classes.title}
              variant="h4"
              id="tableTitle"
              align="center"
            >
              ኢትዮጵያ
            </Typography>
            <Table className={classes.table} aria-label="Ethiopia corona stats">
              <TableHead>
                <TableRow>
                  <TableCell>በበሽታው የተጠቁ</TableCell>
                  <TableCell>ያገገሙ</TableCell>
                  <TableCell>ሞት</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="stat">
                    {ethiopianStats.confirmed.value}
                  </TableCell>
                  <TableCell align="right">
                  {ethiopianStats.recovered.value}
                  </TableCell>
                  <TableCell align="right">
                  {ethiopianStats.deaths.value}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </div>
    </div>
  );
}

export default EthiopianMap;
