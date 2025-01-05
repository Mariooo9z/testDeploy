import React from 'react';

const Question = ({ question, options, selectedAnswer, correctAnswer, onAnswerSelect }) => {
  return (
    <div>
      <p className='quizP2'>{question}</p>
      <div>
        {options.map((option, index) => {
          // Determina il colore di sfondo per ogni opzione
          let backgroundColor = '';
          if (selectedAnswer) {
            if (option === correctAnswer) {
              backgroundColor = 'green'; // Risposta corretta
            } else if (option === selectedAnswer) {
              backgroundColor = 'red'; // Risposta sbagliata
            }
          }

          return (
            <button
              key={index}
              onClick={() => onAnswerSelect(option)}
              disabled={selectedAnswer !== null}  // Disabilita il pulsante dopo che è stata selezionata una risposta
              style={{ backgroundColor }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
