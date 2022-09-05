// CSS
import styles from "./GuessTheNumber.module.css";

// Hooks
import { useEffect, useState } from "react";

// Components
import Header from "../../Header";

// Translate
//import { i18n } from "../../LanguageSelect/translate/i18n";

const GuessTheNumber = () => {
  const [gameType, setGameType] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const [hideButton, setHideButton] = useState(false);
  const [hideHelp, setHideHelp] = useState(true);
  const [hideGame, setHideGame] = useState(true)

  const displayButton = hideButton ? "none" : "flex";
  const displayHelp = hideHelp ? "none" : "flex";
  const displayGame = hideGame ? "none" : "flex"

  sessionStorage.setItem("numbers", [])
  
  let numbersList = []

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setDifficulty(e.target.value);
  };

  const saveGameSettings = () => {
    console.log("Game type: " + gameType);
    console.log("Difficulty: " + difficulty);
    setHideButton(true);
    
    switch (difficulty) {
      case "easy":
        for (let i = 0; i <= 5; i++) {
          numbersList.push(i);
        }
        break;

      case "normal":
        for (let i = 0; i <= 10; i++) {
          numbersList.push(i);
        }
        break;

      case "hard":
        for (let i = 0; i <= 25; i++) {
          numbersList.push(i);
        }
        break;

      case "very-hard":
        for (let i = 0; i <= 50; i++) {
          numbersList.push(i);
        }
        break;

      case "impossible":
        for (let i = 0; i <= 100; i++) {
          numbersList.push(i);
        }
        break;

      default:
        break;
    }

    setHideGame(false)
    console.log(numbersList)
  };

  const openHelper = () => {
    setHideButton(true);
    setHideHelp(false);
  };

  const closeHelper = () => {
    setHideButton(false);
    setHideHelp(true);
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
        <div
          className={styles.helperContainer}
          style={{ display: displayHelp }}
        >
          <div>
            <p className={styles.helperTitle}>Number of Attempts</p>
            <p>
              In this game mode, you have unlimited chances, and a counter will
              be added, when you hit the number, it will show you how many tries
              you got it right.
            </p>
            <p className={styles.helperTitle}>Lifes</p>
            <p>
              In this game mode, you will have 5 attempts to get it right, each
              time you miss you will lose 1 attempt.
            </p>
            <button onClick={closeHelper}>Close</button>
          </div>
        </div>

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
                <label htmlFor="attempts">Number of Attempts</label>
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

              <div className={styles.helpContainer} onClick={openHelper}>
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
            <button onClick={saveGameSettings}>Salvar</button>
          </div>
        </div>

        <div className={styles.game} style={{ display: displayGame }}>
          <div className={styles.numbers}>
            
          </div>

          <div className={styles.play}>
            <div>Lifes: 3</div>
            <div className={styles.inputs}>
              <input type="text" placeholder="Enter a number" />
              <input type="submit" value="Try" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GuessTheNumber;
