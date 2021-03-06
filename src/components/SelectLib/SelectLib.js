import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SelectLib.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import { TableLib } from "../Table/Table";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";

export class SelectLib extends Component {
  state = {
    dateFormat: "20200306",
    selectedDate: "",
    rows: [],
  };

  handleDateChange = (event) => {
    let new_date = this.recoverDate(event.target.value);
    this.setState({
      selectedDate: event.target.value,
      dateFormat: new_date,
    });
    this.chargeTable(this.state.dateFormat);
  };
  chargeTable(new_date) {
    axios
      .get("https://www.lottoland.com/api/drawings/euroJackpot/" + new_date)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.last.length > 0) {
            var data_res = response.data.last[0].odds;
          }
        }
        let array_result = [];
        for (var key in data_res) {
          array_result.push(data_res[key]);
        }
        this.setState({
          rows: array_result,
        });
        console.log("array_result", array_result);
        console.log("data", this.state.data);
      });
  }

  recoverDate(date) {
    let new_date = date.replaceAll("-", "");
    return new_date;
  }
  romanize(n) {
    var values = [1, 5, 10, 50, 100, 500, 1000],
      letras = ["I", "V", "X", "L", "C", "D", "M"],
      res = [],
      num,
      letra,
      val,
      pos,
      insert;

    for (var i = 6; (num = values[i]), (letra = letras[i]); i--) {
      // Suficientemente grande
      if (n >= num) {
        // Número de letras repetidas
        var r = Math.floor(n / num);

        // Restamos el actual
        n -= r * num;

        if (r < 4) {
          // Metemos las letras
          while (r--) {
            res.push(letra);
          }
        } else {
          // No se pueden repetir 4+ veces
          val = res.pop(); // Última letra

          // Si es el string vacío o letra == "M" (no hay anterior)
          // usamos la letra anterior a esta
          pos = (val ? letras.indexOf(val) : i) + 1;

          // Y si letra == "M" -> letras[pos] no existirá y usamos M
          insert = letra + (letras[pos] || "M");

          // Insertamos el string
          res.push(insert);
        }
      } else {
        // Si no vamos a poner letra usamos un ""
        // para que no afecte pop
        res.push("");
      }
    }

    return res.join("");
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    return (
      <div className={styles.SelectLib} data-testid="SelectLib">
        <div className="form"> 
          <form noValidate>
            <TextField
              id="date"
              label="Select Date"
              type="date"
              defaultValue="2020-03-06"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
            />
          </form>
        </div>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tier</TableCell>
                <TableCell align="right">Match</TableCell>
                <TableCell align="right">Winner</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map((row, index) => (
                <TableRow>
                  <TableCell align="right">
                    {this.romanize(index + 1)}
                  </TableCell>
                  <TableCell align="right">{row.specialPrize}</TableCell>
                  <TableCell align="right">{row.winners + "X"}</TableCell>
                  <TableCell align="right">
                    {"€ " + this.numberWithCommas(row.prize)}{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
SelectLib.propTypes = {};

SelectLib.defaultProps = {};

export default SelectLib;
