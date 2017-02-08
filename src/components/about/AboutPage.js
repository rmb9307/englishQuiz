import React from 'react';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../api/quizQuestions';
import {setQuiz} from '../../actions/quizActions';

const quizKeys = Object.keys(partsOfSpeech);

class AboutPage extends React.Component {
     constructor(props, context) {
        super(props, context);
        this.displayQuizName = this.displayQuizName.bind(this);
    }
    displayQuizName(quizKey) {
        console.log('QuizKey: ', quizKey);
    }
    render() {
        return (
            <div className="text-center">
                <h1>您想学什么?</h1>
                <h4>测试你的语法知识:</h4>
                {quizKeys.map(quizKey => {
                    return (
                       <p key={quizKey}><Link to="quiz" key={quizKey} onClick={() => this.displayQuizName(quizKey)}>{quizKey} </Link></p>
                    );
                })}
            </div>
        );
    }
}

export default AboutPage;
