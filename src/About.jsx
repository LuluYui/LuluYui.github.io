import profileIcon from './assets/images/Gibili_personal_icon.png';

const traits = [
  {
    icon: '💻',
    title: 'Passionate Developer',
    description: 'Driven by challenges and a love for building intuitive web & mobile applications from scratch.',
  },
  {
    icon: '🗺️',
    title: 'Analytical Problem-Solver',
    description: 'With a background in Geomatics, I enjoy turning complex spatial data into clear, useful visualizations.',
  },
  {
    icon: '🎸',
    title: 'Creative Explorer',
    description: 'When not coding, I\'m found playing guitar, cooking, or exploring the great outdoors.',
  },
];

const TraitCard = ({ icon, title, description }) => (
  <div className="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
    <div className="text-5xl mb-4" role="img" aria-label={`${title} icon`}>{icon}</div>
    <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">{title}</h3>
    <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
  </div>
);

export default function About() {
  return (
    <div className="font-creato about m-4 md:m-10 max-w-4xl flex flex-col items-center justify-center gap-4 text-center sm:py-24">
      <img id="profile_icon" className="icon h-40 sm:h-52 rounded-full shadow-lg" src={profileIcon} alt="A personal icon of Chris" />
      <h1 className="text-3xl font-bold mt-4">Hi, My Name is Chris</h1>
      <blockquote className="text-justify max-w-xl my-4">
        <p className="italic">Impossible is not a fact. It's an opinion. <br /> Impossible is not a declaration. It's a dare.<br /> Impossible is potential. Impossible is temporary.</p>
        <p className="font-creato-extrabold text-2xl text-right mt-2">Impossible is nothing.</p>
        <footer className="text-right text-sm mt-1">― Muhammad Ali</footer>
      </blockquote>
      <div className="mx-8 my-4 max-w-xl">
        <hr className="border-slate-300 dark:border-slate-700"/>
        <p className="my-4 text-justify"> I am a self-taught developer passionate about creating visually appealing, user-friendly mobile & web applications. I inclined to set myself challenges on learning abstract concepts and knowledge through building new projects and combining my analytical skills on creating useful visualization. I aspired to become a professional engineer to improve human conditions and efficiency in solving problems. When I am not at my desk, I am usually playing guitar, cooking or lost somewhere in the mountains ...</p>
        <hr className="border-slate-300 dark:border-slate-700"/>
      </div>

      <h2 className="mt-8 text-2xl font-bold">TL;DR? Here's a brief summary</h2>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {traits.map(trait => (
          <TraitCard key={trait.title} {...trait} />
        ))}
      </div>
    </div>
  );
}
