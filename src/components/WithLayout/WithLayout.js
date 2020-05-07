import React from "react";
import { Row, Col } from "antd";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { CardProvider } from "./components/CardProvider";

import "./WithLayout.scss";

const WithLayout = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <CardProvider>
          <Row className="full-page">
            <Col span={6}>
              <Sidebar session={this.props.session} />
            </Col>
            <Col span={18} className="app-body">
              <header>
                <Header session={this.props.session} />
              </header>
              <main className="main">
                <div className="main-container">
                  <Component {...this.props} />
                </div>
              </main>
              <footer className="app-footer">
                <Footer />
              </footer>
            </Col>
          </Row>
        </CardProvider>
      );
    }
  };
};

export default WithLayout;
