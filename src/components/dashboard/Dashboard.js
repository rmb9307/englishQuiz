'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { getUser } from '../../actions/userActions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWilllMount() {
        console.log('componentWillMount, this.props.user: ', this.props.user);
        this.fetchUser(this.props.user);
    }

    fetchUser(email) {
        this.props.dispatch(getUser(email));
    }

    render() {
        console.log('this.props: ', this.props);
        return (
            <div className="container-fluid">
                <div className="spacer2"/>
                <h2><b>帐户: </b>{this.props.user}</h2>
                <p>名称: {} </p>
                <h4> 您已完成以下测验: </h4>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    userData: state.userData
});

Dashboard.propTypes = {
    user: PropTypes.string,
    userData: PropTypes.object
};


export default connect(mapStateToProps)(Dashboard);