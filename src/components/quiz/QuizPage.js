import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {partsOfSpeech} from '../../api/quizQuestions';
import NewQuestions from './QuizNewQuestions';

const QuizPage = ({quiz}) => {   
    const questions = partsOfSpeech[quiz];
    return (

        <div>
            <h1>{quiz}</h1>
            <h4>请点击下面句子中的{quiz}:</h4>
            <div height="50px"></div>
            <NewQuestions questions={questions}/>
        </div> 
    );

};

QuizPage.propTypes = {
    quiz: PropTypes.string,
    quizQuestions: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        quiz: ownProps.params.id
    };
}



export default connect(mapStateToProps)(QuizPage);