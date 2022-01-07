import {useState} from "react";

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

        compare(other) {
            return (other.x === this.x && other.y === this.y)
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
    }

    const amountQuestions = 5;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionsDone, setQuestionsDone] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (resultType, solution, userSolution) => {
        if (resultType === 'vektor') {
            if(userSolution.compare(solution)) {
                setScore(score + 1);
            }
        } else {
            if(solution === userSolution) {
                setScore(score + 1);
            }
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < amountQuestions) {
            setCurrentQuestion(nextQuestion);


        } else {
            setQuestionsDone(true);
        }
    };

    return (
        <div>Ich bin ne übung lol</div>
    )
}

export default VektorenFragen;