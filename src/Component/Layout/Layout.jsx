import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./styles.css";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
