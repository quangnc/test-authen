import React, { useState, useEffect } from "react";
import { Row, Col, Table, Modal, Select } from "antd";
import WithLayoutDashboard from "../../components/WithLayoutDashboard/WithLayoutDashboard";
import "./User.scss";
import { USERS } from "../../mocks/user";
const Role = ["admin", "operator", "user"];
function User() {
  const [listUser, setListUser] = useState([]);
  const [user, setUser] = useState();
  const [isModal, setModal] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    setListUser(USERS);
  }, []);

  const onClickEdit = (record) => {
    setUser(record);
    setRole(record.role);
    setModal(true);
  };

  const handleOk = () => {
    const userNew = listUser.map((item) => {
      if (item.id === user.key) {
        return { ...item, role: role };
      }
      return item;
    });
    setListUser(userNew);
    setModal(false);
  };
  const dataSource = listUser.map((val, key) => ({
    key: val.id,
    name: val.username,
    email: val.email,
    role: val.role,
  }));

  const columns = [
    {
      stt: "key",
      title: "key",
      dataIndex: "key",
      role: "key",
    },
    {
      stt: "name",
      title: "Name",
      dataIndex: "name",
      role: "name",
    },
    {
      stt: "email",
      title: "Email",
      dataIndex: "email",
      role: "email",
    },
    {
      stt: "role",
      title: "Role",
      dataIndex: "role",
      role: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div>
          <span
            style={{ paddingRight: 5 }}
            className="cursor-pointer edit"
            onClick={() => onClickEdit(record)}
          >
            Edit
          </span>
          <span className="cursor-pointer delete">Delete</span>
        </div>
      ),
    },
  ];
  return (
    <Row justify="center" align="middle">
      <Col
        span={20}
        style={{ textAlign: "center", fontSize: 24, padding: "20px 0px" }}
      >
        User manager
      </Col>
      <Col span={20}>
        <Table dataSource={dataSource} columns={columns} />
      </Col>
      {isModal && (
        <Modal
          title="Edit User"
          visible={isModal}
          onOk={handleOk}
          onCancel={() => setModal(false)}
        >
          <Row>
            <Col span={8}>User Name: </Col>
            <Col span={16}>{user.name} </Col>
            <Col span={8}>Email: </Col>
            <Col span={16}>{user.email} </Col>
            <Col span={8}>Role: </Col>
            <Col span={16}>
              <Select
                value={role}
                style={{ width: 120 }}
                onChange={(value) => setRole(value)}
              >
                {Role.map((item, key) => (
                  <Select.Option key={key} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
        </Modal>
      )}
    </Row>
  );
}

export default WithLayoutDashboard(User);
