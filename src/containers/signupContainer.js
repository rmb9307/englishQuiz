'use strict';

import { connect } from 'react-redux';
import SignupPage from '../components/signup/SignupPage';
import { createAccount } from '../reducers/signupReducer';


const mapStateToProps = () => ({}); 

const mapDispatchToProps = dispatch => ({
    createAccount(email, password){
        dispatch(createAccount(email, password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);