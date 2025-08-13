import { useState, useEffect } from 'react'
import reactLogo from './assets/svgs/react.svg'
import viteLogo from '/vite.svg'
import sun from './assets/svgs/sun.svg'
import moon from './assets/svgs/moon.svg'
import ExperienceTimeline from './ExperienceTimeline.jsx'
import Footer from './Footer.jsx'
import './App.css'
import Skills from './Skills.jsx'

function useDarkMode() {
  // Initialize state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply the class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', darkMode);
    root.style.colorScheme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  // Effect to listen for OS theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Always sync with the system preference. When the system theme changes,
      // we update the state and clear any manual override from localStorage.
      setDarkMode(e.matches);
      localStorage.removeItem('theme');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // When user manually toggles, we save their preference
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  }

  return [darkMode, toggleDarkMode];
}

function MenuBar() {
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

function Home() {
  
  return (

      <div className="font-creato home flex h-dvh flex-col items-center justify-center gap-8 text-start">
          <p className="text-3xl text-shadow-lg text-white"> Hi, I'M CHRIS </p> 
          <p className="font-creato-light text-white text-shadow-lg"> Software Developer & Geomatics Specialist </p>
      </div>
  );
}

function About() {
  
  return (
      <div className="font-creato about flex h-dvh flex-col items-center justify-center gap-8 text-center">
        <h1>Hi, My Name is Chris</h1>
          <div className="max-w-2xl px-4">
            <p> I am a self-taught developer passionate about creating visually appealing, user-friendly mobile & web applications. I'm building my skills by tackling small projects and learning from each challenge.</p> 
            <p className="mt-4"> TL:DR ? Here's a brief summaries of me</p> 
          </div>
      </div>
  );
}


function Education() {
  return(
    <div className="container font-creato">
      <h1 className="text-4xl font-bold py-3">Education</h1>
      <hr />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 gap-2">
        <h1 className="italic text-2xl"> The Hong Kong Polytechnic University</h1>
        <h2 className="flex-shrink-0">Graduated at 30 September 2021 </h2>
      </div>
      <p className="px-1">Bachelor of Science, specialized in Geo-Informatics  (CGPA: 2.84/4.00) </p>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 gap-2 mt-4">
        <h1 className="italic text-2xl">RMIT University, Melbourne, Australia </h1>
        <h2 className="flex-shrink-0"> February - June 2019 </h2>
      </div>
      <p className="px-1"> Study Abroad Program in Surveying and Geospatial Science </p>
    </div>
  );
}

function App() {

  return (
    <div className="font-creato h-dvh flex flex-col">
      {/* <Demo />  -- Game or animations of some sort */}
        <MenuBar />
      <div className="relative scoll-smooth flex-grow snap-y snap-proximity overflow-y-scroll">
        <div id="home" className="h-dvh snap-start snap-normal ">
          <Home />
        </div>
        <div id="about" className="h-dvh snap-start snap-normal ">
          <About />
        </div>
        <div className="snap-start snap-normal min-h-dvh flex items-center justify-center py-16 sm:py-24">
          <Skills /> 
        </div>
        <div className="snap-start snap-normal min-h-dvh flex items-center justify-center py-16 sm:py-24">
          <ExperienceTimeline />
        </div>
        <div className="snap-start snap-normal min-h-dvh flex items-center justify-center py-16 sm:py-24">
          <Education />
        </div>
        <div className="snap-end flex items-center justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
