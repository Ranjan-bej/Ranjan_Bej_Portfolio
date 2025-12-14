export function StatusBar({ activeTab }: { activeTab: string }) {
  const getLanguage = (fileName: string) => {
    if (fileName.endsWith('.tsx')) return 'TypeScript React';
    if (fileName.endsWith('.md')) return 'Markdown';
    if (fileName.endsWith('.json')) return 'JSON';
    return 'Plain Text';
  };

  const getLineCount = (fileName: string) => {
    const lineCounts: { [key: string]: number } = {
      'welcome.md': 15,
      'hero.tsx': 60,
      'about.tsx': 45,
      'experience.tsx': 50,
      'skills.tsx': 55,
      'projects.tsx': 80,
      'contact.tsx': 50,
    };
    return lineCounts[fileName] || 10;
  };

  return (
    <div className="h-6 bg-[#007acc] px-4 flex items-center justify-between text-xs text-white">
      <div className="flex items-center space-x-4">
        <span className="flex items-center gap-1">
          <span className="animate-pulse">⚡</span>
          Portfolio v2.0
        </span>
        <span>●</span>
        <span>UTF-8</span>
        <span>●</span>
        <span>LF</span>
        <span>●</span>
        <span>Ln {getLineCount(activeTab)}, Col 1</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>{getLanguage(activeTab)}</span>
        <span>●</span>
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
          Developer Mode
        </span>
        <span>●</span>
        <span className="hidden sm:inline">Press Ctrl+W to close tab</span>
      </div>
    </div>
  );
}