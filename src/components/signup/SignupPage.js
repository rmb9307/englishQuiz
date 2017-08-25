import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import colors from 'colors';
import { createUser } from '../../actions/userActions';


class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(email, password) {
        this.props.dispatch(createUser(email, password));
    }
    render() {
        return (
            <div>
                <div className="spacer2"/>
                <div className="jumbotron text-center">

                    <h2> 注册 </h2>
                    <form onSubmit={this.handleSubmit()}>
                        {/*Email input*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input placeholder="电子邮件地址" name="email"/>
                            </div>
                        </div>

                        {/*Password input*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input placeholder="密码" name="password"/>
                            </div>
                        </div>

                        {/*Submit button*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input className="btn btn-outline-secondary" type="submit"/>
                            </div>
                        </div>
                    </form>     {/* Form onSubmit should send create requests to the database with email and password */}

                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    signup: PropTypes.func
};

export default connect()(SignupPage);


// {evt => {
//     evt.preventDefault();
//     console.log('signup form submitted');
//     console.log('this.props.signup: ', this.props.signup);
//     this.props.signup(evt.target.email.value, evt.target.password.value);
// }