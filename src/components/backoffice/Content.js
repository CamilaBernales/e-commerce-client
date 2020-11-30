import React from 'react'
import {  Switch, Route, useRouteMatch } from "react-router-dom";
import ProductsList from '../products/ProductsList';
import BlogEditor from "../blog/BlogEditor"
export default function Content () {
    const { path } = useRouteMatch();
    return (
        <div className="">
            <Switch>
                <Route exact path={`${path}/info`} ></Route>
                <Route exact path={`${path}/products`} component={ProductsList}></Route>
                <Route exact path={`${path}/blog`} component={BlogEditor}></Route>
                <Route></Route>
            </Switch>
        </div>
    )
}
