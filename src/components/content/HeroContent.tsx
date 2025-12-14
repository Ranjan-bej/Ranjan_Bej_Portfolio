import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Terminal, Download, ExternalLink } from 'lucide-react';

export function HeroContent() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack',
    'Frontend',
    'Backend',
    'DevOps'
  ];
  
  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="bg-[#1e1e1e] text-gray-600 py-8 px-4 select-none border-r border-[#2d2d2d] text-right font-mono text-sm hidden sm:block">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="leading-7">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Code Content */}
      <div className="flex-1 p-4 sm:p-8 overflow-y-auto font-mono text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Import Statements */}
          <div className="mb-8">
            <p className="leading-7">
              <span className="text-purple-400">import</span> <span className="text-yellow-300">React</span>{' '}
              <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;
            </p>
            <p className="leading-7">
              <span className="text-purple-400">import</span> {'{ '}
              <span className="text-yellow-300">Developer</span>, <span className="text-yellow-300">Skills</span>, <span className="text-yellow-300">Passion</span> {'}'}
              <span className="text-purple-400"> from</span> <span className="text-green-400">'./portfolio'</span>;
            </p>
          </div>

          {/* Component */}
          <div className="mb-8">
            <p className="leading-7">
              <span className="text-purple-400">export default function</span>{' '}
              <span className="text-blue-400">Hero</span>() {'{'}
            </p>

            {/* Variables */}
            <div className="ml-4">
              <p className="leading-7 mt-4">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span> = {'{'}
              </p>
              <p className="leading-7 ml-4">
                <span className="text-cyan-400">name</span>:{' '}
                <span className="text-green-400">"Ranjan Bej"</span>,
              </p>
              <p className="leading-7 ml-4">
                <span className="text-cyan-400">role</span>:{' '}
                <span className="text-green-400">"{displayedText}"</span>
                <span className="animate-pulse">_</span>,
              </p>
              <p className="leading-7 ml-4">
                <span className="text-cyan-400">location</span>:{' '}
                <span className="text-green-400">"Jamshedpur, Jharkhand"</span>,
              </p>
             
              <p className="leading-7 ml-4">
                <span className="text-cyan-400">email</span>:{' '}
                <span className="text-green-400">"ranjan.288.bej@gmail.com"</span>,
              </p>
              <p className="leading-7 ml-4">
                <span className="text-cyan-400">available</span>:{' '}
                <span className="text-orange-400">true</span>
              </p>
              <p className="leading-7">{'};'}</p>
            </div>

            {/* Bio Section */}
            <div className="ml-4 mt-6">
              <p className="leading-7">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">bio</span> ={' '}
                <span className="text-green-400">`</span>
              </p>
              <p className="leading-7 ml-4 text-green-400">
                I build exceptional digital experiences with clean,
              </p>
              <p className="leading-7 ml-4 text-green-400">
                maintainable code. Passionate about creating robust
              </p>
              <p className="leading-7 ml-4 text-green-400">
                applications using modern technologies and best practices.
              </p>
              <p className="leading-7 ml-4 text-green-400">
                Always learning, always growing.
              </p>
              <p className="leading-7">
                <span className="text-green-400">`</span>;
              </p>
            </div>

            {/* Skills Array */}
            <div className="ml-4 mt-6">
              <p className="leading-7">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">topSkills</span> = [
              </p>
              <p className="leading-7 ml-4">
                <span className="text-green-400">'React'</span>,{' '}
                <span className="text-green-400">'TypeScript'</span>,{' '}
                <span className="text-green-400">'Node.js'</span>,{' '}
                <span className="text-green-400">'Java'</span>,{' '}
                <span className="text-green-400">'SQL'</span>,{' '}
                <span className="text-green-400">'MongoDB'</span>,{' '}
                <span className="text-green-400">'Python'</span>
              </p>
              <p className="leading-7">];</p>
            </div>

            {/* Social Links */}
            <div className="ml-4 mt-6">
              <p className="leading-7">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">socialLinks</span> = {'{'}
              </p>
              <div className="ml-4 space-y-2 my-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:bg-[#2a2d2e] p-2 rounded transition-colors group"
                >
                  <Github size={20} className="text-purple-400" />
                  <span className="text-cyan-400">github</span>
                  <span className="text-purple-400">:</span>
                  <span className="text-green-400 group-hover:underline flex items-center gap-1">
                    "github.com/Ranjan-Bej"
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:bg-[#2a2d2e] p-2 rounded transition-colors group"
                >
                  <Linkedin size={20} className="text-blue-400" />
                  <span className="text-cyan-400">linkedin</span>
                  <span className="text-purple-400">:</span>
                  <span className="text-green-400 group-hover:underline flex items-center gap-1">
                    "linkedin.com/in/ranjan-bej"
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
                <a
                  href="mailto:john.doe@example.com"
                  className="flex items-center space-x-3 hover:bg-[#2a2d2e] p-2 rounded transition-colors group"
                >
                  <Mail size={20} className="text-pink-400" />
                  <span className="text-cyan-400">email</span>
                  <span className="text-purple-400">:</span>
                  <span className="text-green-400 group-hover:underline">
                    "ranjan.288.bej@gmail.com"
                  </span>
                </a>
              </div>
              <p className="leading-7">{'};'}</p>
            </div>

            {/* Return Statement */}
            <div className="ml-4 mt-6">
              <p className="leading-7">
                <span className="text-purple-400">return</span> (
              </p>
              <div className="ml-4 my-4 p-6 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg">
                <div className="mb-6">
                  <div className="text-sm text-purple-400 mb-2 font-mono">{'<Intro />'}</div>
                  <h2 className="text-3xl md:text-5xl mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Hi, I'm Ranjan Bej 👋
                  </h2>
                  <p className="text-lg md:text-2xl text-gray-300 mb-4">
                    Works On <span className="text-green-400">{displayedText}</span>
                    <span className="animate-pulse">_</span>
                  </p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    I build exceptional digital experiences with clean, maintainable code. 
                    Passionate about creating robust applications using modern technologies and best practices.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2 group">
                      <Terminal className="group-hover:scale-110 transition-transform" size={16} />
                      View My Work
                    </button>
                    <button className="px-6 py-3 bg-[#2a2d2e] border border-purple-500/30 rounded-lg text-gray-300 text-sm font-medium hover:bg-[#323436] hover:border-purple-500/50 transition-all flex items-center gap-2 group">
                      <Download className="group-hover:translate-y-0.5 transition-transform" size={16} />
                      Download CV
                    </button>
                  </div>
                </div>

                
              </div>
              <p className="leading-7 ml-4">);</p>
            </div>

            <p className="leading-7">{'}'}</p>
          </div>

          {/* Comment */}
          <div className="mt-6 text-gray-500">
            <p className="leading-7">// Let's build something amazing together! 🚀</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
