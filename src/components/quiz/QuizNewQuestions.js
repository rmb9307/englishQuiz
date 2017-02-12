
import React, { PropTypes } from 'react';
import QuizResult from './QuizResult';


export default class NewQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            question: '',
            questionsAsked: {},
            clickedWords: []
        };

        this.handleContinue = this.handleContinue.bind(this);
        this.randomQuestion = this.randomQuestion.bind(this);
        this.toggleTextColor = this.toggleTextColor.bind(this);
    }
    
    componentWillMount() { /* eslint react/no-did-mount-set-state: 0 */
        this.setState({
            question: this.randomQuestion(),
            questionsAsked: {}
        });
    }

    handleContinue() {
        
        // let answerKeys = Object.keys(this.props.questions);
        let answers = this.state.question[Object.keys(this.state.question)[0]].a;
        console.log('answers', answers);
        // store info on which answers were clicked
        console.log('this.state.clickedWords', this.state.clickedWords);
        // set state to update score
        // reset the question
        // making sure all words are black again

        this.randomQuestion();
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
        if (document.getElementById(id).style.color === 'blue') {
            let clickedWords = this.state.clickedWords;
            clickedWords.push(document.getElementById(id).innerHTML);
            this.setState({
                clickedWords: clickedWords
            });
        } else if (document.getElementById(id).style.color === 'black') {
            //slice out the word from clickedWords by getElementById
            //(start, deletecount)
            let clickedWords = this.state.clickedWords;
            clickedWords.splice(id, 1);
            this.setState({
                clickedWords: clickedWords
            });
        }
    }

    render() {
        

        let idNum = Object.keys(this.state.question)[0];

        return (
            <div className="text-center">
                {
                    Object.keys(this.state.questionsAsked).length <  this.props.questions.length ?
                        <div>
                            <p> {this.state.question[idNum].q.split(" ").map((word, index) => {
                                    return (
                                        <span key={index} id={index} className="questionWords" onClick={()=>this.toggleTextColor(index)}>{word + ' '}</span>
                                    );
                                })}</p>
                            <button className="btn btn-primary" onClick={this.handleContinue}>继续</button>
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


