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
                <h1  className="text-center">测验得分: {this.props.score} / {this.props.outOf} </h1>
                <h4>正确答案</h4>
                <table>
                    <thead>
                        <th width="515px">句子</th>
                        <th>有什么{this.props.quiz}</th>
                    </thead>
                    <tbody>
                        {
                            questions.map((question, index) => {
                                return (
                                    <tr key={index} height="30px"> 
                                        <td>{question}</td>
                                        <td>{answers[index].join(', ').toString()}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                
                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.handleContinue}>更多练习...</button>
                </div>
            </div> 
        );    
    }

}