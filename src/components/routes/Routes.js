import React from 'react'
import {  Route, Switch } from "react-router";
import BackOffice from "../backoffice/Backoffice"
const Routes = () => {
    return (
        <Switch>
            <Route path="/backoffice" component={BackOffice}></Route>
        </Switch>
    )
}

export default Routes
