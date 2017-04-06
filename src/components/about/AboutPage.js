import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../data/quizQuestions';
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
                <h4>测试你的语法知识:</h4> {/* onHover, reveal the parts of speech that link to each quiz*/}
                {quizKeys.map(quizKey => {
                    return (
                       <p key={quizKey}><Link to={'/quiz/' + quizKey} key={quizKey}> {quizKey} </Link></p>
                    );
                })}
                <h4>惯用语法</h4>
                <h4>发音</h4>
                <h4>听力</h4>
                <h4>阅读</h4>
            </div>
        );
    }
}



export default AboutPage;