import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from "./components/private_route";

const Cart = lazy(() => import("./pages/cart/Cart"));

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const User = lazy(() => import("./pages/dashboard/User"));
const ListMenu = lazy(() => import("./pages/dashboard/ListMenu"));
const Login = lazy(() => import("./components/Pages/Login"));
const Home = lazy(() => import("./pages/home/Home"));
const Page403 = lazy(() => import("./components/Pages/Page403"));
const Page404 = lazy(() => import("./components/Pages/Page404"));
const Page500 = lazy(() => import("./components/Pages/Page500"));

function App() {
  return (
    <Switch>
      <PrivateRoute
        exact
        path="/dashboard"
        name="Dashboard"
        component={Dashboard}
      />
      <PrivateRoute exact path="/user" name="User" component={User} />
      <PrivateRoute exact path="/list-menu" name="User" component={ListMenu} />

      <Route exact path="/" name="Home" component={Home} />
      <Route exact path="/cart" name="Cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route exact path="/403" component={Page403} />
      <Route exact path="/404" component={Page404} />
      <Route exact path="/500" component={Page500} />
      <Redirect from="/" to="/" />
    </Switch>
  );
}

export default App;
