import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./Tour.scss";
import TourList from "./components/TourList";

class Tour extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default Tour;
