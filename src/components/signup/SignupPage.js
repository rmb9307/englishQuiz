import React from 'react';
import { browserHistory, Link } from 'react-router';

class SignupPage extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">

                <h2> Signup </h2>
                <form onSubmit={evt => {
                    evt.preventDefault();
                    console.log('signup form submitted');}}>
                    {/*Email input*/}
                    <div className="row">
                        <div className="col-xs-12">
                            <input placeholder="email (电子邮件地址)"/>
                        </div>
                    </div>

                    {/*Password input*/}
                    <div className="row">
                        <div className="col-xs-12">
                             <input placeholder="password (密码)"/>
                        </div>
                    </div>

                    {/*Submit button*/}
                    <div className="row">
                        <div className="col-xs-12">
                            <input className="btn" type="submit"/>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignupPage;