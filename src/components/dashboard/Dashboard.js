'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import { getQuizzesByUser } from '../../actions/quizActions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fetchUser(this.props.user);
        this.getQuizzes(this.props.user);
    }

    fetchUser(email) {
        this.props.dispatch(getUser(email));
    }

    getQuizzes(email) {
        this.props.dispatch(getQuizzesByUser(email));
    }

    render() {
        let name, completeQuizzes;
        console.log('\n \n this.props: \n', this.props);
        if (this.props.userData) {
            const userData = this.props.userData.userData;
            name = userData.name;
            if (this.props.completeQuizzes) {
                completeQuizzes = this.props.completeQuizzes[0];
                console.log('\n \n Dashboard render function       --->     completeQuizes: \n \n', completeQuizzes);
            }
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
    userData: state.userData,
    completeQuizzes: state.completeQuizzes
});

Dashboard.propTypes = {
    user: PropTypes.string,
    userData: PropTypes.object,
    completeQuizzes: PropTypes.object
};


export default connect(mapStateToProps)(Dashboard);