import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Folder } from 'lucide-react';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with payment integration, real-time inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, team workspaces, and advanced filtering.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'AI Content Generator',
      description:
        'AI-powered content generation tool that helps writers create high-quality content with natural language processing.',
      tech: ['Python', 'React', 'TensorFlow', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media managers to track performance across multiple platforms.',
      tech: ['Vue.js', 'Express', 'Redis', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Weather Forecast App',
      description:
        'Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.',
      tech: ['React Native', 'Node.js', 'OpenWeather API'],
      github: 'https://github.com',
    },
    {
      title: 'Dev Blog Platform',
      description:
        'Modern blogging platform for developers with markdown support, syntax highlighting, and SEO optimization.',
      tech: ['Next.js', 'Tailwind', 'MDX', 'Vercel'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-12">
            <span className="text-green-400 font-mono text-2xl mr-4">04.</span>
            <h2 className="text-4xl text-gray-100">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent ml-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-[#0f0f0f] border border-green-400/20 rounded-lg p-6 hover:border-green-400/50 transition-all group hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="text-green-400" size={32} />
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-green-400 font-mono text-xs px-2 py-1 bg-green-400/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
