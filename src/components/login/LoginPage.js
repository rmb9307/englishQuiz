import React from 'react';
import { browserHistory, Link } from 'react-router';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">

                <h2> Login (登录) </h2>
                <form onSubmit={evt => {
                    evt.preventDefault();
                    console.log('login form submitted');}}>
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

                <p><Link to="/signup"> Need a new account? Sign up here </Link></p>

            </div>
        );
    }
}

export default LoginPage;