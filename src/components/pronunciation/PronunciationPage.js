'use strict';

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../data/quizQuestions';
import * as quizActions from '../../actions/quizActions';
  
const alphabet = [          // import this from db later on
    'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p',
    'q', 'r', 's', 't',
    'u', 'v', 'w', 'x',
    'y', 'z'
];

const vowelCombos = [       // will add more and import from db
    'oa', 'oe', 'ow', 'ie',
    'ey', 'ay', 'ee', 'oo', 
    'ou', 'ew', 'au', 'ough'
];

const consonantCombos = [   // will add more and import from db
    'th', 'sh', 'ph', 'wh',
    'ti', 'ch'
];

class PronunciationPage extends React.Component {
     constructor(props, context) {
        super(props, context);
    }

    
    render() {
        const alphabetRows = alphabet.forEach(letter => {
            return <td>{letter}</td>;
        });
        const vowelRows = vowelCombos.forEach(combo => {
            return <td>{combo}</td>;
        });
        const consonantRows = consonantCombos.forEach(combo => {
            return <td>{combo}</td>;
        });
        return (
            <div>
                <h1> 听力 </h1>
                <h4> (Add instructions on how to use) </h4>
                <table>
                    <tbody></tbody>
                </table>
            </div>
        );
    }
}


export default connect()(PronunciationPage);