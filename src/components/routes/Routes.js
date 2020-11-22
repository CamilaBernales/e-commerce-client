import React from 'react'
import {  Route, Switch } from "react-router";
import App from "../../App"
import Product from "../products/Product"
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Product}></Route>
        </Switch>
    )
}

export default Routes
