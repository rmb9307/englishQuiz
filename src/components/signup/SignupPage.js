import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import { createUser } from '../../actions/userActions';


class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(email, password) {
        this.props.dispatch(createUser({email, password}));
    }

    render() {
        return (
            <div>
                <div className="spacer2"/>
                <div className="jumbotron text-center">

                    <h2> 注册 </h2>
                    <form id="signupForm" onSubmit={(event) => {
                            event.preventDefault();
                            this.handleSubmit(event.target.email.value, event.target.password.value);
                            browserHistory.push('/about');
                        }}>
                        {/*Email input*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input placeholder="电子邮件地址" type="text" name="email" id="signupEmail"/>
                            </div>
                        </div>

                        {/*Password input*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input placeholder="密码" type="text" name="password" id="signupPassword"/>
                            </div>
                        </div>

                        {/*Submit button*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input className="btn btn-outline-secondary" type="submit"/>
                            </div>
                        </div>
                    </form>    

                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    signup: PropTypes.func
};

export default connect()(SignupPage);
