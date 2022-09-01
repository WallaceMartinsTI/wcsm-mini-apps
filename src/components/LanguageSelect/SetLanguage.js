// CSS
import styles from "./SetLanguage.module.css";

// Hooks
import { useEffect, useState } from "react";

// Images
import Brazil from "../../images/countryFlags/brazil.png";
import Usa from "../../images/countryFlags/united-states.png";
import Spain from "../../images/countryFlags/spain.png";
import France from "../../images/countryFlags/france.png";
import German from "../../images/countryFlags/german.png";

// Translate
import { i18n } from "./translate/i18n";

const I18N_STORAGE_KEY = "i18nextLng";

const SetLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  // Captures the value of language selected by user
  const getLanguageValue = (lang) => {
    switch (lang) {
      case "pt-BR":
        // Check if new selectedLanguage is already the selectedLanguage
        if (selectedLanguage === "pt-BR") {
          window.location.reload()
        } else {
          setSelectedLanguage("pt-BR");
        }
        break;
      case "en-US":
        if (selectedLanguage === "en-US") {
          window.location.reload()
        } else {
          setSelectedLanguage("en-US");
        }
        break;
      case "es-ES":
        setSelectedLanguage("es-ES");
        break;
      case "fr-FR":
        setSelectedLanguage("fr-FR");
        break;
      case "de-DE":
        setSelectedLanguage("de-DE");
        break;
      default:
        console.log("Houve algum erro desconhecido.")
        break;
    }
  };

  // Set selected language to localStorage then reload page to apply translations.
  useEffect(() => {
    if (selectedLanguage !== localStorage.getItem(I18N_STORAGE_KEY)) {
      localStorage.setItem(I18N_STORAGE_KEY, selectedLanguage)
      window.location.reload()
    } else {

      //window.location.reload()
    }

  }, [selectedLanguage])

  // Set display none in "Select Language" card.
  let display = sessionStorage.getItem("display")
  const saveSession = () => {
    sessionStorage.setItem("display", "none")
  }

  // When select 

  return (
    <div className={styles.bkgPage} style={{display: display}}>
      <main className={styles.mainContent}>
        <div className={styles.selectLanguages} onClick={saveSession}>
          <p className={styles.title}>Selecione um idioma</p>
          <ul>
            <li onClick={() => getLanguageValue("pt-BR")}>
              <div className={styles.language}>
                <img src={Brazil} alt="brazil flag" />
                <p>{i18n.t("languageSelect.pt")}</p>
              </div>
            </li>

            <li onClick={() => getLanguageValue("en-US")}>
              <div className={styles.language}>
                <img src={Usa} alt="united states flag" />
                <p>{i18n.t("languageSelect.en")}</p>
              </div>
            </li>

            <li onClick={() => getLanguageValue("es-ES")}>
              <div className={styles.language}>
                <img src={Spain} alt="spain flag" />
                <p>{i18n.t("languageSelect.es")}</p>
              </div>
            </li>

            <li onClick={() => getLanguageValue("fr-FR")}>
              <div className={styles.language}>
                <img src={France} alt="france flag" />
                <p>{i18n.t("languageSelect.fr")}</p>
              </div>
            </li>

            <li onClick={() => getLanguageValue("de-DE")}>
              <div className={styles.language}>
                <img src={German} alt="german flag" />
                <p>{i18n.t("languageSelect.de")}</p>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default SetLanguage;
