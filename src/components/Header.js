// CSS
import styles from "./Header.module.css";

// Hooks
import { useEffect, useState } from "react";

// Components
import { Link } from "react-router-dom";

// Images
import Brazil from "../images/countryFlags/brazil.png";
import Usa from "../images/countryFlags/united-states.png";
import Spain from "../images/countryFlags/spain.png";
import France from "../images/countryFlags/france.png";
import German from "../images/countryFlags/german.png";

const Header = () => {
  const [brazil, setBrazil] = useState(false);
  const [usa, setUsa] = useState(false);

  const lang = localStorage.getItem("i18nextLng");
  console.log(lang);

  // Captures the language via localStorage.
  useEffect(() => {
    switch (lang) {
      case "pt-BR":
        setBrazil(true);
        break;
      case "en-US":
        setUsa(true);
        break;
    }
  }, [lang]);

  // Change display of "Select Language" for show it again.
  const changeLanguage = () => {
    sessionStorage.setItem("display", "");
    window.location.reload()
  };

  return (
    <div id="title" className={styles.container}>
      <Link to="/">
        <h1>WCSM | Mini Apps</h1>
      </Link>
      {brazil && (
        <div onClick={() => changeLanguage()} className={styles.flagContainer}>
          <img src={Brazil} alt="brazil flag" />
        </div>
      )}
      {usa && (
        <div onClick={() => changeLanguage()} className={styles.flagContainer}>
          <img src={Usa} alt="usa flag" />
        </div>
      )}
    </div>
  );
};

export default Header;
