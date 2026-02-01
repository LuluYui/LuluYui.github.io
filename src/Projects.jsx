import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/projects-index.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        
        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(data.map(p => p.category).filter(Boolean))];
        setCategories(uniqueCategories);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load projects:', err);
        setIsLoading(false);
      });
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  if (isLoading) {
    return <div className="text-center py-20">Loading projects...</div>;
  }

  return (
    <div className="w-full max-w-6xl px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-8">FEATURED PROJECTS</h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link 
            to={`/projects/${project.id}`} 
            key={project.id}
            className="group relative bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-emerald-900/10 dark:hover:shadow-emerald-500/10 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 block flex flex-col h-full"
          >
            <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden bg-gray-200 dark:bg-slate-800">
              {project.coverImage ? (
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <div className="p-6 text-left flex flex-col flex-grow">
              <div className="mb-2 flex justify-between items-start">
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">
                  {project.category}
                </span>
                {project.date && (
                  <span className="text-xs text-gray-400">
                    {new Date(project.date).getFullYear()}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags && project.tags.map((tag) => (
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
