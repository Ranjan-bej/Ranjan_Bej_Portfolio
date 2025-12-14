import { motion, AnimatePresence } from 'motion/react';
import { WelcomeContent } from './content/WelcomeContent';
import { HeroContent } from './content/HeroContent';
import { AboutContent } from './content/AboutContent';
import { ExperienceContent } from './content/ExperienceContent';
import { SkillsContent } from './content/SkillsContent';
import { ProjectsContent } from './content/ProjectsContent';
import { ContactContent } from './content/ContactContent';

interface EditorContentProps {
  activeTab: string;
}

export function EditorContent({ activeTab }: EditorContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'welcome.md':
        return <WelcomeContent />;
      case 'hero.tsx':
        return <HeroContent />;
      case 'about.tsx':
        return <AboutContent />;
      case 'experience.tsx':
        return <ExperienceContent />;
      case 'skills.tsx':
        return <SkillsContent />;
      case 'projects.tsx':
        return <ProjectsContent />;
      case 'contact.tsx':
        return <ContactContent />;
      default:
        return <WelcomeContent />;
    }
  };

  return (
    <div className="flex-1 bg-[#1e1e1e] overflow-y-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
