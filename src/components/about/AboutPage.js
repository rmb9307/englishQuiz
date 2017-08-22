import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, browserHistory } from 'react-router';
import { partsOfSpeech } from '../../data/quizQuestions';
import * as quizActions from '../../actions/quizActions';


const quizKeys = Object.keys(partsOfSpeech);

class AboutPage extends React.Component {
     constructor(props, context) {
        super(props, context);
    }

    
    render() {
        return (
            <div>
                <div className="spacer"/>
                <div className="container-fluid"> {/* The main question will be on the left, then a vertical line. On the right side, a list of topics. When you hover on a topic, I will use animation library to reveal sub-topics. */}
                    <div className="row">
                        <div className="col-sm-3">
                            <h1>您想学什么?</h1>
                        </div>
                        <div className="col-sm-9" id="subject-list">
                            <h4 className="practice-topic">测试你的语法知识</h4> 
                            <h4 className="practice-topic">惯用语法</h4>
                            <h4 className="practice-topic">发音</h4>
                            <h4 className="practice-topic">听力</h4>
                            <h4 className="practice-topic">阅读</h4>
                        </div>
                    </div>
                
                </div>
            </div>
        );
    }
}



export default AboutPage;


// {quizKeys.map(quizKey => {
//     return (
//     <p key={quizKey}><Link to={'/quiz/' + quizKey} key={quizKey}> {quizKey} </Link></p>
//     );
// })}