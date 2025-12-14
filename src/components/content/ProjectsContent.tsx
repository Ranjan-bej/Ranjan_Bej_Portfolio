import { motion } from 'motion/react';
import { ExternalLink, Github, Folder } from 'lucide-react';

export function ProjectsContent() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment integration, real-time inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team workspaces, and advanced filtering.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool that helps writers create high-quality content with natural language processing.',
      tech: ['Python', 'React', 'TensorFlow', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media managers to track performance across multiple platforms.',
      tech: ['Vue.js', 'Express', 'Redis', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.',
      tech: ['React Native', 'Node.js', 'OpenWeather API'],
      github: 'https://github.com',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Dev Blog Platform',
      description: 'Modern blogging platform for developers with markdown support, syntax highlighting, and SEO optimization.',
      tech: ['Next.js', 'Tailwind', 'MDX', 'Vercel'],
      github: 'https://github.com',
      live: 'https://example.com',
      gradient: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="bg-[#1e1e1e] text-gray-600 py-8 px-4 select-none border-r border-[#2d2d2d] text-right font-mono text-sm">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="leading-7">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#252526] border border-gray-700/50 rounded-lg p-6 hover:border-transparent transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`} />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                      <Folder className="text-white" size={24} />
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-mono px-2 py-1 rounded bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
