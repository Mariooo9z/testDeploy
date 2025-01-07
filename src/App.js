import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';



function App() {
  const [selectedQuestions, setSelectedQuestions] = useState({
    acidiNucleici: 5,
    flussoDiInformazioni: 5,
    macromolecole: 5,
    trasportoMembrane: 5,
    membrane: 5,
    organismiViventi: 5,
    cicloCellulare: 5,         // Nuovo
    lisosomi: 5,               // Nuovo
    viaSecretoria: 5,          // Nuovo
    citoscheletro: 5,          // Nuovo
    miosiMitosi: 5,            // Nuovo
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
              {/* Sezione per Acidi Nucleici */}
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

              {/* Sezione per Flusso di Informazioni */}
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

              {/* Sezione per Macromolecole */}
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

              {/* Sezione per Trasporto Membrane */}
              <div className="form-group">
                <label>Trasporto Membrane</label>
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

              {/* Sezione per Membrane */}
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

              {/* Sezione per Organismi Viventi */}
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

              {/* Nuove sezioni */}
              {/* Sezione per Ciclo Cellulare */}
              <div className="form-group">
                <label>Ciclo Cellulare</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("cicloCellulare", "-")}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="cicloCellulare"
                    value={selectedQuestions.cicloCellulare}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("cicloCellulare", "+")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sezione per Lisosomi */}
              <div className="form-group">
                <label>Lisosomi</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("lisosomi", "-")}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="lisosomi"
                    value={selectedQuestions.lisosomi}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("lisosomi", "+")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sezione per Via Secretoria */}
              <div className="form-group">
                <label>Via Secretoria</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("viaSecretoria", "-")}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="viaSecretoria"
                    value={selectedQuestions.viaSecretoria}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("viaSecretoria", "+")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sezione per Citoscheletro */}
              <div className="form-group">
                <label>Citoscheletro</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("citoscheletro", "-")}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="citoscheletro"
                    value={selectedQuestions.citoscheletro}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("citoscheletro", "+")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sezione per Miosi/Mitosi */}
              <div className="form-group">
                <label>Miosi/Mitosi</label>
                <div className="input-group">
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("miosiMitosi", "-")}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="miosiMitosi"
                    value={selectedQuestions.miosiMitosi}
                    readOnly
                  />
                  <button
                    type="button"
                    className="button-small"
                    onClick={() => changeNumberOfQuestions("miosiMitosi", "+")}
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
