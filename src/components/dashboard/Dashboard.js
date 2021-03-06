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
        let name;
        let completeQuizzes = [];
        let quizRows;
        console.log('\n \n this.props: \n', this.props);
        if (this.props.userData) {
            const userData = this.props.userData.userData;
            name = userData.name;
            if (this.props.completeQuizzes) {
                this.props.completeQuizzes.forEach(quiz => {
                    completeQuizzes.push(quiz[0]);
                });
                console.log('\n \n Dashboard render function       --->     completeQuizes: \n \n', completeQuizzes);
                // var Hello = React.createClass({
                //     render: function() {
                //         var names = ['Jake', 'Jon', 'Thruster'];
                //         var namesList = names.map(function(name){
                //                         return <li>{name}</li>;
                //                       })
                
                //         return  <ul>{ namesList }</ul>
                //     }
                // });
                quizRows = completeQuizzes.map(quiz => {
                    return (
                        <tr key={quiz.id}>
                            <td>{quiz.title}</td>
                            <td>{quiz.score}</td>
                            <td>{quiz.outOf}</td>
                        </tr>
                    );
                });
            }
        }
        
        return (
            <div className="container-fluid">
                <div className="spacer2"/>
                <h2><b>帐户: </b>{this.props.user}</h2>
                <p>名称: {name} </p>
                <h4> 您已完成以下测验: </h4>
                <table>
                        <thead>
                            <th>测验</th>
                            <th>分数</th>
                            <th>总分</th>
                        </thead>
                        <tbody>{quizRows}</tbody>
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