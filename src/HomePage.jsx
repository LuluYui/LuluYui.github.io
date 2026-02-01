import ExperienceTimeline from './ExperienceTimeline.jsx'
import Footer from './Footer.jsx'
import Education from './Education.jsx'
import './App.css'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import MenuBar from './MenuBar.jsx'
import About from './About.jsx'

function Hero() {
  return (
      <div className="font-creato home bg-[url(/src/assets/images/mountain.jpg)] flex h-dvh flex-col items-center justify-center gap-8 text-start">
          <p className="text-3xl text-shadow-lg text-white"> Hi, I'M CHRIS </p> 
          <p className="font-creato-light text-white text-shadow-lg"> Software Developer & Geomatics Specialist </p>
      </div>
  );
}

function HomePage() {

  return (
    <div className="font-creato h-lvh flex flex-col">
      {/* <Demo />  -- Game or animations of some sort */}
        <MenuBar />
      <div className="relative scroll-smooth flex-grow snap-y snap-proximity overflow-y-auto scrollbar-hidden">
        <div id="home" className="h-dvh snap-start snap-normal ">
          <Hero />
        </div>
        <div id="about" className="min-h-dvh snap-start snap-normal flex items-center justify-center">
          <About />
        </div>
        <div id="skills" className="snap-start snap-normal min-h-dvh flex items-center justify-center py-16 sm:py-24">
          <Skills /> 
        </div>
        <div id="projects" className="snap-start snap-normal min-h-dvh flex items-center justify-center py-16 sm:py-24">
          <Projects /> 
        </div>
          <div id="timeline" className="snap-start snap-normal min-h-dvh flex items-center justify-center py-16 sm:py-24">
          <ExperienceTimeline />
        </div>
        <div id="education" className="snap-start snap-normal min-h-dvh flex items-center justify-center py-16 sm:py-24">
          <Education />
        </div>
        <div id="footer" className="snap-end flex items-center justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
