'use strict';

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../data/quizQuestions';
import * as quizActions from '../../actions/quizActions';
  
class PronunciationPage extends React.Component {
     constructor(props, context) {
        super(props, context);
    }

    
    render() {
        return (
            <div>
                <h1> Pronunciation Page </h1>
                <h4> Instructions on how to use </h4>
                
            </div>
        );
    }
}


export default connect()(PronunciationPage);