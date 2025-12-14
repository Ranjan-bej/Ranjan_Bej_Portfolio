import { motion } from 'motion/react';
import { Code2, Coffee, Lightbulb, Zap } from 'lucide-react';

export function AboutContent() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Coffee,
      title: 'Problem Solver',
      description: 'Turning complex problems into simple solutions',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always learning new technologies',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized and fast applications',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="bg-[#1e1e1e] text-gray-600 py-8 px-4 select-none border-r border-[#2d2d2d] text-right font-mono text-sm">
        {Array.from({ length: 40 }).map((_, i) => (
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
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>

          {/* Bio */}
          <div className="mb-8 bg-[#252526] border border-purple-500/20 rounded-lg p-6 font-mono text-sm">
            <div className="text-gray-500 mb-2">// Developer.bio</div>
            <p className="text-gray-300 leading-relaxed mb-4">
              - Hello, I am Ranjan Bej 
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
              - 4th Year Undergraduate Student
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
              - Pursuing Btech. in Computer Science
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
              - Iter Bhubaneswar
            </p>
            {/* <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open
              source projects, or sharing my knowledge with the developer community.
            </p> */}
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#252526] border border-gray-700/50 rounded-lg p-6 hover:border-transparent overflow-hidden transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-10`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
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
