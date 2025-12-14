import { motion } from 'motion/react';
import { FileCode, Sparkles, Rocket, Star, Zap } from 'lucide-react';

export function WelcomeContent() {
  return (
    <div className="h-full flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Gradient Logo */}
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FileCode size={50} className="relative text-white" />
              </motion.div>
            </div>
          </div>

          {/* Welcome Text */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
          >
            Welcome to My Portfolio
          </motion.h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-2 mb-5"
          >
            <Sparkles size={16} className="text-yellow-400 animate-pulse" />
            <p className="text-sm md:text-base text-gray-400">
              Interactive Developer Portfolio | VS Code Edition
            </p>
            <Sparkles size={16} className="text-yellow-400 animate-pulse" />
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-3 mb-5">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg p-4 hover:border-purple-500/40 transition-all group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📂</div>
              <h3 className="text-purple-400 mb-1 text-sm flex items-center justify-center gap-1">
                Explore Files
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-gray-400">Navigate through the sidebar</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-lg p-4 hover:border-pink-500/40 transition-all group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-pink-400 mb-1 text-sm flex items-center justify-center gap-1">
                Interactive UI
                <Zap size={14} className="group-hover:rotate-12 transition-transform" />
              </h3>
              <p className="text-xs text-gray-400">Click files to view sections</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 transition-all group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-blue-400 mb-1 text-sm flex items-center justify-center gap-1">
                Modern Design
                <Rocket size={14} className="group-hover:-translate-y-1 transition-transform" />
              </h3>
              <p className="text-xs text-gray-400">Immersive code editor</p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-[#252526] border border-green-400/20 rounded-lg p-4 font-mono text-xs text-left max-w-xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="text-green-400"># Quick Navigation</div>
              <Star size={12} className="text-yellow-400" />
            </div>
            <div className="space-y-1 text-gray-300">
              <p><span className="text-purple-400">const</span> <span className="text-blue-400">sections</span> = [</p>
              <p className="ml-3"><span className="text-yellow-400">'hero.tsx'</span>,        <span className="text-gray-500">// Introduction</span></p>
              <p className="ml-3"><span className="text-yellow-400">'about.tsx'</span>,       <span className="text-gray-500">// About Me</span></p>
              <p className="ml-3"><span className="text-yellow-400">'experience.tsx'</span>,  <span className="text-gray-500">// Work History</span></p>
              <p className="ml-3"><span className="text-yellow-400">'skills.tsx'</span>,      <span className="text-gray-500">// Tech Skills</span></p>
              <p className="ml-3"><span className="text-yellow-400">'projects.tsx'</span>,    <span className="text-gray-500">// Projects</span></p>
              <p className="ml-3"><span className="text-yellow-400">'contact.tsx'</span>      <span className="text-gray-500">// Contact</span></p>
              <p>];</p>
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-gray-500 text-xs font-mono"
          >
            💡 Tip: Use the tabs to navigate between opened files
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ChevronRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}