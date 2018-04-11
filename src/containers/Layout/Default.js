import React from 'react';
import {Route} from 'react-router-dom';

export default class Default extends React.Component {
    render() {
        const {component: Component, ...rest} = this.props;

        return <Route {...rest} render={props =>
            <div>
                <Component {...props}/>
            </div>
        }/>;
    }
}
