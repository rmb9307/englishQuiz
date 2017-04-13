import React, {PropTypes} from 'react';

const QuizList = ({completedQuizzes}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Completed Quizzes</th>
                </tr>
            </thead>
            <tbody>
                {completedQuizzes.map(quiz =>
                    <td key={quiz.name} quiz={quiz.name}/>
                )}
            </tbody>
        </table>
    );
};

QuizList.propTypes = {
    completedQuizzes: PropTypes.array
};

export default QuizList;