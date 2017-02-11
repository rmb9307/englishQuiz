
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
    
    componentDidMount() { /* eslint react/no-did-mount-set-state: 0 */
        this.setState({
            question: this.randomQuestion(),
            questionsAsked: {}
        });
    }

    randomQuestion() {
        //grabs 1 random question from array
        let question = this.props.questions[Math.floor(Math.random() * this.props.questions.length)];
        //if the question has been asked, ask a different one
        console.log('QUESTION: ', question);
        console.log('this.state ----', this.state);
        if(!this.state.questionsAsked[question.id]) { 
            this.setState({
                question: question,
                questionsAsked: Object.assign({}, this.state.questionsAsked, question)
            });
            console.log('this.state.questionsAsked: ', this.state.questionsAsked);
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
                            <p> {this.state.question[Object.keys(this.state.question)[0]].q}</p>
                            <button className="btn btn-primary" onClick={this.randomQuestion}>继续</button>
                        </div>
                    :
                        <p>reached 8, will show quiz results, a link to learn more about that part of speech</p>
                }
                    
                
            </div>
       );
    }
}

NewQuestions.propTypes = {
    questions: PropTypes.array
};


