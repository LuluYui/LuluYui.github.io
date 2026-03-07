import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import waterDebrisMd from './projects/WaterDebris.md?raw';
import bimDigitalTwinMd from './projects/BIMDigitalTwin.md?raw';

const projectMarkdown = {
  'WaterDebris': waterDebrisMd,
  'BIMDigitalTwin': bimDigitalTwinMd,
};

function ProjectDetail() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const markdown = projectMarkdown[id];
    if (markdown) {
      const contentWithoutFrontMatter = markdown.replace(/^---[\s\S]*?---\n/, '');
      setContent(contentWithoutFrontMatter);
    } else {
      setContent('# Error\n\nCould not load project: Project not found');
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-[#030202] text-slate-900 dark:text-slate-100 font-creato transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-block mb-8 text-blue-600 dark:text-emerald-400 hover:text-blue-800 dark:hover:text-emerald-300 font-medium transition-colors">
          ← Back to Home
        </Link>
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
      </div>
    </div>
  );
}

export default ProjectDetail;
