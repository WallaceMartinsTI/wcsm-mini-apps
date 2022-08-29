import Header from "./Header";
import styles from "./Lobby.module.css";
import "../index.css";

import { Link } from "react-router-dom";

import { i18n } from "../components/LanguageSelect/translate/i18n";

const Lobby = () => {
  //const appsList = []

  return (
    <div className={styles.lobby}>
      <header>
        <Header />
      </header>

      <main className="applications">
        <div className="appHeader">
          <h1 className={styles.title}>{i18n.t("lobby.title")}</h1>
          <h2>{i18n.t("lobby.subtitle")}</h2>
        </div>
        <Link to="/bkg-color-picker">Gerenciador de Cor de Fundo</Link>
      </main>
    </div>
  );
};

export default Lobby;
