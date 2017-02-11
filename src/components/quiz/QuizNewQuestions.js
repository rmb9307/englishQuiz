
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
        this.toggleTextColor = this.toggleTextColor.bind(this);
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
        let idNum = Object.keys(question)[0];

        //if the question has been asked, ask a different one
        if(!this.state.questionsAsked[idNum]) { 
            this.setState({
                question: question,
                questionsAsked: Object.assign({}, this.state.questionsAsked, question)
            });
            return question;
        }
        else {
            return this.randomQuestion();
        }
    }

    toggleTextColor(id) {
        if(document.getElementById(id).style.color !== 'blue') {
            document.getElementById(id).style.color = 'blue';
        } else {
            document.getElementById(id).style.color = 'black';
        }
    }

    //---------------
    
    render() {
        

        let idNum = Object.keys(this.state.question)[0];

        return (
            <div className="text-center">
                {
                    Object.keys(this.state.questionsAsked).length <  this.props.questions.length ?
                        <div>
                            <p> {this.state.question[idNum].q.split(" ").map((word, index) => {
                                    return (
                                        <span key={index} id={index} onClick={()=>this.toggleTextColor(index)}>{word + ' '}</span>
                                    );
                                })}</p>
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


