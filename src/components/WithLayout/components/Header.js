import React, { memo, useState } from "react";

import { Row, Col, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import get from "lodash/get";

import Session from "../../../utils/Session";
import useCard from "../../../hooks/useCard";
import history from "../../../utils/history";

const UserDropdown = ({ session, handleLogout }) => {
  const permission = session.role === "admin" || session.role === "operator";
  const menu = (
    <Menu>
      {permission && (
        <Menu.Item key="0" onClick={() => history.push("/dashboard")}>
          Dashboard
        </Menu.Item>
      )}

      {permission && <Menu.Divider />}

      <Menu.Item key="3" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <span
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        style={{ paddingLeft: 15, cursor: "pointer" }}
      >
        {session.username} <DownOutlined />
      </span>
    </Dropdown>
  );
};

const BillDropdown = () => {
  const { state, clearCart } = useCard();
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => history.push("/cart")}>
        View Cart
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={() => clearCart()}>
        Clear Cart
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <span
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        style={{ paddingLeft: 15, cursor: "pointer" }}
      >
        <span>Bill({get(state, "total", 0)})</span>
      </span>
    </Dropdown>
  );
};

const Header = () => {
  const [session, setSession] = useState(Session.get());
  const handleLogout = () => {
    Session.remove();
    sessionStorage.removeItem("logged");
    setSession(false);
  };
  return (
    <Row className="header-box" justify="space-between">
      <Col span={8}>Follow us on</Col>
      <Col span={16} className="header-box-right">
        <BillDropdown />
        {session ? (
          <UserDropdown session={session} handleLogout={handleLogout} />
        ) : (
          <span
            style={{ paddingLeft: 15, cursor: "pointer" }}
            onClick={() => history.push("/login")}
          >
            Login
          </span>
        )}
      </Col>
    </Row>
  );
};
export default memo(Header);
