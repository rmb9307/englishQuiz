
import React, { PropTypes } from 'react';
import QuizResult from './QuizResult';


export default class NewQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            outOf: 0,
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
        // 1. get the score for previous question
        let answers = this.state.question[Object.keys(this.state.question)[0]].a;
        
        let outOf = this.state.outOf;
        outOf = outOf + answers.length;

        // compare this.state.clickedWords to answers
        let score = this.state.score;
        this.state.clickedWords.forEach((word, index) => {
            word = word.word.replace(/[ ?.,;:]/g, ''); 
            if (answers.indexOf(word) !== -1) {   
                score++;
                answers.splice(answers.indexOf(word), 1);
            }
        });

        // 2. clear the clickedWords from previous question
        let deleteArray = [];
        this.state.clickedWords.forEach((wordObj, index) => { // 'word' parameter looks like {id: 1, word: 'word'}
            deleteArray.push(wordObj);
        });
        for(let i = 0; i < deleteArray.length; i++) {
            this.toggleTextColor(deleteArray[i].id);
        }

        this.setState({
            outOf: outOf, 
            score: score
        }, () => {
            this.randomQuestion();
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

    toggleTextColor(id) {   // changes color to indicate selected, also stores which words are clicked
        if(document.getElementById(id).style.color !== 'blue') {
            document.getElementById(id).style.color = 'blue';
            let clickedWords = this.state.clickedWords; // remove word from this.state.clickedWords
            clickedWords.push({id: id, word: document.getElementById(id).innerHTML});
            this.setState({
                clickedWords: clickedWords
            });
        } else {
            document.getElementById(id).style.color = 'black';
            let clickedWords = this.state.clickedWords; // add word to this.state.clickedWords
            clickedWords.forEach((obj) => {
                if (obj.id === id) {
                    clickedWords.splice(clickedWords.indexOf(obj), 1);
                }
            });
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
                            <h4>请点击下面句子中的{this.props.quiz}:</h4>
                            <p> {this.state.question[idNum].q.split(" ").map((word, index) => {
                                    return (
                                        <span key={index} id={index} className="questionWords" onClick={()=>this.toggleTextColor(index)}>{word + ' '}</span>
                                    );
                                })}</p>
                            <button className="btn btn-primary" onClick={this.handleContinue}>继续</button>
                        </div>
                    :
                        <QuizResult score={this.state.score} outOf={this.state.outOf} questions={this.props.questions}/>
                }
                    
                
            </div>
       );
    }
}

NewQuestions.propTypes = {
    questions: PropTypes.array
};


