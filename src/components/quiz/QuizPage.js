import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {partsOfSpeech} from '../../data/quizQuestions';
import NewQuestions from './QuizNewQuestions';

const QuizPage = ({quiz}) => {
    const quizKey = Object.keys(partsOfSpeech)[quiz];
    const questions = partsOfSpeech[quizKey];

    return (

        <div>
            <h1 className="text-center">{quizKey}</h1>
            <div height="50px"></div>
            <NewQuestions quiz={quizKey} questions={questions}/>
        </div> 
    );

};

QuizPage.propTypes = {
    quiz: PropTypes.string,
    quizQuestions: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    console.log('ownProps: ', ownProps);
    return {
        quiz: ownProps.routeParams.id
    };
}



export default connect(mapStateToProps)(QuizPage);