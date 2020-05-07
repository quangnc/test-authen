import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import moment from "moment";

import { PRODUCTS } from "../../mocks/products";
import WithLayout from "../../components/WithLayout/WithLayout";
import ListProduct from "../products/ListProduct";

import "./Home.scss";
const Home = () => {
  const [products, setProducts] = useState(null);
  const [date, setDate] = useState(null);
  useEffect(() => {
    const listProduct = PRODUCTS[moment().format("dddd")] || null;
    setProducts(listProduct);
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format("LLLL"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={12}>
          <p className="home-title">Menu {date}</p>
        </Col>
        <Col span={20}>
          {products && products !== null ? (
            <ListProduct products={products} />
          ) : (
            <div>Load more</div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default WithLayout(Home);
