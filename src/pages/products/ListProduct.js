import React from "react";
import { Row, Col } from "antd";
import ItemProduct from "./ItemProduct";

const ListProduct = ({ products }) => {
  return (
    <Row gutter={[24, 24]}>
      {products.map((item) => (
        <Col key={item.id} span={6}>
          <ItemProduct product={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ListProduct;
