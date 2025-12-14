import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-12">
            <span className="text-green-400 font-mono text-2xl mr-4">03.</span>
            <h2 className="text-4xl text-gray-100">Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent ml-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * categoryIndex, duration: 0.5 }}
                className="bg-[#0f0f0f] border border-green-400/20 rounded-lg p-6"
              >
                <h3 className="text-xl text-green-400 mb-6 font-mono">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500 font-mono text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 0.2 * categoryIndex + 0.1 * skillIndex,
                            duration: 1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 bg-[#0f0f0f] border border-green-400/20 rounded-lg p-6"
          >
            <h3 className="text-xl text-green-400 mb-4 font-mono">Also worked with</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'GraphQL',
                'Redux',
                'Jest',
                'Webpack',
                'Redis',
                'Nginx',
                'Linux',
                'Kubernetes',
                'Firebase',
                'REST APIs',
                'WebSockets',
                'Microservices',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + 0.05 * index }}
                  className="px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-lg text-green-400 font-mono text-sm hover:bg-green-400/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
