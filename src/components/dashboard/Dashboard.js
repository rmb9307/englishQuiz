
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="spacer2"/>
                <h2>帐户: { this.props.user }</h2>
                <h4> 您已完成以下测验: </h4>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

Dashboard.propTypes = {
    user: PropTypes.string
};


export default connect(mapStateToProps)(Dashboard);