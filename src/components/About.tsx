import React from 'react';
import { Code2, Database, Globe } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Globe, items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: Database, items: ['Node.js', 'Python', 'PostgreSQL'] },
  { name: 'Other', icon: Code2, items: ['Git', 'Docker', 'AWS'] },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0D1117] text-[#E6EDF3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg mb-6">
            With over 5 years of experience in full-stack development, I specialize in building
            scalable web applications using modern technologies. My passion lies in creating
            elegant solutions that solve real-world problems.
          </p>
          <p className="text-lg">
            I've worked with startups and enterprise companies, leading teams and delivering
            high-impact projects. I'm constantly learning and exploring new technologies
            to stay at the forefront of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map(({ name, icon: Icon, items }) => (
            <div key={name} className="p-6 rounded-lg border border-[#30363D] hover:border-[#238636] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={24} className="text-[#238636]" />
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#238636] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}