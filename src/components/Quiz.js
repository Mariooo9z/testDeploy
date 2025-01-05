
import React, { useState, useEffect } from 'react';
import domandeAcidiNucleici from './domandeAcidiNucleici';  
import domandeFlussoDiInformazioni from './domandeFlussoDiInformazioni'; 
import domandeMacromolecole from './domandeMacromolecole';  
import domandetrasportoMembrane from './domandeTrasportoMembrane'; 
import domandeMembrane from './domandeMembrane'; 
import domandeOrganismiViventi from './domandeOrganismiViventi'; 
import Question from './Question';

const Quiz = ({ selectedQuestions, resetQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Funzione per mescolare un array (utile per mescolare le risposte e le domande)
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Funzione per caricare le domande in base alla selezione dell'utente
  const loadQuizQuestions = () => {
    const selectedAcidiNucleici = shuffleArray(domandeAcidiNucleici).slice(0, selectedQuestions.acidiNucleici);
    const selectedFlussoDiInformazioni = shuffleArray(domandeFlussoDiInformazioni).slice(0, selectedQuestions.flussoDiInformazioni);
    const selectedMacromolecole = shuffleArray(domandeMacromolecole).slice(0, selectedQuestions.macromolecole);
    const selectedtrasportoMembrane = shuffleArray(domandetrasportoMembrane).slice(0, selectedQuestions.trasportoMembrane);
    const selectedMembrane = shuffleArray(domandeMembrane).slice(0, selectedQuestions.membrane);
    const selectedOrganismiViventi = shuffleArray(domandeOrganismiViventi).slice(0, selectedQuestions.organismiViventi);

    // Combina tutte le domande
    const allQuestions = [
      ...selectedAcidiNucleici,
      ...selectedFlussoDiInformazioni,
      ...selectedMacromolecole,
      ...selectedtrasportoMembrane,
      ...selectedMembrane,
      ...selectedOrganismiViventi,
    ];

    // Mescola tutte le domande combinate
    const shuffledQuestions = shuffleArray(allQuestions);

    setQuizQuestions(shuffledQuestions); // Imposta le domande mescolate nello stato
  };

  useEffect(() => {
    loadQuizQuestions(); // Carica le domande al montaggio del componente
  }, [selectedQuestions]); // Ricare le domande ogni volta che cambiano le selezioni

  // Funzione per caricare una nuova domanda
  const loadNewQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    setShuffledOptions(shuffleArray([...currentQuestion.options])); // Mescola le opzioni di risposta
    setSelectedAnswer(null); // Resetta la risposta selezionata
  };

  useEffect(() => {
    if (quizQuestions.length > 0) {
      loadNewQuestion(); // Carica la prima domanda
    }
  }, [quizQuestions]);

  useEffect(() => {
    if (currentQuestionIndex < quizQuestions.length) {
      loadNewQuestion(); // Carica una nuova domanda ogni volta che l'indice cambia
    }
  }, [currentQuestionIndex, quizQuestions]);

  // Funzione per gestire la selezione della risposta
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    // Passa alla prossima domanda
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);  // Imposta il quiz come finito
      }
    }, 1000);
  };

  // Funzione per ripetere il quiz
  const restartQuiz = () => {
    setQuizFinished(false);
    setScore(0);
    setIncorrectAnswers(0);
    setCurrentQuestionIndex(0);
    loadQuizQuestions(); // Ricarica le domande
  };

  return (
    <div>
      {quizFinished ? (
        <div>
          <p>Quiz finito! Hai ottenuto <b>{score}</b> risposte corrette su <b>{quizQuestions.length}</b>.</p>
          <p className='quizP2'>Risposte sbagliate: {incorrectAnswers}</p>
          <button onClick={restartQuiz}>Ripeti il quiz</button>
          <button onClick={resetQuiz}>Cambia numero di domande</button> {/* Pulsante per resettare */}
        </div>
      ) : (
        <div>
          {quizQuestions.length === 0 ? (
            <p>Caricamento quiz...</p>
          ) : (
            <div>
              <p className='quizP1'>Domanda {currentQuestionIndex + 1} su {quizQuestions.length}</p>
              <Question
                question={quizQuestions[currentQuestionIndex].question}
                options={shuffledOptions}
                selectedAnswer={selectedAnswer}
                correctAnswer={quizQuestions[currentQuestionIndex].correctAnswer}
                onAnswerSelect={handleAnswer}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
