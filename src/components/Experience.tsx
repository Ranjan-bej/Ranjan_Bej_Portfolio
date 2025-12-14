import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartUp Co.',
      period: '2020 - 2022',
      description: [
        'Built responsive web applications using React and Node.js',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Optimized database queries improving performance by 40%',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: [
        'Developed interactive user interfaces for client projects',
        'Maintained and improved existing codebases',
        'Implemented accessibility standards (WCAG 2.1)',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-12">
            <span className="text-green-400 font-mono text-2xl mr-4">02.</span>
            <h2 className="text-4xl text-gray-100">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent ml-8" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-green-400/20 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 -ml-2 bg-green-400 rounded-full border-4 border-[#0a0a0a] hidden md:block" />

                  <div className="md:ml-20 bg-[#0f0f0f] border border-green-400/20 rounded-lg p-6 hover:border-green-400/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl text-gray-100 mb-1">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-green-400">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm mt-2 sm:mt-0">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-green-400 mr-2 mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
