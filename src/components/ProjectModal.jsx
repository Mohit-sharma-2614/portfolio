import { ExternalLink, Github, X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-[#0D1117] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-[#E6EDF3] hover:text-[#238636]"
            >
              <X size={24} />
            </button>
          </div>
          
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p>{project.fullDescription}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Challenge</h4>
              <p>{project.challenge}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Solution</h4>
              <p>{project.solution}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#238636] hover:text-[#2ea043]"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#238636] hover:text-[#2ea043]"
              >
                <Github size={20} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}