import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { EditorTabs } from './components/EditorTabs';
import { EditorContent } from './components/EditorContent';
import { StatusBar } from './components/StatusBar';
import { Minimize2, Maximize2, X } from 'lucide-react';

export default function App() {
  const [openTabs, setOpenTabs] = useState<string[]>(['welcome.md']);
  const [activeTab, setActiveTab] = useState('welcome.md');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + W to close tab
      if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
        e.preventDefault();
        if (openTabs.length > 1) {
          handleCloseTab(activeTab);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeTab, openTabs]);

  const handleFileClick = (fileName: string) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveTab(fileName);
  };

  const handleCloseTab = (fileName: string) => {
    const newTabs = openTabs.filter((tab) => tab !== fileName);
    setOpenTabs(newTabs);
    
    if (activeTab === fileName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-gray-100">
      {/* Title Bar */}
      <div className="bg-[#323233] h-9 flex items-center justify-between px-4 border-b border-[#1e1e1e]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <button
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer transition-colors"
              title="Close"
            />
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer transition-colors"
              title="Minimize"
            />
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer transition-colors"
              title="Maximize"
            />
          </div>
          <span className="text-sm text-gray-400 ml-2">Portfolio - Visual Studio Code</span>
        </div>
        <div className="hidden md:flex text-xs text-gray-500 space-x-4">
          <span className="hover:text-gray-300 cursor-pointer">File</span>
          <span className="hover:text-gray-300 cursor-pointer">Edit</span>
          <span className="hover:text-gray-300 cursor-pointer">View</span>
          <span className="hover:text-gray-300 cursor-pointer">Terminal</span>
          <span className="hover:text-gray-300 cursor-pointer">Help</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar onFileClick={handleFileClick} activeFile={activeTab} />

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs */}
          <EditorTabs
            tabs={openTabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            onTabClose={handleCloseTab}
          />

          {/* Editor Content */}
          <EditorContent activeTab={activeTab} />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar activeTab={activeTab} />
    </div>
  );
}