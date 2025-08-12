import { useState, useEffect } from 'react'
import reactLogo from './assets/svgs/react.svg'
import viteLogo from '/vite.svg'
import sun from './assets/svgs/sun.svg'
import moon from './assets/svgs/moon.svg'
import './App.css'

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
      <div className="flex justify-between py-1 shadow-xl/5">
        <a className="flex py-1 pl-4" href="#home">
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

function Skills() {

  return (
    <div className="skill-icon col-xs-3 col-sm-2 col-md-2">
      <img className="img-responsive" src="assets/svgs/html-5-logo-svgrepo-com.svg" alt="HTML5 Logo"/>
    </div>
  );
}

function Experience() {
  /*
    Using Card View to organize these 
    
    Template: 
    <h1> Company Name </h1>
    <h2> Title </h2>
    <p> Duration </p>
    <ul>
      <li> Description </li>
      <li> Description </li>
    </ul>
  */ 
  function Card() {
    return (
      /* TODO */
      <div>
        {/* upper
        lower */}

      </div>

    );
  }

  return (
    <div className="container">
      <h1 className="font-creato py-3 text-4xl font-bold"> Experience </h1>
      <hr />
      
      <h1 className="font-creato p-3 text-2xl mt-4"> Advanced Resources Limited </h1>
      <div className="font-creato flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 gap-2">
        <h2 className="italic"> Technical Assistant (Contract) - Hong Kong Housing Authority Placement</h2>
        <p className="flex-shrink-0"> Nov 2020 - Dec 2021 </p>
      </div>
      <ul role="list" className="font-creato list-disc px-8 marker:text-amber-800 marker:text-2xl">
        <li> Housing Infrastructure & Asset Management: Streamlined maintenance workflows for Multimedia Interactive Systems, achieving fast defect resolution through improved vendor negotiations.</li>
        <li> Compliance & Vendor Coordination: Authored technical guidelines and maintenance protocol as well as Vendor monitoring, ensuring alignment with HA Housing Hub operational stability and zero equipment downtime. </li>
      </ul>

      <h1 className="p-3 text-2xl mt-4"> Ming Hing Waterworks Engineering Co. Ltd </h1>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 gap-2">
        <h2 className="italic"> Meter Works Coordinator - WSD HKSARG Placement	</h2>
        <p className="flex-shrink-0"> Nov 2020 - Dec 2021 </p>
      </div>
      <ul role="list" className="list-disc px-8 marker:text-amber-800 marker:text-2xl">
        <li> Geospatial Data Integration: Leveraged ArcGIS Pro and Python to enhance DMA/PMA zonal data accuracy, troubleshooting various water leak indicators errors of WSD INMS system. </li>
        <li> Software Development : Develop In-house tools for WebGIS Visualization, using leaflet and OpenStreetMap, drafting presentation and reports. </li>
      </ul>

      <h1 className="p-3 text-2xl mt-4"> RaSpect AI </h1>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 gap-2">
        <h2 className="italic"> Software Engineering Intern / GIS Analst </h2>
        <p className="flex-shrink-0"> Nov 2020 - Dec 2021 </p>
      </div>
      <ul role="list" className="list-disc px-8 marker:text-amber-800 marker:text-2xl">
        <li> Photogrammetry : Developed 3D models (Pix4D) for HK Architecture Department’s (ArchD) heritage conservation projects, under PSTS scheme.  </li>
        <li> Machine Learning Pipelines: Training and Inference using fine-tuned Meta Detectron 2 and YOLOV3  models on facade defects detections. Maintaining drone imagery and training labels database. Developing python/bash scripts for different data management automation.  </li>
        <li> Data Annotions : Implemented CVAT (Docker) for annotation management, accelerating model training cycles and management cache database (Redis). </li>
      </ul>

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

function Timeline() {
    return (
	<div>
	    <h1> Hello World </h1>
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
            {/*<Experience />*/}
	    {<Timeline />}
        </div>
        <div className="snap-start snap-normal min-h-dvh flex items-center justify-center py-16 sm:py-24">
          <Education />
        </div>
        <h1> Contact Me </h1>
        <h1> Bottom </h1>
      </div>
    </div>
  )
}

export default App
