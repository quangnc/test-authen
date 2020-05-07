import React, { Component } from "react";
import Image from "../../../assets/img/tom-rang-muoi-tieu.jpg";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="app-sidebar">
        <div className="sidebar-box">
          <img src={Image} alt="tom-rang-muoi-tieu.jpg" />
          <div className="app-sidebar__title">
            <h4 className="title-eat-tasty">Ăn Ngon</h4>
            <h4 className="title-everyday">Mỗi Ngày</h4>
          </div>
          <small>Sẵn lòng phục vụ quý khách</small>
        </div>
      </div>
    );
  }
}
