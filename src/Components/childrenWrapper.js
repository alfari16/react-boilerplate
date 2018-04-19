import React from 'react'
import {Switch,Route} from 'react-router-dom'
import eachList from "./eachList";
import Keterangan from "./Keterangan";

let childrenWrapper = () => {
    return <Switch>
        <Route path="" component={eachList} />
        <Route path="prev" component={Keterangan} />
      </Switch>;
}
export default childrenWrapper