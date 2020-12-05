import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProductsList from "../products/ProductsList";
import OrdersList from "../products/OrdersList";
export default function Content() {
  const { path } = useRouteMatch();
  return (
    <div className="">
      <Switch>
        <Route exact path={`${path}/info`}></Route>
        <Route exact path={`${path}/products`} component={ProductsList}></Route>
        <Route exact path={`${path}/blog`}></Route>
        <Route exact path={`${path}/orders`} component={OrdersList}></Route>

        <Route></Route>
      </Switch>
    </div>
  );
}
