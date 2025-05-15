import React from 'react';
import { Compass } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="border-b border-gray-700 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="h-8 w-8 text-amber-500" />
            <h1 className="text-2xl font-bold tracking-wider text-amber-400">
              ARK: <span className="text-cyan-400">Creature Creator</span>
            </h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-black/50 border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          This fan-made tool is not affiliated with Studio Wildcard or ARK: Survival Ascended.
        </div>
      </footer>
    </div>
  );
};

export default Layout;