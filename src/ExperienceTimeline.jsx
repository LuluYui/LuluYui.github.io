import { useEffect, useRef, useState } from 'react';

// Custom hook to detect when an element is in view, triggering the animation once.
const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};

const experiences = [
    {
        company: 'Advanced Resources Limited',
        title: 'Technical Assistant (Contract) - Hong Kong Housing Authority Placement',
        duration: 'Nov 2020 - Dec 2021',
        description: [
          "Streamlined maintenance workflows for Multimedia Interactive Systems, achieving fast defect resolution through improved vendor negotiations.",
          "Authored technical guidelines and maintenance protocol, ensuring operational stability and zero equipment downtime."
        ]
    },
    {
        company: 'Ming Hing Waterworks Engineering Co. Ltd',
        title: 'Meter Works Coordinator - WSD HKSARG Placement',
        duration: 'Nov 2020 - Dec 2021',
        description: [
            "Leveraged ArcGIS Pro and Python to enhance DMA/PMA zonal data accuracy, troubleshooting water leak indicators errors of WSD INMS system.",
            "Developed In-house tools for WebGIS Visualization using Leaflet and OpenStreetMap, drafting presentations and reports."
        ]
    },
    {
        company: 'RaSpect AI',
        title: 'Software Engineering Intern / GIS Analyst',
        duration: 'Nov 2020 - Dec 2021',
        description: [
            "Developed 3D models (Pix4D) for HK Architecture Department’s (ArchD) heritage conservation projects.",
            "Worked on ML pipelines for facade defect detection using Detectron2 and YOLOv3, and managed the drone imagery database.",
            "Implemented CVAT (Docker) for annotation management, accelerating model training cycles."
        ]
    }
];

const TimelineItem = ({ experience, index }) => {
    const [ref, isInView] = useInView({ threshold: 0.1 });

    const animationClasses = `
        transition-all duration-1000 ease-out 
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `;

    return (
        <div ref={ref} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* <!-- Timeline Dot --> */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 bg-slate-50 dark:bg-slate-900 shrink-0 md:order-1 transition-all duration-500 ${isInView ? 'border-blue-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-700'}`}>
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${isInView ? 'bg-blue-500 dark:bg-red-400' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
            </div>

            {/* <!-- Card --> */}
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-900 shadow-lg ${animationClasses}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900 dark:text-slate-50">{experience.company}</div>
                    <time className="font-caveat font-medium text-indigo-500 dark:text-indigo-400 text-sm">{experience.duration}</time>
                </div>
                <div className="text-slate-600 dark:text-slate-400 italic mb-3 text-sm">{experience.title}</div>
                <ul role="list" className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                    {experience.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function ExperienceTimeline() {
    return (
        <div className="font-creato bg-inherit dark:bg-inherit text-slate-900 dark:text-slate-200 px-4 sm:px-6 lg:px-8 py-16 h-full overflow-y-auto">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h1>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}