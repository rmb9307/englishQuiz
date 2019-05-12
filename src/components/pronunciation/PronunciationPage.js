'use strict';

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../data/quizQuestions';
import * as quizActions from '../../actions/quizActions';
import _ from 'lodash';
import {alphabet, vowelCombos, consonantCombos} from './constants/letters';

let gridElements = _.chunk(
    [...alphabet, ...vowelCombos, ...consonantCombos],
    4
);
gridElements.forEach((rowContent, index) => {
    gridElements[index] = rowContent.map((cellText, index) => {
        return <td key={index} className="hand-pointer">{cellText}</td>;
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
                <div className="sound-grid-container">
                    <table className="sound-grid">
                        <tbody>
                            {gridElements}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default connect()(PronunciationPage);