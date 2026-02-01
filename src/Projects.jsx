import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 'WaterDebris',
    title: 'Water Debris Detection',
    description: 'A computer vision project to detect debris in water bodies using drone imagery.',
    image: '/projects/WaterDebris/DJI_20250721174213_0004_1_1.jpg',
    tags: ['Python', 'Computer Vision', 'Deep Learning']
  }
];

export default function Projects() {
  return (
    <div className="w-full max-w-6xl px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-12">FEATURED PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Link 
            to={`/projects/${project.id}`} 
            key={project.id}
            className="group relative bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-emerald-900/10 dark:hover:shadow-emerald-500/10 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 block"
          >
            <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
