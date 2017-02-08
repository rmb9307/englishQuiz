import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const QuizPage = ({quiz}) => {
    console.log(quiz);
    return (
        <h1>Quiz Page</h1>

    );
};

QuizPage.propTypes = {
    quiz: PropTypes.string,
    quizQuestions: PropTypes.array
};

function mapStateToProps(state) {
    return {
        quiz: state.quiz
    };
}



export default connect(mapStateToProps)(QuizPage);