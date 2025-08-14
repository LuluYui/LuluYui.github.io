import PolyU_Logo from './assets/svgs/PolyU-Logo.svg'
import ExperienceTimeline from './ExperienceTimeline.jsx'
import Footer from './Footer.jsx'
import './App.css'
import Skills from './Skills.jsx'
import MenuBar from './MenuBar.jsx'
import About from './About.jsx'

function Home() {
  return (

      <div className="font-creato home flex h-dvh flex-col items-center justify-center gap-8 text-start">
          <p className="text-3xl text-shadow-lg text-white"> Hi, I'M CHRIS </p> 
          <p className="font-creato-light text-white text-shadow-lg"> Software Developer & Geomatics Specialist </p>
      </div>
  );
}


function Education() {
  return(
    <div className="container font-creato">
      <h1 className="text-4xl font-bold py-3">Education</h1>
      <hr />
      <img className="h-18" src={PolyU_Logo} alt="HKPolyU Logo"/> 
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
      <div className="relative scroll-smooth flex-grow snap-y snap-proximity overflow-y-auto scrollbar-hidden">
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
