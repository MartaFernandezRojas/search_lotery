
import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

export class Header extends Component {
  state = {
    name20: "fdh",
  };
  componentDidMount() {
   
      console.log("HOLA MUNDO");
      this.setState({
        name20: 'hellos'
    })
      console.log("HOLA MUNDO",this.state.name20);
  
  }
  insertMensaje = ()  => {

  }

  render() {
    return(
    <div className={styles.Header} data-testid="Header">
  
      <h1>{this.state.name20}</h1>
      <h1>{this.props.name}</h1>

    </div>
    );
  }
}
Header.propTypes = {};

Header.defaultProps = {};

export default Header;
