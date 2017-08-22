import React from 'react';
import { browserHistory, Link } from 'react-router';

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <div className="spacer2"/>
                <div className="jumbotron text-center">
                    

                    <h2> 登录 </h2>
                    <form onSubmit={evt => {
                        evt.preventDefault();
                        console.log('login form submitted');}}>
                        {/*Email input*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input placeholder="电子邮件地址"/>
                            </div>
                        </div>
                        
                        {/*Password input*/}
                        <div className="row">
                            <div className="col-xs-12">
                                <input placeholder="密码"/>
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

export default LoginPage;