import React from 'react'
import {  Switch, Route, useRouteMatch } from "react-router-dom";
import PageEditor from "../informationPage/PageEditor"
export default function Content () {
    const { path } = useRouteMatch();
    return (
        <div className="">
            <Switch>
                <Route exact path={`${path}/info`} ></Route>
                <Route exact path={`${path}/products`}></Route>
                <Route exact path={`${path}/blog`}></Route>
                <Route exact path={`${path}/page/edit`} component={PageEditor}></Route>
                <Route></Route>
            </Switch>
        </div>
    )
}
