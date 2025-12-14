import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Coffee, Lightbulb } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my passion',
    },
    {
      icon: Coffee,
      title: 'Problem Solver',
      description: 'Turning complex problems into simple solutions',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always learning and exploring new technologies',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-12">
            <span className="text-green-400 font-mono text-2xl mr-4">01.</span>
            <h2 className="text-4xl text-gray-100">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent ml-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-[#0f0f0f] border border-green-400/20 rounded-lg p-6 mb-6 font-mono">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-500 text-sm">about.txt</span>
                </div>
                <div className="text-gray-300 text-sm leading-relaxed">
                  <p className="mb-4">
                    <span className="text-green-400">const</span>{' '}
                    <span className="text-blue-400">developer</span> = {'{'}
                  </p>
                  <p className="ml-4 mb-2">
                    <span className="text-purple-400">name</span>:{' '}
                    <span className="text-yellow-400">"John Doe"</span>,
                  </p>
                  <p className="ml-4 mb-2">
                    <span className="text-purple-400">location</span>:{' '}
                    <span className="text-yellow-400">"Your City"</span>,
                  </p>
                  <p className="ml-4 mb-2">
                    <span className="text-purple-400">passion</span>:{' '}
                    <span className="text-yellow-400">"Building amazing things"</span>,
                  </p>
                  <p className="ml-4 mb-4">
                    <span className="text-purple-400">available</span>:{' '}
                    <span className="text-orange-400">true</span>
                  </p>
                  <p>{'}'}</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate developer who loves creating beautiful and functional web applications.
                With several years of experience in the field, I've worked on various projects ranging
                from small business websites to large-scale enterprise applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open
                source projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="bg-[#0f0f0f] border border-green-400/20 rounded-lg p-6 hover:border-green-400/50 transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-400/10 rounded-lg group-hover:bg-green-400/20 transition-colors">
                      <item.icon className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-100 mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
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
