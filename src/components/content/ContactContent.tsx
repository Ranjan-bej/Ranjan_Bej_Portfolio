import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm currently available for freelance work and interesting project collaborations.
                Feel free to reach out if you have a project in mind or just want to chat about tech!
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 bg-[#252526] border border-blue-500/20 rounded-lg p-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-[#252526] border border-purple-500/20 rounded-lg p-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-gray-300">Your City, Country</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#252526] border border-green-500/20 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-3">Connect with me</div>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="p-2 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all"
                  >
                    <Mail className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-mono">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#252526] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-mono">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#252526] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-mono">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#252526] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-6 py-3 text-white font-mono flex items-center justify-center space-x-2 hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
