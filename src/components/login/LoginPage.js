import React from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { getUser, login } from '../../actions/userActions';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(email, password) {
        // call to database--> do email and password match?
        // yes? --> dispatch login, no? --> return error
        this.props.dispatch(getUser({ email, password }));
    }

    render() {
        return (
            <div>
                <div className="spacer2"/>
                <div className="jumbotron text-center">
                    

                    <h2> 登录 </h2>
                    <form id="loginForm" onSubmit={event => {
                        event.preventDefault();
                        this.handleSubmit(event.target.email.value, event.target.password.value);
                        }}>
                        {/*Email input*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input placeholder="电子邮件地址" type="text" name="email" />
                            </div>
                        </div>
                        
                        {/*Password input*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input placeholder="密码" type="password" name="password" />
                            </div>
                        </div>

                        {/*Submit button*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input className="btn" type="submit"/>
                            </div>
                        </div>
                    </form>    

                    <p id="signup-link"><Link to="/signup"> 需要新帐号吗? 注册  </Link></p>

                </div>
            </div>
        );
    }
}

export default connect()(LoginPage);