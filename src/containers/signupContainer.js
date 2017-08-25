'use strict';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignupPage from '../components/signup/SignupPage';
import { createUser } from '../actions/userActions';


const mapStateToProps = ({user}) => ({
    user
}); 

const mapDispatchToProps = (dispatch) => ({
    signup: (email, password) => 
        dispatch(createUser({email, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);


