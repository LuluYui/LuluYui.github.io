import reactLogo from "./assets/svgs/react.svg";
import html5 from "./assets/svgs/HTML5.svg";
import python from "./assets/svgs/python.svg";

const skillsData = [
  { name: "HTML5", logo: html5, alt: "HTML5 Logo", background: "yellow"},
  { name: "Python", logo: python, alt: "Python Logo" },
  { name: "React", logo: reactLogo, alt: "React Logo" },
];

export default function Skills() {
  return (
    <div className="skills text-center">
      <h1 className="text-3xl font-bold mb-8">SOME TECHNOLOGIES I'VE WORKED WITH</h1>
      <div className="flex justify-center gap-10">
        {skillsData.map((skill) => (
          <img
            key={skill.name}
            className="w-16 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
            src={skill.logo}
            alt={skill.alt}
            title={skill.name}
          />
        ))}
      </div>
    </div>
  );
}