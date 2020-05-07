import React from "react";
import { Redirect } from "react-router-dom";
import Session from "../utils/Session";
import permissions from "../configs/permissions";
import Page403 from "../components/Pages/Page403";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    let session = Session.get();
    this.state = {
      hasPermission: this.hasPermission(session),
      session: session,
    };
  }

  hasPermission = (session) => {
    if (!session) return false;
    const userPermissions = session.role;
    let path = this.props.path;
    let hasPermission = false;
    if (
      permissions[path] === undefined ||
      session.role === "admin" ||
      session.role === "operator"
    ) {
      hasPermission = true;
    } else {
      for (let i in userPermissions) {
        if (i.trim() === "") continue;
        if (permissions[path].indexOf(i) > -1) {
          hasPermission = true;
          break;
        }
      }
    }

    return hasPermission;
  };

  render() {
    let self = this;
    if (!sessionStorage.getItem("logged") || !this.state.session) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: self.props.location },
          }}
        />
      );
    } else {
      if (this.state.hasPermission) {
        let Component = this.props.component;
        return <Component session={this.state.session} {...this.props} />;
      } else {
        return <Page403 />;
      }
    }
  }
}

export default PrivateRoute;
