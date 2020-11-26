import React, { Component } from "react";
import PaginationComponent from "../../component/content";
import Sidebar from "../../component/sidebar";
import "./home.css";
// https://virtserver.swaggerhub.com/swaggerpayment/GetDataBuilding/1.0.0/building_data
class Home extends Component {
  render() {
    return (
      <div class="home-display">
        <Sidebar />
        <PaginationComponent />
      </div>
    );
  }
}

export default Home;
