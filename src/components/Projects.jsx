import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

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
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}