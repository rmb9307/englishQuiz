import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class CurrentUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homePage">
                { this.props.user ? 
                    <p className="small-text"> 您登录为 <Link to="dashboard"> {this.props.user} </Link> </p>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

CurrentUser.propTypes = {
    user: PropTypes.string
};

export default connect(mapStateToProps)(CurrentUser);