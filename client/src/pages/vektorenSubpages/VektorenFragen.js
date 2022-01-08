import React, {useEffect, useState} from "react";
import Frage from "./Frage";
import Vektor from "./Vektor";

const VektorenFragen = () => {
    const questionTypes = [
        {
            typeID: 1,
            type: [
                {
                    name: "Skalarprodukt"
                }
            ],
            result: [
                {
                    name: "Skalarprodukt"
                }
            ],
            resultType: "zahl",
            neededVectors: 2,
            neededScalars: 0,
            negativeAllowed: false,
            allowedOperators: [
                {
                    operator: '*'
                }
            ]
        },
        {
            typeID: 2,
            type: [
                {
                    name: "Kreuzprodukt"
                },
                {
                    name: "Vektorprodukt"
                }
            ],
            result: [
                {
                    name: "Kreuzprodukt"
                },
                {
                    name: "Vektorprodukt"
                }
            ],
            resultType: "zahl",
            neededVectors: 2,
            neededScalars: 0,
            negativeAllowed: false,
            allowedOperators: [
                {
                    operator: '*'
                }
            ]
        },
        {
            typeID: 3,
            type: [
                {
                    name: "Addition"
                },
                {
                    name: "Subtraktion"
                }
            ],
            result: [
                {
                    name: "Summe"
                },
                {
                    name: "Differenz"
                }
            ],
            resultType: "vektor",
            neededVectors: 2,
            neededScalars: 0,
            negativeAllowed: true,
            allowedOperators: [
                {
                    operator: '+'
                },
                {
                    operator: "-"
                }
            ]
        },
        {
            typeID: 4,
            type: [
                {
                    name: "Multiplizieren mit einem Skalar"
                },
                {
                    name: "Dividieren mit einem Skalar"
                }
            ],
            result: [
                {
                    name: "Produkt"
                },
                {
                    name: "Quotient"
                }
            ],
            resultType: "vektor",
            neededVectors: 1,
            neededScalars: 1,
            negativeAllowed: false,
            allowedOperators: [
                {
                    operator: '*'
                },
                {
                    operator: "/"
                }
            ]
        }
    ]

    class VektorNumeral {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }

        get x() {
            return this._x;
        }

        set x(value) {
            this._x = value;
        }

        get y() {
            return this._y;
        }

        set y(value) {
            this._y = value;
        }

        compare(other) {
            return (other.x === this.x && other.y === this.y)
        }

        toHtml() {
            return (<Vektor x={this.x} y={this.y}/>)
        }
    }

    const amountQuestions = 5;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionsDone, setQuestionsDone] = useState(false);
    const [score, setScore] = useState(0);

    const [solution, setSolution] = useState(undefined);
    const [questionType, setQuestionType] = useState('undefined');
    const [resultType, setResultType] = useState('undefined');
    const [operator, setOperator] = useState('undefined');

    const generateQuestion = () => {
        let max = questionTypes.length - 1;
        const questionTypeInfos = questionTypes[getRandomNum(0, max)];
        const index = getRandomNum(0, questionTypeInfos.type.length - 1);

        setQuestionType(questionTypeInfos.type[index]);
        setResultType(questionTypeInfos.result[index]);
        setOperator(questionTypeInfos.allowedOperators[index]);


    }

    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleAnswerOptionClick = (userSolution) => {
        if (resultType === 'vektor') {
            if (userSolution.compare(solution)) {
                setScore(score + 1);
            }
        } else {
            if (solution === userSolution) {
                setScore(score + 1);
            }
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < amountQuestions) {
            setCurrentQuestion(nextQuestion);

            // todo generate new question
        } else {
            setQuestionsDone(true);
        }
    };

    useEffect(() => {
        generateQuestion();
    }, [])

    return (
        <div>
            <div className={"row"}>
                <div className={"col-4"}>
                    <h4>Frage</h4>
                    <p className={"bold"}>{currentQuestion + 1}/{amountQuestions}</p>
                </div>
                <div className={"col-4"}/>
                <div className={"col-4"}>
                    <h4>Punkte</h4>
                    <p className={"bold"}>{score}</p>
                </div>
            </div>
            <div>
                <Frage frage={questionType.name}/>
            </div>
        </div>
    )
}

export default VektorenFragen;