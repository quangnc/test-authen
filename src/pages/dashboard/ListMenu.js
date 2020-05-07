import React from "react";
import { Row, Col, Collapse } from "antd";
import WithLayoutDashboard from "../../components/WithLayoutDashboard/WithLayoutDashboard";

import { PRODUCTS } from "../../mocks/products";
const { Panel } = Collapse;

const DAY = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const ItemMenu = ({ content }) => {
  return (
    <Row gutter={[24, 24]}>
      {content.map((item, key) => (
        <Col span="24" key={key}>
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col span={18}>
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <div>Total: {item.total}</div>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

function ListMenu() {
  function callback(key) {
    console.log(key);
  }
  return (
    <Row justify="center" align="middle">
      <Col
        span={20}
        style={{ textAlign: "center", fontSize: 24, padding: "20px 0px" }}
      >
        User manager
      </Col>
      <Col span={20}>
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          {DAY.map((val, key) => {
            return (
              <Panel header={val} key={key + 1}>
                <ItemMenu content={PRODUCTS[val]} />
              </Panel>
            );
          })}
        </Collapse>
      </Col>
    </Row>
  );
}

export default WithLayoutDashboard(ListMenu);
