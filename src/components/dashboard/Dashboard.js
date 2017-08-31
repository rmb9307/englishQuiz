
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                Dashboard
            </div>
        );
    }
}


Dashboard.propTypes = {
};


export default connect()(Dashboard);