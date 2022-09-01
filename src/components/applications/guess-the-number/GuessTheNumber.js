// CSS
import styles from "./GuessTheNumber.module.css";

// Hooks
import { useState } from "react";

// Components
import Header from "../../Header";

// Translate
//import { i18n } from "../../LanguageSelect/translate/i18n";

const GuessTheNumber = () => {
  const [gameType, setGameType] = useState("");
  const [hideButton, setHideButton] = useState(false);
  const displayButton = hideButton ? "none" : "flex";

  console.log(gameType);

  const handleSelectChange = (e) => {
    console.log(e.target.value);
  };

  const teste = () => {
    console.log("Clicou");
    setHideButton(true);
  };

  return (
    <div className="application">
      <header>
        <Header />
      </header>

      <div className="appHeader">
        <h1 className={styles.title}>Guess The Number</h1>
        <h2>Let's see if you can pick the correct number!</h2>
      </div>

      <main>
        <div className={styles.gameOptions} style={{ display: displayButton }}>
          <div className={styles.typeContainer}>
            <h3>Select a game type</h3>
            <div className={styles.typeSelect}>
              <div>
                <input
                  type="radio"
                  name="game_type"
                  id="attempts"
                  onChange={() => setGameType("attempts")}
                />
                <label htmlFor="attempts">Number of Attemps</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="game_type"
                  id="lifes"
                  onChange={() => setGameType("lifes")}
                />
                <label htmlFor="lifes">Lifes</label>
              </div>

              <div className={styles.helpContainer}>
                <p>Help</p>
              </div>
            </div>
          </div>

          <div className={styles.selectContainer}>
            <select onChange={handleSelectChange}>
              <option>Select a difficulty</option>
              <option value="easy">Easy (0 - 5)</option>
              <option value="normal">Normal (0 - 10)</option>
              <option value="hard">Hard (0 - 25)</option>
              <option value="very-hard">Very Hard (0 - 50)</option>
              <option value="impossible">Impossible (0 - 100)</option>
            </select>
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={teste}>Salvar</button>
          </div>
        </div>

        <div></div>
      </main>
    </div>
  );
};

export default GuessTheNumber;
