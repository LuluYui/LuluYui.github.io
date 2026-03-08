import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const projectFiles = {
  'WaterDebris': '/projects/WaterDebris.md',
  'BIMDigitalTwin': '/projects/BIMDigitalTwin.md',
};

function ProjectDetail() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filePath = projectFiles[id];
    if (filePath) {
      fetch(filePath)
        .then(res => res.text())
        .then(markdown => {
          const contentWithoutFrontMatter = markdown.replace(/^---[\s\S]*?---\n/, '');
          setContent(contentWithoutFrontMatter);
        })
        .catch(() => {
          setContent('# Error\n\nCould not load project: Project not found');
        })
        .finally(() => setLoading(false));
    } else {
      setContent('# Error\n\nCould not load project: Project not found');
      setLoading(false);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-[#030202] text-slate-900 dark:text-slate-100 font-creato transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-block mb-8 text-blue-600 dark:text-emerald-400 hover:text-blue-800 dark:hover:text-emerald-300 font-medium transition-colors">
          ← Back to Home
        </Link>
        {loading ? (
          <div className="text-center py-20 text-slate-500">Loading...</div>
        ) : (
          <article className="prose prose-blue dark:prose-invert max-w-none bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-2xl shadow-lg dark:shadow-emerald-900/10 border border-slate-200 dark:border-slate-800">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({node, ...props}) => (
                  <div className="my-8">
                    <img {...props} className="rounded-lg shadow-md max-h-[600px] w-auto mx-auto" />
                    {props.title && <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">{props.title}</p>}
                  </div>
                ),
                h6: ({node, ...props}) => (
                  <p {...props} className="text-xs text-slate-500 dark:text-slate-500 mt-2 mb-1" />
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
