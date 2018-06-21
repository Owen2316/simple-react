import React from 'react';
import {Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Default} from './Layout';

class App extends React.Component {
    render() {
        return <Switch>
            <Default key="/" exact={true} path="/" component={'home page'}/>
        </Switch>;
    }
}

const mapStateToProps = () => ({});
const matchDispatchToProps = dispatch => ({
    actions: bindActionCreators({}, dispatch)
});
export default connect(mapStateToProps, matchDispatchToProps)(App);
