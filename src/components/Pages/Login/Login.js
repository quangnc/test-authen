import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Row, Col, notification } from "antd";

import { USERS } from "../../../mocks/user";
import Session from "../../../utils/Session";
import history from "../../../utils/history";
import "./Login.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [isLogged, setLogged] = useState(
    sessionStorage.getItem("logged") || false
  );
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Login Error",
      description: "",
    });
  };

  const onFinish = (values) => {
    setLoading(true);

    const checkInData = USERS.find(
      (user) =>
        user.email === values.username || user.username === values.username
    );
    if (checkInData) {
      setLogged(true);
      sessionStorage.setItem("logged", true);
      const dataSession = {
        ...checkInData,
        remember: values.remember,
      };
      Session.set(dataSession);
      setLoading(false);
    } else {
      openNotificationWithIcon("error");
      setLoading(false);
      Session.remove();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged]);

  return (
    <Row justify="space-around" align="middle" className="box-login">
      <Col span={8}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
