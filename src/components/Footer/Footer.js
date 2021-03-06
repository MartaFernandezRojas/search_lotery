import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import { MDBBtn } from "mdbreact";
import axios from 'axios';
import SelectLib from "../SelectLib/SelectLib";



export class Footer extends Component {
  state = {
    name20: "fdh",
  };
  componentDidMount() {
    console.log("HOLA MUNDO");
    this.setState({
      name20: "hellos",
    });
    console.log("HOLA MUNDO", this.state.name20);
  }
  insertMensaje = () => {
    axios.get("https://www.lottoland.com/api/drawings/euroJackpot/20200904")
    .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          this.setState({
            name20: response.data.current_user_url,
          });
        }

    })
  };

  render() {
    return (
      <div className={styles.Footer} data-testid="Footer">
        <MDBBtn onClick={this.insertMensaje}>Default</MDBBtn>
        <h1>{this.state.name20}</h1>
        <h1>{this.props.name}</h1>
        <SelectLib/>
       
      </div>
    );
  }
}
Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
