import { motion } from 'motion/react';
import { useState } from 'react';
import { Terminal, Package, Code2 } from 'lucide-react';

export function SkillsContent() {
  const [activeView, setActiveView] = useState<'imports' | 'terminal' | 'packages'>('imports');

  const skillData = {
    frontend: {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: '#61DAFB' },
        { name: 'TypeScript', level: 90, color: '#3178C6' },
        { name: 'Next.js', level: 85, color: '#000000' },
        { name: 'Tailwind CSS', level: 90, color: '#38BDF8' },
        { name: 'JavaScript', level: 95, color: '#F7DF1E' },
        { name: 'Vue.js', level: 75, color: '#4FC08D' },
        { name: 'Redux', level: 80, color: '#764ABC' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26' },
      ],
    },
    backend: {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: '#339933' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'Express', level: 85, color: '#000000' },
        { name: 'Django', level: 75, color: '#092E20' },
        { name: 'PostgreSQL', level: 80, color: '#4169E1' },
        { name: 'MongoDB', level: 85, color: '#47A248' },
        { name: 'GraphQL', level: 80, color: '#E10098' },
        { name: 'REST APIs', level: 90, color: '#FF6C37' },
      ],
    },
    devops: {
      category: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 85, color: '#2496ED' },
        { name: 'Kubernetes', level: 75, color: '#326CE5' },
        { name: 'AWS', level: 80, color: '#FF9900' },
        { name: 'CI/CD', level: 85, color: '#00C853' },
        { name: 'Git', level: 95, color: '#F05032' },
        { name: 'Linux', level: 85, color: '#FCC624' },
        { name: 'Nginx', level: 75, color: '#009639' },
        { name: 'Jenkins', level: 70, color: '#D24939' },
      ],
    },
  };

  const allSkills = Object.values(skillData).flatMap((cat) => cat.skills);

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="bg-[#1e1e1e] text-gray-600 py-8 px-4 select-none border-r border-[#2d2d2d] text-right font-mono text-sm hidden sm:block">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="leading-7">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl"
        >
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" />
          </div>

          {/* View Switcher */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setActiveView('imports')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                activeView === 'imports'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-[#252526] text-gray-400 hover:text-white'
              }`}
            >
              <Code2 size={16} />
              Imports
            </button>
            <button
              onClick={() => setActiveView('terminal')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                activeView === 'terminal'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'bg-[#252526] text-gray-400 hover:text-white'
              }`}
            >
              <Terminal size={16} />
              Terminal
            </button>
            <button
              onClick={() => setActiveView('packages')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                activeView === 'packages'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-[#252526] text-gray-400 hover:text-white'
              }`}
            >
              <Package size={16} />
              Dependencies
            </button>
          </div>

          {/* Imports View */}
          {activeView === 'imports' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {Object.entries(skillData).map(([key, data], categoryIndex) => (
                <div key={key} className="bg-[#252526] border border-gray-700/50 rounded-lg p-5">
                  <div className="text-green-400 font-mono text-sm mb-4">
                    // {data.category}
                  </div>
                  <div className="space-y-3">
                    {data.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm flex items-center gap-2">
                            <span className="text-purple-400">import</span>
                            <span className="text-yellow-300">{skill.name}</span>
                            <span className="text-purple-400">from</span>
                            <span className="text-green-400">
                              '@skills/{data.category.toLowerCase().replace(/\s/g, '-')}'
                            </span>
                          </div>
                          <span className="text-gray-500 font-mono text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.2, duration: 0.8 }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(to right, ${skill.color}DD, ${skill.color}66)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Terminal View */}
          {activeView === 'terminal' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0C0C0C] border border-green-500/30 rounded-lg p-6 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-500 text-xs">bash - skills</span>
              </div>

              <div className="space-y-2">
                <div className="text-green-400">$ skills --list --verbose</div>
                <div className="text-gray-400 mt-2">
                  <div className="animate-pulse mb-2">Scanning technology stack...</div>
                  <div className="mb-3 text-cyan-400">✓ Found {allSkills.length} skills</div>
                </div>

                {Object.entries(skillData).map(([key, data], catIndex) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: catIndex * 0.2 }}
                    className="mt-4"
                  >
                    <div className="text-purple-400 mb-2">
                      ╭─ {data.category.toUpperCase()}
                    </div>
                    {data.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.2 + skillIndex * 0.05 }}
                        className="ml-4 text-gray-300"
                      >
                        <span className="text-green-400">├─</span> {skill.name}
                        <span className="text-gray-600 ml-2">
                          {'█'.repeat(Math.floor(skill.level / 10))}
                          {'░'.repeat(10 - Math.floor(skill.level / 10))}
                        </span>
                        <span className="text-yellow-400 ml-2 text-xs">{skill.level}%</span>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}

                <div className="text-green-400 mt-6">
                  $ <span className="animate-pulse">_</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Package Dependencies View */}
          {activeView === 'packages' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#252526] border border-blue-500/30 rounded-lg p-6 font-mono text-sm"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
                <span className="text-blue-400">package.json</span>
                <span className="text-gray-500 text-xs">dependencies</span>
              </div>

              <div className="space-y-1">
                <div className="text-yellow-300">{'{'}</div>
                <div className="ml-4 text-cyan-400">"dependencies"<span className="text-white">:</span> {'{'}</div>

                {Object.entries(skillData).map(([key, data], catIndex) => (
                  <div key={key} className="ml-8">
                    <div className="text-gray-500 mt-3 mb-2">// {data.category}</div>
                    {data.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                        className="group hover:bg-[#2a2d2e] px-2 py-1 rounded transition-colors"
                      >
                        <span className="text-green-400">"{skill.name}"</span>
                        <span className="text-white">: </span>
                        <span className="text-orange-400">"^{(skill.level / 10).toFixed(1)}.0"</span>
                        {!(
                          catIndex === Object.keys(skillData).length - 1 &&
                          skillIndex === data.skills.length - 1
                        ) && <span className="text-white">,</span>}
                        <span className="text-gray-600 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          // proficiency: {skill.level}%
                        </span>
                      </motion.div>
                    ))}
                  </div>
                ))}

                <div className="ml-4 text-yellow-300">{'}'}</div>
                <div className="text-yellow-300">{'}'}</div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="text-xs text-gray-500">
                  <span className="text-green-400">✓</span> All dependencies installed
                  <span className="ml-4 text-cyan-400">{allSkills.length} packages</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Stats Summary */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl text-purple-400 mb-1 font-mono">{allSkills.length}</div>
              <div className="text-xs text-gray-400">Total Skills</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl text-green-400 mb-1 font-mono">
                {Object.keys(skillData).length}
              </div>
              <div className="text-xs text-gray-400">Categories</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl text-blue-400 mb-1 font-mono">
                {Math.round(allSkills.reduce((acc, s) => acc + s.level, 0) / allSkills.length)}%
              </div>
              <div className="text-xs text-gray-400">Avg Proficiency</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl text-pink-400 mb-1 font-mono">5+</div>
              <div className="text-xs text-gray-400">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
