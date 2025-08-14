import sun from './assets/svgs/sun.svg'
import moon from './assets/svgs/moon.svg'
import { useDarkMode } from './utilities.jsx'

export default function MenuBar() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  // color #1587bd
  return (
    <header className="font-creato sticky top-0 z-50">
      <div className="menu flex justify-between py-1 shadow-xl/5">
        <a className="logo flex py-1 pl-4" href="#home">
          <h1> Chris Yip</h1>
        </a>
        <div className="flex items-center gap-6 text-xl pr-4">
            <button className="btn"> About me </button>
            <button className="btn"> Resume  </button>
            <button className="btn"> Projects </button>
            <button className="btn"> Books </button>
            <button id="dark-mode-btn" className="dark-border flex h-10 w-10 items-center justify-center rounded-full border border-transparent" onClick={toggleDarkMode}>
                <img className="dark-btn h-8 w-8" src={darkMode ? sun : moon} alt="Dark mode toggle icon" />
            </button>
        </div>
      </div>
    </header>
  );
}
