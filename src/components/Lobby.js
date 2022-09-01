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

      <div className="applications">
        <div className="appHeader">
          <h1 className={styles.title}>{i18n.t("lobby.title")}</h1>
          <h2>{i18n.t("lobby.subtitle")}</h2>
        </div>
      </div>
      <div className={styles.appsList}>
        <div className={styles.app}>
          <Link to="/bkg-color-picker">{i18n.t("lobby.apps.bkgColorPicker")}</Link>
        </div>
        <div className={styles.app}>
          <Link to="/guess-the-number">Guess The Number</Link>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
