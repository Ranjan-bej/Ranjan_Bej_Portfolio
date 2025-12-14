import { X } from 'lucide-react';
import { motion } from 'motion/react';

interface EditorTabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
  onTabClose: (tab: string) => void;
}

export function EditorTabs({ tabs, activeTab, onTabClick, onTabClose }: EditorTabsProps) {
  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.tsx')) return '⚛️';
    if (fileName.endsWith('.md')) return '📄';
    if (fileName.endsWith('.json')) return '⚙️';
    return '📄';
  };

  const getFileColor = (fileName: string) => {
    if (fileName.endsWith('.tsx')) return 'text-blue-400';
    if (fileName.endsWith('.md')) return 'text-purple-400';
    return 'text-gray-400';
  };

  return (
    <div className="bg-[#252526] border-b border-[#1e1e1e] flex overflow-x-auto">
      {tabs.map((tab) => (
        <motion.div
          key={tab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className={`group flex items-center space-x-2 px-4 py-2 text-sm border-r border-[#1e1e1e] cursor-pointer relative ${
            activeTab === tab
              ? 'bg-[#1e1e1e] text-white'
              : 'bg-[#2d2d2d] text-gray-400 hover:bg-[#2a2a2a]'
          }`}
          onClick={() => onTabClick(tab)}
        >
          <span className={getFileColor(tab)}>{getFileIcon(tab)}</span>
          <span className="whitespace-nowrap">{tab}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(tab);
            }}
            className="opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] rounded p-0.5 transition-opacity"
          >
            <X size={14} />
          </button>
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
