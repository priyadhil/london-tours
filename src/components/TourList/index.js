import React, { Component } from "react";
import "./TourList.scss";
import Tours from "../Tour/Tours";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };
  render() {
    const { tours } = this.state;
    console.log(this.state.tours);
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return <Tours key={tour.id} value={tour} />;
        })}
      </section>
    );
  }
}
