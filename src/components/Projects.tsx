import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    fullDescription: 'Built a scalable e-commerce platform handling thousands of daily transactions. Implemented real-time inventory tracking, payment processing, and order management.',
    challenge: 'Ensuring real-time inventory accuracy across multiple warehouses while handling high concurrent transactions.',
    solution: 'Implemented event-driven architecture with WebSocket connections and database optimization techniques.',
    demoLink: 'https://demo.example.com',
    repoLink: 'https://github.com/example/project',
    features: ['Real-time inventory', 'Payment processing', 'Order tracking'],
  },
  // Add more projects...
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-[#0D1117] text-[#E6EDF3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden border border-[#30363D] hover:border-[#238636] transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[#E6EDF3] mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#30363D] text-[#E6EDF3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-[#0D1117] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[#E6EDF3] hover:text-[#238636]"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p>{selectedProject.fullDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                    <p>{selectedProject.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Solution</h4>
                    <p>{selectedProject.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc list-inside">
                      {selectedProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#238636] hover:text-[#2ea043]"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.repoLink}
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
        )}
      </div>
    </section>
  );
}