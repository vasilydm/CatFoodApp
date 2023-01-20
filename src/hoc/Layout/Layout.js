import React, { Component } from "react";
import classes from './Layout.module.css'
import Packages from "../../containers/Packages/Packages";
import Header from "../../components/Header/Header";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header></Header>
        <Packages></Packages>
      </div>
    )
  }
}

export default Layout