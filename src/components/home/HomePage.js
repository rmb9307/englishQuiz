import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1> Easy 英文欢迎您 !</h1>
                <p> 这是学英文的网站，这里可以找到有用的资源， 英语听力和语法测验， 还有建议提高英语水平。 </p>
                <Link to="about" className="btn btn-primary btn-lg"> 让我们开始吧 </Link>
            </div>
        );
    }
}

export default HomePage;