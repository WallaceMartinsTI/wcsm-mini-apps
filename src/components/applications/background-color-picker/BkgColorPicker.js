// CSS
import styles from "./BkgColorPicker.module.css";

// Components
import Header from "../../Header";

// Hooks
import { useState, useEffect } from "react";

// Translate
import { i18n } from "../../LanguageSelect/translate/i18n";

const BkgColorPicker = () => {
  // 48 colors
  const colors = [
    { name: "silver", hex: "#C0C0C0" },
    { name: "gray", hex: "#808080" },
    { name: "red", hex: "#FF0000" },
    { name: "lightSteelBlue", hex: "#B0C4DE" },
    { name: "yellow", hex: "#FFFF00" },
    { name: "SteelBlue", hex: "#4682B4" },
    { name: "skyBlue", hex: "#87CEEB" },
    { name: "deepSkyBlue", hex: "#00BFFF" },
    { name: "royalBlue", hex: "#4169E1" },
    { name: "blue", hex: "#0000FF" },
    { name: "navy", hex: "#000080" },
    { name: "darkSlateBlue", hex: "#483D8B" },
    { name: "aquamarine", hex: "#7FFFD4" },
    { name: "cyan", hex: "#00FFFF" },
    { name: "springGreen", hex: "#00FF7F" },
    { name: "green", hex: "#008000" },
    { name: "lime", hex: "#00FF00" },
    { name: "olive", hex: "#808000" },
    { name: "black", hex: "#000000" },
    { name: "goldenRod", hex: "#DAA520" },
    { name: "sienna", hex: "#A0522D" },
    { name: "rosyBrown", hex: "#BC8F8F" },
    { name: "chocolate", hex: "#D2691E" },
    { name: "wheat", hex: "#F5DEB3" },
    { name: "indigo", hex: "#4B0082" },
    { name: "purple", hex: "#A020F0" },
    { name: "magenta", hex: "#FF00FF" },
    { name: "violet", hex: "#EE82EE" },
    { name: "deepPink", hex: "#FF1493" },
    { name: "pink", hex: "#FFC0CB" },
    { name: "crimson", hex: "#DC143C" },
    { name: "marron", hex: "#800000" },
    { name: "fireBrick", hex: "#B22222" },
    { name: "salmon", hex: "#FA8072" },
    { name: "coral", hex: "#FF7F50" },
    { name: "tomato", hex: "#FF6347" },
    { name: "orangeRed", hex: "#FF4500" },
    { name: "orangeDark", hex: "#FF8C00" },
    { name: "orange", hex: "#FFA500" },
    { name: "gold", hex: "#FFD700" },
    { name: "aliceBlue", hex: "#F0F8FF" },
    { name: "ghostWhite", hex: "#F8F8FF" },
    { name: "snow", hex: "#FFFAFA" },
    { name: "lemonChiffon", hex: "#FFFACD" },
    { name: "lavender", hex: "#E6E6FA" },
    { name: "thistle", hex: "#D8BFD8" },
    { name: "powderBlue", hex: "#B0E0E6" },
    { name: "azure", hex: "#F0FFFF" },
  ];

  const [bkgColor, setBkgColor] = useState();
  const [titleColor, setTitleColor] = useState('');
  const [counter, setCounter] = useState(0);

  const handleBackgroundColor = (color) => {
    setBkgColor(color);
  };

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const randomColor = (colorsList) => {
      let newColor = {
        name: colorsList[counter].name,
        hex: colorsList[counter].hex
      }
      setTitleColor(newColor.hex)
    }

    if (counter === 48) {
      setCounter(prevCounter => prevCounter - 48)
    } else {
      randomColor(colors)
    }
    // eslint-disable-next-line
  }, [counter])

  return (
    <div className="application">
      <header>
        <Header />
      </header>

      <div className="appHeader">
        <h1 className={styles.title}>{i18n.t('bkgColorPicker.title')}</h1>
        <h2 style={{color: titleColor}}>{i18n.t('bkgColorPicker.subtitle')}</h2>
      </div>

      <main
        className={styles.mainSection}
        style={{ backgroundColor: bkgColor }}
      >
        {colors.map((color, index) => (
          <div
            className={styles.colorBlock}
            style={{ backgroundColor: color.hex, boderColor: color.hex }}
            key={index}
            onClick={() => handleBackgroundColor(color.hex)}
          >
            <p className={styles.textInside}>{color.name}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BkgColorPicker;
