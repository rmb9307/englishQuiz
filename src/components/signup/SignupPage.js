import React from 'react';
import { browserHistory, Link } from 'react-router';

class SignupPage extends React.Component {
    render() {
        console.log('this.props:____', this.props);
        return (
            <div className="jumbotron text-center">

                <h2> Signup </h2>
                <form onSubmit={evt => {
                    evt.preventDefault();
                    console.log('signup form submitted');
                    this.props.createAccount(evt.target.email.value, evt.target.password.value);
                    }}>
                    {/*Email input*/}
                    <div className="row">
                        <div className="col-xs-12">
                            <input placeholder="email (电子邮件地址)" name="email"/>
                        </div>
                    </div>

                    {/*Password input*/}
                    <div className="row">
                        <div className="col-xs-12">
                             <input placeholder="password (密码)" name="password"/>
                        </div>
                    </div>

                    {/*Submit button*/}
                    <div className="row">
                        <div className="col-xs-12">
                            <input className="btn" type="submit"/>
                        </div>
                    </div>
                </form>     {/* Form onSubmit should send create requests to the database with email and password */}

            </div>
        );
    }
}

export default SignupPage;