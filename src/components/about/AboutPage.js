import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../api/quizQuestions';
import * as quizActions from '../../actions/quizActions';

//() => this.props.actions.setQuiz(quizKey)}>{quizKey


const quizKeys = Object.keys(partsOfSpeech);

class AboutPage extends React.Component {
     constructor(props, context) {
        super(props, context);
    }

    
    render() {
        return (
            <div className="text-center">
                <h1>您想学什么?</h1>
                <h4>测试你的语法知识:</h4>
                {quizKeys.map(quizKey => {
                    return (
                       <p key={quizKey}><Link to={'/quiz/' + quizKey} key={quizKey}> {quizKey} </Link></p>
                    );
                })}
            </div>
        );
    }
}



export default AboutPage;
