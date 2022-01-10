let fragen = [
    {
       "id":1,
       "frage":"Was sind gute Wärmeleiter?",
       "a":"Kunststoff",
       "b":"Wasser",
       "c":"Metall",
       "d":"Luft",
       "antwort":"a"
    },
    {
       "id":2,
       "frage":"Was passiert, wenn Wasser kälter als 0°Celsius wird?",
       "a":"Es wird zu Eis",
       "b":"Es wird zu Wasserdampf",
       "c":"Es wird zu nichts",
       "d":"keine von dem",
       "antwort":"a"
    },
    {
       "id":3,
       "frage":"Womit kann man Temperaturen genau messen?",
       "a":"Zentimeter",
       "b":"Thermometer",
       "c":"Chronometer",
       "d":"Thermoskanne",
       "antwort":"b"
    },
    {
       "id":4,
       "frage":"Was geschieht mit Wasserdampf, wenn er abkühlt?",
       "a":"Er improvisiert.",
       "b":"Er pulsiert.",
       "c":"Er kondensiert.",
       "d":"keine von dem",
       "antwort":"a"
    }
 ];

 const frage = document.getElementById("frage");
 const antworten = Array.from(document.getElementsByClassName("antwort-text"));
 const fragenCounterText = document.getElementById("counter");
 const punkteText = document.getElementById("punkte");

console.log(fragen);
let frageCounter;
let punkte;
let MAX_FRAGEN = 2;

 startGame = () => {
    frageCounter = 0;
    punkte = 0;
    console.log(fragen);
    verfuegabeFragen = getRandomFragen(fragen, MAX_FRAGEN);
    console.log(verfuegabeFragen);
    getNeueFrage();
 }

 const getRandomFragen = (arr , n) => {
     let len = arr.leght;
     if(n > len){
         throw new RangeError(
             "getRandomFragen: mehr ist nicht verfügbar "
         )
     }
     const randomNr = [...arr].sort(() => 0.5 - Math.random());
     
     return (selected = randomNr.slice(0, n));
 };

 const getNeueFrage = () => {
     if (verfuegabeFragen.leght === 0){
        console.log("Quiz des Quizes");
        return
     }
     frageCounter++;
     fragenCounterText.innerText = `${frageCounter}/${MAX_FRAGEN}`;

     currentFrage = verfuegabeFragen[0];
     console.log(currentFrage);
     frage.innerText = currentFrage.frage;

     console.log(antworten);

     antworten.forEach((antwort) => {
        antwort.innerHTML = currentFrage[antwort.dataset['antwort']];
     });

     //verfuegabeFragen.shift();
     //getNeueFrage();
     };

 startGame();