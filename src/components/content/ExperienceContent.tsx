import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export function ExperienceContent() {
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
      gradient: 'from-purple-500 to-pink-500',
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
      gradient: 'from-blue-500 to-cyan-500',
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
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="bg-[#1e1e1e] text-gray-600 py-8 px-4 select-none border-r border-[#2d2d2d] text-right font-mono text-sm">
        {Array.from({ length: 50 }).map((_, i) => (
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
          className="max-w-4xl"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-green-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-[#1e1e1e]`} />

                {/* Card */}
                <div className="bg-[#252526] border border-gray-700/50 rounded-lg p-6 hover:border-gray-600 transition-all group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity`} />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${exp.gradient} text-white`}>
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start text-sm">
                          <span className={`mr-2 mt-1.5 text-transparent bg-gradient-to-r ${exp.gradient} bg-clip-text`}>▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
