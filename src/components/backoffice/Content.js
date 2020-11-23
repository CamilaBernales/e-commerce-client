import React from 'react'
import {  Switch, Route, useRouteMatch } from "react-router-dom";
export default function Content () {
    const { path } = useRouteMatch();
    return (
        <div className="">
            <Switch>
                <Route exact path={`${path}/info`} ></Route>
                <Route exact path={`${path}/products`}></Route>
                <Route exact path={`${path}/blog`}></Route>
                <Route></Route>
            </Switch>
        </div>
    )
}
