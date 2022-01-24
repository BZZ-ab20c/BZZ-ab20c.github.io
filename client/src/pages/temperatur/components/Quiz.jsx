import React, { useState } from 'react';
import { rendomQuestion } from '../../temperatur/Question';
import { Button, Modal } from 'react-bootstrap';




const Quiz = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleSave = () => {
        setShow(false);
        setCurrent(0);
        setAnswers([]);
        setCorrectAns(0);
    };

    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [correctAns, setCorrectAns] = useState(0);
    const Question = rendomQuestion;
    const currentQuestion = Question[current]
    const quesAns = (option) => {

        if (answers.length <= 2) {
            setAnswers([...answers, option]);
            handleResult();
            if (answers.length === 2) {
                setTimeout(() => {
                    setShow(true);

                }, 1000);
            }
            setTimeout(() => {
                setCurrent(answers.length + 1)
            }, 1000);

        } else {
            return;
        }
    }
    const handleResult = () => {

        let count = 0;

        answers.forEach(ans => {

            for (let ques of Question) {
                if (JSON.stringify(ans) === JSON.stringify(ques.answer)) {
                    count++;
                    setCorrectAns(count+1);
                }
                break;
            }


        })

    }
    return (<>
        <section id="quiz" className="quiz">
            <div className="container my-5">
                <div id="intro">
                    <div className="counter">
                        <p className="prefix">Fragen:</p>
                        <h1 id="counter">{current + 1}/3</h1>
                    </div>
                    <div className="score">
                        <p className="prefix">Punkten:</p>
                        <h1 id="score">{correctAns}</h1>
                    </div>
                </div>
                <div className="question-holder row">
                    <div className="col-12">
                        <h1 id="question">{currentQuestion.question}</h1>
                    </div>
                </div>
                {currentQuestion.options.map((option, index) => {
                    const data = answers.find(ans => ans === option)
                    let matchData = false;
                    let unMatchData = false;
                    if (data === currentQuestion.answer) {
                        matchData = true;
                        unMatchData = false;
                    } else {
                        unMatchData = true;
                        matchData = false;
                    }
                    return (

                        <div className="row" key={index}>
                            <div className="col-12 ">
                                <div className="answer-container card" style={data && (matchData ? { 'backgroundColor': 'lightgreen' } : unMatchData ? { 'backgroundColor': 'lightpink' } : {})}>
                                    <p className="answer-prefix">{index + 1}</p>
                                    <p className="answer-text" onClick={() => quesAns(option)}>{option}</p>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>

            <>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're Quiz result is {correctAns}!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Restart Quiz
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </section>
    </>);
};


export default Quiz;
