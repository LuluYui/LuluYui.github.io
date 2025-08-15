// Dynamically import all SVG files from the assets/svgs directory.
// `import.meta.glob` is a Vite feature that handles this.
const skillIcons = import.meta.glob("./assets/svgs/skills/*.svg", { eager: true });

// Create an array of skill objects from the imported files,
// excluding the sun and moon icons used for theme toggling.
const skillsData = Object.entries(skillIcons)
  .filter(([path]) => !path.endsWith("sun.svg") && !path.endsWith("moon.svg"))
  .map(([path, logoUrl]) => {
    // Extract a display name from the file path (e.g., './assets/svgs/react.svg' -> 'React')
    const fileName = path.split("/").pop();
    const name = fileName.split(".")[0];
    const displayName = name.charAt(0).toUpperCase() + name.slice(1);
    return {
      name: displayName,
      logo: logoUrl.default,
      alt: `${displayName} Logo`,
    };
  });

export default function Skills() {
  return (
    <div className="skills w-full max-w-4xl px-4 text-center">
      <h1 className="text-3xl font-bold mb-8">TECHNOLOGIES THAT I'VE WORKED WITH</h1>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
        {skillsData.map((skill) => (
          <img
            key={skill.name}
            className="w-16 transition-all duration-300 grayscale active:grayscale-0 hover:grayscale-0 hover:scale-110"
            src={skill.logo}
            alt={skill.alt}
            title={skill.name}
            onContextMenu={(e) => e.preventDefault()}
          />
        ))}
      </div>
    </div>
  );
}
