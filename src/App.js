import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Quiz from './components/Quiz';

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState({
    acidiNucleici: 5,
    flussoDiInformazioni: 5,
    macromolecole: 5,
    trasportoMembrane: 5,
    membrane: 5,
    organismiViventi: 5,
  });

  const [quizStarted, setQuizStarted] = useState(false);

  // Funzione per aumentare o diminuire il numero di domande per un argomento
  const changeNumberOfQuestions = (subject, operation) => {
    setSelectedQuestions((prevState) => {
      const updatedValue =
        operation === "+" ? prevState[subject] + 1 : prevState[subject] - 1;
      return {
        ...prevState,
        [subject]: Math.max(1, Math.min(updatedValue, 20)), // Limita il valore tra 1 e 20
      };
    });
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <BrowserRouter basename="/testDeploy">
      <div className="container">
        <h1>Quiz di Biologia</h1>

        {!quizStarted ? (
          <div>
            <h2>Seleziona il numero di domande per ogni argomento</h2>
            <form>
              <div className="form-group">
                <label>Acidi Nucleici</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("acidiNucleici", "-")
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="acidiNucleici"
                    value={selectedQuestions.acidiNucleici}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("acidiNucleici", "+")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Flusso di Informazioni</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("flussoDiInformazioni", "-")
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="flussoDiInformazioni"
                    value={selectedQuestions.flussoDiInformazioni}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("flussoDiInformazioni", "+")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Macromolecole</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("macromolecole", "-")
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="macromolecole"
                    value={selectedQuestions.macromolecole}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("macromolecole", "+")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>trasporto Membrane</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("trasportoMembrane", "-")
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="trasportoMembrane"
                    value={selectedQuestions.trasportoMembrane}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("trasportoMembrane", "+")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Membrane</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("membrane", "-")}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="membrane"
                    value={selectedQuestions.membrane}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("membrane", "+")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Organismi Viventi</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("organismiViventi", "-")
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="organismiViventi"
                    value={selectedQuestions.organismiViventi}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      changeNumberOfQuestions("organismiViventi", "+")
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button type="button" onClick={startQuiz}>
                Avvia il Quiz
              </button>
            </form>
          </div>
        ) : (
          <Quiz selectedQuestions={selectedQuestions} resetQuiz={resetQuiz} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
