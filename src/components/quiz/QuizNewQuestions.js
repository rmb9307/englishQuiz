
import React, { PropTypes } from 'react';
import QuizResult from './QuizResult';


export default class NewQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            question: '',
            questionsAsked: {}
        };
        this.randomQuestion = this.randomQuestion.bind(this);
    }
    
    componentDidMount() { 
        this.setState({
            question: this.randomQuestion(),
            questionsAsked: Object.assign({}, this.state.questionsAsked, this.question)
        });
    }

    randomQuestion() {
        //grabs 1 random question from array
        let question = this.props.questions[Math.floor(Math.random() * this.props.questions.length)];
        //if the question has been asked, ask a different one
        if(!this.state.questionsAsked[question.id]) {
            this.setState({questionsAsked: Object.assign({}, this.state.questionsAsked, question)});
            console.log('this.state.question: ', this.state.questionsAsked);
            return question;
        }
        else {
            return this.randomQuestion();
        }
    }

    render() {
        return (
            <div className="text-center">
                {
                    Object.keys(this.state.questionsAsked).length <= 7 ?
                        <div>
                            <p> {this.state.question.id}</p>
                            <button className="btn btn-primary" onClick={this.randomQuestion}>继续</button>
                        </div>
                    :
                        <p> reached 8, will show quiz results, a link to learn more about that part of speech</p>
                }
                    
                
            </div>
       );
    }
}




