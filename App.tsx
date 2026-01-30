
import React from 'react';
import { PROJECTS, SKILLS } from './constants';
import ProjectCard from './components/ProjectCard';


const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#339933] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#339933] font-mono font-bold">~/</span>
            <span className="text-white font-bold tracking-tight text-sm md:text-base hidden sm:inline">Cristian Carreño - Backend Dev</span>
            <span className="text-white font-bold tracking-tight text-sm sm:hidden">Cristian C.</span>
          </div>
          <div className="flex items-center gap-3 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a href="#projects" className="text-gray-400 hover:text-[#339933] text-sm transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-[#339933] text-sm transition-colors">Stack</a>
            </div>
            <a href="https://drive.google.com/file/d/12Fn0WJpds-G57R9iVwiQSD_-jOaSFpyl/view?usp=drive_link" target="_blank" className="bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded text-[12px] md:text-sm font-semibold hover:bg-gray-200 transition-colors">
              Resume.pdf
            </a>
            <a href="https://github.com/gaaplex" target="_blank" className="bg-[#339933] text-white px-3 py-1.5 md:px-4 md:py-2 rounded text-[12px] md:text-sm font-semibold hover:bg-green-700 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building the <span className="text-[#339933]">Logic</span> that Powers the Web.
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Experienced Backend software engineer with 5+ years working with <span className="text-white font-semibold">Node.js</span>,
            <span className="text-white font-semibold"> JavaScript/TypeScript</span>, PHP (Symfony), Python, and Java, building scalable
            web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-gray-900 border border-gray-800 rounded flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span className="text-xs font-mono text-gray-300">Available for high-stakes projects</span>
            </div>
          </div>
        </div>
      </header>

      {/* Skills / Tech Stack */}
      <section id="skills" className="bg-[#0b0f1a] py-24 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-[#339933]">01.</span> Core Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors group">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest font-mono group-hover:text-[#339933]">{skill.category}</span>
                <p className="text-white font-semibold mt-1">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-[#339933]">02.</span> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} | Cristian Carreño | All rights reserved
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/cycarrenol/" className="text-gray-400 hover:text-[#339933] text-sm">LinkedIn</a>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default App;
