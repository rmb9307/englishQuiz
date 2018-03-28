'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { getUser } from '../../actions/userActions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fetchUser(this.props.user);
    }

    fetchUser(email) {
        this.props.dispatch(getUser(email));
    }

    render() {
        let name, completedQuizzes;
        if (this.props.userData) {
            name = this.props.userData.userData.name;
            completedQuizzes = this.props.userData.userData.completedQuizzes
        }
        
        return (
            <div className="container-fluid">
                <div className="spacer2"/>
                <h2><b>帐户: </b>{this.props.user}</h2>
                <p>名称: {name} </p>
                <h4> 您已完成以下测验: </h4>
                {/*This will be a table populated with quiz names and the user's score*/}
                <table>
                    <tbody>
                        {
                            
                        }
                    </tbody>
                </table>
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