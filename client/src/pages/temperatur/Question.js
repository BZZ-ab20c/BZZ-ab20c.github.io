 const Questions = [
    {
       "id":1,
       "question":"Was sind gute Wärmeleiter?",
       "options":["Luft","Wasser","Metall","Kunststoff"],
       "answer":"Kunststoff"
    },
    {
       "id":2,
       "question":"Was passiert, wenn Wasser kälter als 0°Celsius wird?",
       "options":["Es wird zu nichts","Es wird zu Wasserdampf","Es wird zu Eis","keine von dem"],
       "answer":"Es wird zu Eis"
    },
    {
       "id":3,
       "question":"Womit kann man Temperaturen genau messen?",
       "options": ["Zentimeter","Thermometer","Thermoskanne","Chronometer"],
       "answer":"Thermometer"
    },
    {
       "id":4,
       "question":"Was geschieht mit Wasserdampf, wenn er abkühlt?",
       "options":["Er improvisiert.","Er pulsiert.","Er kondensiert.","keine von dem",],
       "answer":"Er improvisiert."
    }
 ];

 const getRandomQuestions = (arr, n) => {
    let len = arr.length;
    if (n > len) {
        throw new RangeError(
            "getRandomQuestions: more elements taken than available"
        );
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return (shuffled.slice(0, n));
};

export const rendomQuestion = getRandomQuestions(Questions, 4)