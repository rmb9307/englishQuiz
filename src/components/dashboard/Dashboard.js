'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { getUser } from '../../actions/userActions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('componentWillMount, this.props.user: ', this.props.user);
        this.fetchUser(this.props.user);
    }

    fetchUser(email) {
        const user = this.props.dispatch(getUser(email));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="spacer2"/>
                <h2><b>帐户: </b>{this.props.user }</h2>
                <h4> 您已完成以下测验: </h4>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

Dashboard.propTypes = {
    user: PropTypes.string
};


export default connect(mapStateToProps)(Dashboard);