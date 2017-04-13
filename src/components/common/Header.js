import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">主页</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">练习</Link>
            {" | "}
            <Link to="/login" activeClassName="active">登录</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;