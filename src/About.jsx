import { useDarkMode } from './utilities.jsx'
import profileIcon from './assets/images/Gibili_personal_icon.png';
import computerMonitorIcon from './assets/images/computer-monitor.png';
import computerScreenLinuxIcon from './assets/images/computer-screen-linux.png';

export default function About() {
  const [darkMode] = useDarkMode();
  
  return (
      <div className="font-creato about flex flex-col items-center justify-center gap-8 text-center py-16 sm:py-24">
        <img id="profile_icon" className="icon h-40 sm:h-52 rounded-4xl" src={profileIcon} alt="A personal icon of Chris" />
        <h1>Hi, My Name is Chris</h1>
          <div className="max-w-2xl px-4">
            <h3> "Impossible is not a fact. It's an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.” </h3>
<p> ― Muhammad Ali </p> <hr/> 
            <p> I am a self-taught developer passionate about creating visually appealing, user-friendly mobile & web applications. I inclined to set myself challenges on learning abstract concepts and knowledge through building new projects and combining my analytical skills on creating useful visualization. I aspired to become a professional engineer to improve human conditions and efficiency in solving problems.</p> 
            <p>When I am not at my desk, I am usually playing guitar, cooking or lost somewhere in the mountains ...</p>
            <hr/>
            <p className="mt-4"> TL:DR ? Here's a brief summaries of me</p> 
            <div className="flex gap-15 bg-slate-400 rounded-4xl m-9 h-54 p-7">
              <div className="flex flex-col justify-center">
                <img className="w-30" src={computerMonitorIcon} alt="linux-inside-computer" />
                <h3> software Engineer </h3>
              </div> 
              <div className="flex flex-col justify-center">
                <img className="w-30" src={computerMonitorIcon} alt="linux-inside-computer" />
                <h3> software Engineer </h3>
              </div> 
              <div className="flex flex-col justify-center">
                <img className="w-30" src={computerMonitorIcon} alt="linux-inside-computer" />
                <h3> software Engineer </h3>
              </div> 
              {/* {darkMode ? 
              <div className="flex flex-col justify-center">
                <img className="w-30" src={computerMonitorIcon} alt="linux-inside-computer" />
                <h3> software Engineer </h3>
              </div> :
                <img src={computerScreenLinuxIcon} alt="linux-inside-computer" />
              } */}
            </div>
          </div>
      </div>
  );
}
