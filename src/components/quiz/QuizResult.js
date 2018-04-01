import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { storeResult } from '../../actions/quizActions';
import axios from 'axios';
// Passed in as props from NewQuestions: score={this.state.score}, outOf={this.state.outOf}, questions={this.props.questions}

class QuizResult extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.storeQuizResult();
    }

    storeQuizResult() {
        const task = this.props.quiz;
        const score = this.props.score;
        const outOf = this.props.outOf;
        console.log('task: ', task, 'score: ', score, 'outOf: ', outOf);
        storeResult( task, score, outOf );
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
                        <tr width="515px"><th>句子</th></tr>
                        <tr><th>有什么{this.props.quiz}</th></tr>
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
                    <Link to="about"><button className="btn btn-primary" onClick={this.handleContinue}>更多练习...</button></Link>
                </div>
            </div> 
        );    
    }
}


export default connect()(QuizResult);