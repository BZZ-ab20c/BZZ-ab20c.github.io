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
                    name: "das Skalarprodukt"
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
                    name: "das Kreuzprodukt"
                },
                {
                    name: "das Vektorprodukt"
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
                    name: "die Summe"
                },
                {
                    name: "die Differenz"
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
                    name: "das Produkt"
                },
                {
                    name: "den Quotient"
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
    const [questionText, setQuestionText] = useState('undefined');
    const [resultType, setResultType] = useState('undefined');
    const [simpleNumber, setSimpleNumber] = useState(false);
    const [userSolution, setUserSolution] = useState(-1);

    const [questionPart1, setQuestionPart1] = useState(undefined);
    const [questionPart2, setQuestionPart2] = useState(undefined);
    const [questionPart3, setQuestionPart3] = useState(undefined);

    const [userX, setUserX] = useState(-1);
    const [userY, setUserY] = useState(-1);

    const generateQuestion = () => {
        let max = questionTypes.length - 1;
        const typeInfoQuestion = questionTypes[getRandomNum(0, max)];
        const resultType = typeInfoQuestion.resultType;
        setResultType(resultType);
        const index = getRandomNum(0, typeInfoQuestion.type.length - 1);
        const questionType = typeInfoQuestion.type[index].name;

        setQuestionType(questionType);
        const result = typeInfoQuestion.result[index].name;
        const operator = typeInfoQuestion.allowedOperators[index].operator;
        setQuestionText('Berechnen Sie ' + result + ' (nur die ersten zwei Zahlen nach dem Komma)');

        const min = 1;
        max = 12;
        let x1 = getRandomNum(min, max);
        let y1 = getRandomNum(min, max);
        let x2 = getRandomNum(min, max);
        let y2;

        const amtVectors = typeInfoQuestion.neededVectors;
        if (amtVectors === 2) {
            y2 = getRandomNum(min, max);
        }

        const simpleNumber = resultType === 'zahl';
        setSimpleNumber(simpleNumber);

        switch (operator) {
            case '+': {
                if (!simpleNumber) {
                    setSolution(new VektorNumeral(x1 + x2, y1 + y2))
                }
                break;
            }
            case '-': {
                if (!simpleNumber) {
                    setSolution(new VektorNumeral(x1 - x2, y1 - y2))
                }
                break;
            }
            case '*': {
                if (questionType === 'Kreuzprodukt' || questionType === 'Kreuzprodukt') {
                    setSolution((x1 * y2) - (x2 - y1));
                } else {
                    if (simpleNumber) {
                        setSolution((x1 * x2) + (y1 * y2));
                    } else {
                        setSolution(new VektorNumeral(x1 * x2, y1 * x2));
                    }
                }
                break;
            }
            case '/': {
                setSolution(new VektorNumeral((x1 / x2).toFixed(2), (y1 / x2).toFixed(2)))
                break;
            }
        }

        setQuestionPart1((
            <div className={"col"}>
                <Vektor x={x1} y={y1}/>
            </div>
        ));
        setQuestionPart2((
            <div className={"col centered"}>
                <span className={"centeredChild"}>{operator}</span>
            </div>
        ));
        setQuestionPart3((amtVectors === 2) ? (
            <div className={"col"}>
                <Vektor x={x2} y={y2}/>
            </div>
        ) : (
            <div className={"col centered"}>
                <span className={"centeredChild"}>{x2}</span>
            </div>
        ));
    }

    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setQuestionsDone(false);

        generateQuestion();
    }

    const handleAnswerOptionClick = () => {
        if (!questionsDone) {
            if (resultType === 'vektor') {
                const userVector = new VektorNumeral(+userX, +userY);

                if (userVector.compare(solution)) {
                    setScore(score + 1);
                }
            } else {
                if (solution === +userSolution) {
                    setScore(score + 1);
                }
            }

            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < amountQuestions) {
                setCurrentQuestion(nextQuestion);

                generateQuestion();
            } else {
                setQuestionsDone(true);
            }
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
            {questionsDone ? (
                <div className={"row"}>
                    <div className={"col"}>
                        <h6>Gratulation! Du hast {score} Punkte erreicht!</h6>
                        <button onClick={restartQuiz}>Neustarten</button>
                    </div>
                </div>
            ) : (
                <>
                    <div>
                        <Frage title={questionType.name} question={questionText} questionPart1={questionPart1}
                               questionPart2={questionPart2} questionPart3={questionPart3}/>
                    </div>
                    <div>
                        <h5>Antwort</h5>
                        <div className={"row"}>
                            <div className={"col"}>
                                {simpleNumber ? (
                                    <input onInput={e => setUserSolution(e.target.value)} type={"number"}/>
                                ) : (
                                    <>
                                        <div className={"row"}>
                                            <div className={"col-2"}>
                                                <p>X: </p>
                                            </div>
                                            <div className={"col"}>
                                                <input onInput={e => setUserX(e.target.value)} type={"number"}/>
                                            </div>
                                        </div>
                                        <div className={"row"}>
                                            <div className={"col-2"}>
                                                <p>Y: </p>
                                            </div>
                                            <div className={"col"}>
                                                <input onInput={e => setUserY(e.target.value)} type={"number"}/>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={"col"}>
                                <button onClick={handleAnswerOptionClick}>Überprüfen</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default VektorenFragen;