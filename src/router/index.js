import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import App from '../containers/App';

class Router extends React.Component {
    render() {
        return <BrowserRouter >
            <Switch>
                <Route key="/" path="/" render={props => <App {...props}/>}></Route>
            </Switch>
        </BrowserRouter>;
    }
}


const mapStateToProps = () => ({});

const matchDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, matchDispatchToProps)(Router);

