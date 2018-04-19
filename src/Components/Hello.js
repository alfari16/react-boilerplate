import React,{Fragment} from 'react';
import {Link,withRouter,Route} from 'react-router-dom';
import childrenWrapper from "./childrenWrapper";
import Hello1 from './Hello1'
import {Hello2} from './Hello2'

let Hello = (props) => {
    console.log(props.match)
    const {match:{path}} = props

    return <Fragment>
        <p>This is from hello parent component</p>
        <Link to={path+'/'}>Hello 1</Link>
        <Link to={path+'/plus'}>Hello 2</Link>
        <Route path={path} exact component={Hello1} />
        <Route path={path + "/plus"} component={Hello2} />
      </Fragment>;
};

export default withRouter(Hello);