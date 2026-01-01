
import React, { useState } from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';

interface LayoutProps {
  children: React.ReactNode;
}

const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Privacy Policy</h2>
        <div className="text-slate-600 space-y-4 max-h-96 overflow-y-auto pr-2">
          <p>Your privacy is important to us. This policy outlines how Pantane Hub handles your data.</p>
          <p><strong>1. Data Collection:</strong> We do not collect any personal data unless you explicitly provide it via the contact form or support interactions.</p>
          <p><strong>2. Third-Party Services:</strong> We use GitHub API to display projects and PayPal/Paystack for processing support contributions.</p>
          <p><strong>3. Cookies:</strong> We may use basic session cookies to enhance site functionality.</p>
        </div>
        <button onClick={onClose} className="mt-8 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">Close</button>
      </div>
    </div>
  );
};

const TermsModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Terms of Use</h2>
        <div className="text-slate-600 space-y-4 max-h-96 overflow-y-auto pr-2">
          <p>Welcome to Pantane Hub. By using this site, you agree to the following terms:</p>
          <p><strong>1. Intellectual Property:</strong> All content and designs are the property of Pantane unless otherwise stated.</p>
          <p><strong>2. Limitation of Liability:</strong> Pantane Hub is provided "as is" without any warranties.</p>
          <p><strong>3. Support:</strong> Contributions made through support channels are voluntary and non-refundable.</p>
        </div>
        <button onClick={onClose} className="mt-8 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">Close</button>
      </div>
    </div>
  );
};

const HeaderLogoIcon = () => (
  <div className="w-10 h-10 bg-[#1e293b] rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
    <div className="w-5 h-5 rounded-full border-2 border-[#f59e0b] relative flex items-center justify-center">
      <div className="w-1 h-1.5 bg-[#f59e0b] rounded-full absolute top-0.5"></div>
    </div>
  </div>
);

export const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-slate-100 shadow-sm">
      <div 
        className="flex items-center space-x-3 cursor-pointer group" 
        onClick={() => window.location.hash = '#'}
      >
        <HeaderLogoIcon />
        <div className="flex items-center text-xl font-black tracking-tighter">
          <span className="text-[#1e293b]">PANTANE</span>
          <span className="text-[#f59e0b] ml-1">HUB</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-8">
        {/* Navigation Links - subtle for desktop */}
        <nav className="hidden lg:flex items-center space-x-6 mr-6 border-r border-slate-200 pr-6">
          <button onClick={() => window.location.hash = '#projects'} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">PROJECTS</button>
          <button onClick={() => window.location.hash = '#support'} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">SUPPORT</button>
          <button onClick={() => window.location.hash = '#contact'} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">CONTACT</button>
        </nav>

        {/* Social Icons matching the reference image */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/pantane1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/pantane/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/pantane4" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="mt-20 py-12 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <HeaderLogoIcon />
              <p className="text-slate-800 font-black tracking-tight">PANTANE HUB</p>
            </div>
            <p className="text-slate-500 mt-1 italic text-sm">Powered by Pantane — built different.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-4 mb-2">
              <button onClick={() => setShowPrivacy(true)} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</button>
              <span className="text-slate-300">|</span>
              <button onClick={() => setShowTerms(true)} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Terms of Use</button>
            </div>
            <p className="text-sm text-slate-400 font-medium">© 2025 Pantane. All rights reserved.</p>
          </div>
        </div>
      </div>
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-amber-900">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-12 py-8 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
