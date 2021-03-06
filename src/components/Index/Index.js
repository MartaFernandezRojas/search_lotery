import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Index.module.scss";
import { MDBInput } from "mdbreact";
export class Index extends Component {
  state = {
    reach: "",
  };
  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      reach: event.target.value
    });
   
  }
  render() {
    return (
      <div className="form-group">
        <MDBInput label="Search" id="apellido" size="lg" onChange={this.handleChange.bind(this)}/>
        <p>{this.state.reach}</p>
      </div>
     
    );
  }
}

Index.propTypes = {};

Index.defaultProps = {};
export default Index;
