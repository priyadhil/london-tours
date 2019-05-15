import React, { Component } from "react";
import "./Tours.scss";
//import bigben from "../../big-ben-bridge.jpg";

export default class Tours extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { name, img, city, info } = this.props.value;
    return (
      <section>
        <div className="tour">
          <div className="img-container">
            <img width="200" src={img} alt="" />
            <span className="close-btn">
              <i className="fas fa-window-close" />
            </span>
          </div>
          <div className="tour-info">
            <h3>{name}</h3>
            <h4>{city}</h4>
            <h5>
              info{" "}
              <span onClick={this.handleInfo}>
                <i className="fas fa-caret-square-down" />
              </span>
            </h5>
            {this.state.showInfo && <p>{info}</p>}
          </div>
        </div>
      </section>
    );
  }
}
