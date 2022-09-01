import styles from './App.module.css';
import Lobby from './components/Lobby';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BkgColorPicker from './components/applications/background-color-picker/BkgColorPicker';
import SetLanguage from './components/LanguageSelect/SetLanguage';
import GuessTheNumber from './components/applications/guess-the-number/GuessTheNumber';

function App() {
  return (
    <>
    <SetLanguage />
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lobby />} />
          <Route path='/bkg-color-picker' element={<BkgColorPicker />} />
          <Route path='/guess-the-number' element={<GuessTheNumber />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
