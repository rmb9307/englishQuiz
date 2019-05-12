'use strict';

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../data/quizQuestions';
import * as quizActions from '../../actions/quizActions';
import _ from 'lodash';
  
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
    'ou', 'ew', 'au', 'ough',
    'eigh'
];

const consonantCombos = [   // will add more and import from db
    'th', 'sh', 'ph', 'wh',
    'ti', 'ch'
];

let gridElements = _.chunk(
    [...alphabet, ...vowelCombos, ...consonantCombos],
    4
);
gridElements.forEach((rowContent, index) => {
    gridElements[index] = rowContent.map((cellText, index) => {
        return <td key={index}>{cellText}</td>;
    });
});
gridElements = gridElements.map((rowContent, index) => {
    return (
        <tr key={`sound-grid-row-${index}`} className="sound-grid-row">
        {rowContent}
        </tr>
    );
});

class PronunciationPage extends React.Component {
     constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <h1> 发音 </h1>
                <table className="sound-grid">
                    <tbody>
                        {gridElements}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default connect()(PronunciationPage);