import { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, FileCode, FileText, FolderOpen, Search, Files, GitBranch, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  onFileClick: (fileName: string) => void;
  activeFile: string;
}

export function Sidebar({ onFileClick, activeFile }: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['portfolio', 'src', 'sections']);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((f) => f !== folderName)
        : [...prev, folderName]
    );
  };

  const fileStructure = [
    {
      name: 'portfolio',
      type: 'folder',
      children: [
        { name: 'welcome.md', type: 'file', icon: '📄' },
        {
          name: 'src',
          type: 'folder',
          children: [
            {
              name: 'sections',
              type: 'folder',
              children: [
                { name: 'intro.tsx', type: 'file', icon: '⚛️' },
                { name: 'about.tsx', type: 'file', icon: '⚛️' },
                { name: 'experience.tsx', type: 'file', icon: '⚛️' },
                { name: 'skills.tsx', type: 'file', icon: '⚛️' },
                { name: 'projects.tsx', type: 'file', icon: '⚛️' },
                { name: 'contact.tsx', type: 'file', icon: '⚛️' },
              ],
            },
          ],
        },
      ],
    },
  ];

  const renderTree = (items: any[], level = 0) => {
    return items.map((item) => {
      const isExpanded = expandedFolders.includes(item.name);
      const isActive = activeFile === item.name;

      if (item.type === 'folder') {
        return (
          <div key={item.name}>
            <button
              onClick={() => toggleFolder(item.name)}
              className="w-full flex items-center space-x-2 px-2 py-1 hover:bg-[#2a2d2e] text-sm transition-colors"
              style={{ paddingLeft: `${level * 12 + 8}px` }}
            >
              {isExpanded ? (
                <ChevronDown size={14} className="text-gray-400" />
              ) : (
                <ChevronRight size={14} className="text-gray-400" />
              )}
              {isExpanded ? (
                <FolderOpen size={16} className="text-blue-400" />
              ) : (
                <Folder size={16} className="text-blue-400" />
              )}
              <span className="text-gray-300">{item.name}</span>
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  {renderTree(item.children, level + 1)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      } else {
        return (
          <button
            key={item.name}
            onClick={() => onFileClick(item.name)}
            className={`w-full flex items-center space-x-2 px-2 py-1 text-sm transition-colors ${
              isActive ? 'bg-[#37373d]' : 'hover:bg-[#2a2d2e]'
            }`}
            style={{ paddingLeft: `${level * 12 + 32}px` }}
          >
            <span>{item.icon}</span>
            <span className="text-gray-300">{item.name}</span>
          </button>
        );
      }
    });
  };

  if (isSidebarCollapsed) {
    return (
      <div className="w-12 bg-[#333333] border-r border-[#1e1e1e] flex flex-col items-center py-4 space-y-4">
        <button
          onClick={() => setIsSidebarCollapsed(false)}
          className="p-2 hover:bg-[#2a2d2e] rounded transition-colors"
          title="Files"
        >
          <Files size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-[#2a2d2e] rounded transition-colors" title="Search">
          <Search size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-[#2a2d2e] rounded transition-colors" title="Source Control">
          <GitBranch size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-[#2a2d2e] rounded transition-colors" title="Settings">
          <Settings size={20} className="text-gray-400" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Activity Bar */}
      <div className="w-12 bg-[#333333] border-r border-[#1e1e1e] flex flex-col items-center py-4 space-y-4">
        <button
          onClick={() => setIsSidebarCollapsed(true)}
          className="p-2 bg-[#37373d] rounded transition-colors"
          title="Files"
        >
          <Files size={20} className="text-white" />
        </button>
        <button className="p-2 hover:bg-[#2a2d2e] rounded transition-colors" title="Search">
          <Search size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-[#2a2d2e] rounded transition-colors" title="Source Control">
          <GitBranch size={20} className="text-gray-400" />
        </button>
        <div className="flex-1" />
        <button className="p-2 hover:bg-[#2a2d2e] rounded transition-colors" title="Settings">
          <Settings size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="w-52 bg-[#252526] border-r border-[#1e1e1e] flex flex-col">
        {/* Explorer Header */}
        <div className="px-4 py-2 text-xs text-gray-400 uppercase tracking-wider border-b border-[#1e1e1e]">
          Explorer
        </div>

        {/* File Tree */}
        <div className="flex-1 overflow-y-auto py-2">
          {renderTree(fileStructure)}
        </div>

        {/* Footer */}
        <div className="border-t border-[#1e1e1e] p-3">
          <div className="text-xs text-gray-500 font-mono">
            <div className="mb-1">📁 Portfolio Project</div>
            <div>🌿 main branch</div>
          </div>
        </div>
      </div>
    </div>
  );
}