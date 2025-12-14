import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-12">
            <span className="text-green-400 font-mono text-2xl mr-4">05.</span>
            <h2 className="text-4xl text-gray-100">Get In Touch</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent ml-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="mb-8">
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  I'm currently available for freelance work and interesting project collaborations.
                  If you have a project in mind or just want to chat about tech, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-400/10 border border-green-400/30 rounded-lg">
                    <Mail className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-100 mb-1">Email</h3>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-green-400 hover:underline"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-400/10 border border-green-400/30 rounded-lg">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-100 mb-1">Location</h3>
                    <p className="text-gray-400">Your City, Country</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#0f0f0f] border border-green-400/20 rounded-lg p-6">
                <div className="font-mono text-sm">
                  <p className="text-gray-500 mb-2">// Quick links</p>
                  <p className="text-green-400 mb-1">
                    <span className="text-purple-400">const</span> links = {'{'}
                  </p>
                  <p className="ml-4 text-gray-300">
                    github:{' '}
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:underline"
                    >
                      "github.com/yourusername"
                    </a>
                    ,
                  </p>
                  <p className="ml-4 text-gray-300">
                    linkedin:{' '}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:underline"
                    >
                      "linkedin.com/in/you"
                    </a>
                  </p>
                  <p className="text-green-400">{'}'}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-mono text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0f0f0f] border border-green-400/20 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-mono text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0f0f0f] border border-green-400/20 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-mono text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#0f0f0f] border border-green-400/20 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-green-400 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-400/10 border border-green-400/30 rounded-lg px-6 py-3 text-green-400 hover:bg-green-400/20 transition-all font-mono flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 font-mono text-sm">
              Built with React & Tailwind CSS • © 2025 John Doe
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
