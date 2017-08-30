import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../data/quizQuestions';
import * as quizActions from '../../actions/quizActions';


const quizKeys = Object.keys(partsOfSpeech);

class GrammarTests extends React.Component { 
    constructor(props) {
        super(props);
        this.handleLinkClink = this.handleLinkClink.bind(this);
    }

    handleLinkClink(quiz) {
        this.props.dispatch(quizActions.setQuiz(quiz));
    }

    render() {
        return (
            <div>
                 {
                    this.props.grammarTests.map((testSubj, index) => {
                        return (
                            <span key={index} id={index} 
                            className="grammar-tests"><Link to={`quiz/${index}`} quiz={index} questions={partsOfSpeech[index]} 
                            onClick={()=>{this.handleLinkClink(index)}}
                            > {testSubj} <br/> </Link></span>
                        );
                    })
                }
            </div>
        );
    }
}

const GrammarTestsConnect = connect()(GrammarTests);

class AboutPage extends React.Component {
     constructor(props, context) {
        super(props, context);
        this.state = {
            grammarTestsVisible: false,
            grammarTests: quizKeys
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ grammarTestsVisible: !this.state.grammarTestsVisible });
    }
    
    render() {
        return (
            <div>
                <div className="spacer"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <h1>您想学什么?</h1>
                        </div>
                        <div className="col-sm-3" id="subject-list">
                            <h4 className="practice-topic" onClick={() => this.handleClick()}> 测试你的语法知识  {
                                    this.state.grammarTestsVisible ? 
                                        <span> >> </span>
                                        : null
                                }</h4> 
                            <h4 className="practice-topic">惯用语法</h4>
                            <h4 className="practice-topic">发音</h4>
                            <h4 className="practice-topic">听力</h4>
                            <h4 className="practice-topic">阅读</h4>
                        </div>
                        <div className="col-sm-6" id="grammar-tests">
                            {
                                this.state.grammarTestsVisible ? <GrammarTestsConnect grammarTests={this.state.grammarTests} /> : null
                            }
                        </div>
                    </div>
                
                </div>
            </div>
        );
    }
}


export default connect()(AboutPage);

// Separate AboutPage and GrammarTests into different pages so that I can export default AboutPage and export default CONNECT