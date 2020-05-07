import React, { memo } from "react";

import { Row, Col } from "antd";
const Header = () => {
  return (
    <Row className="header-box" justify="space-around" align="middle">
      <Col span={4} style={{ textAlign: "center" }}>
        Dashboard
      </Col>
    </Row>
  );
};
export default memo(Header);
