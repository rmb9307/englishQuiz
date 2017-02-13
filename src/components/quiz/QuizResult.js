import React from 'react';

// Passed in as props from NewQuestions: score={this.state.score}, outOf={this.state.outOf}, questions={this.props.questions}


export default class QuizResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let questionsObjects = this.props.questions;
        let questions = [];
        let answers = [];
        for(let i = 0; i < questionsObjects.length; i++) {
            questions.push(questionsObjects[i][i].q);
            answers.push(questionsObjects[i][i].a);
        }
        return (
            <div>
                <h1>测验得分: {this.props.score} / {this.props.outOf} </h1>
                <p>正确答案</p>
                <table>
                    
                    <tbody>
                        {
                            questions.map((question, index) => {
                                return (
                                    <tr key={index}> 
                                        <td>{question}</td>
                                        <td>{answers[index].join(', ').toString()}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                
                <p> To learn more, click links </p>
            </div> 
        );    
    }

}