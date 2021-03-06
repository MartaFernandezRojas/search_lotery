import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Table.scss";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export class TableLib extends Component {
  state = {
    tableData: [],
  };
  componentDidMount() {

	let data= this.props.propsDate
	
  }

  render() {
    return (
      <div>
        <p>{this.props.propsDate}</p>
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
            {this.state.tableData.map((row) => (
              <TableRow key={row.rank0}>
                <TableCell align="right">{row.winners}</TableCell>
                <TableCell align="right">{row.specialPrize}</TableCell>
                <TableCell align="right">{row.prize}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

TableLib.propTypes = {};

TableLib.defaultProps = {};
export default TableLib;
