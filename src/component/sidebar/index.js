import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideNav, { NavItem, NavText } from "@trendmicro/react-sidenav";
import "./sidebar.css";

function Sidebar() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        "https://virtserver.swaggerhub.com/swaggerpayment/GetDataBuilding/1.0.0/building_data"
      );

      setPost(res.data);
      // console.log("length dari data", res.data);
    };
    fetchPost();
  }, []);

  let arr = post.sort((a, b) => a - b)[post.length - 1];
  console.log("ini destruc", arr);

  return (
    <SideNav>
      <div class="side-nav">
        <Link className="nav-link-dash" to="#">
          DASHBOARD
        </Link>
      </div>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="/">
          <NavText>Dashboard</NavText>
        </NavItem>
        <NavItem eventKey="content" class="nav-item">
          <Link className="nav-link" to="/">
            Gudang
          </Link>
        </NavItem>
        <NavItem eventKey="content" class="nav-item">
          <NavText>Jml Gedung : {post.length}</NavText>
        </NavItem>
        {/* <NavItem eventKey="content" class="nav-item" key={post.id}>
          <NavText>Kapasitas :</NavText>
        </NavItem> */}
      </SideNav.Nav>
    </SideNav>
  );
}

export default Sidebar;
