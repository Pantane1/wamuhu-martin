
import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from '../components/Icons';

const SocialCard = ({ name, handle, icon, url, color }: { name: string, handle: string, icon: React.ReactNode, url: string, color: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center space-x-6"
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`} style={{ backgroundColor: color }}>
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{name}</h3>
      <p className="text-slate-500 font-medium">{handle}</p>
    </div>
    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
      <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    </div>
  </a>
);

const Socials: React.FC = () => {
  const whatsappMessage = encodeURIComponent("hi, got your number from your website.");
  
  return (
    <div className="fade-in max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Let's Connect.</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          These are the platforms where I share ideas, projects, and updates. Feel free to reach out or follow the journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SocialCard
          name="WhatsApp"
          handle="+254 740 312 402"
          url={`https://wa.me/254740312402?text=${whatsappMessage}`}
          icon={<WhatsAppIcon className="w-8 h-8" />}
          color="#25D366"
        />
        <SocialCard
          name="GitHub"
          handle="@Pantane1"
          url="https://github.com/pantane1"
          icon={<GithubIcon className="w-8 h-8" />}
          color="#181717"
        />
        <SocialCard
          name="LinkedIn"
          handle="Pantane Hub"
          url="https://www.linkedin.com/in/pantane/"
          icon={<LinkedInIcon className="w-8 h-8" />}
          color="#0A66C2"
        />
        <SocialCard
          name="Twitter / X"
          handle="@pantane4"
          url="https://twitter.com/pantane4"
          icon={<TwitterIcon className="w-8 h-8" />}
          color="#000000"
        />
        <SocialCard
          name="Instagram"
          handle="@PANTANE"
          url="https://instagram.com/_pantane_"
          icon={<InstagramIcon className="w-8 h-8" />}
          color="#E4405F"
        />
        <SocialCard
          name="Facebook"
          handle="Pantane"
          url="https://web.facebook.com/profile.php?id=100095346974516"
          icon={<FacebookIcon className="w-8 h-8" />}
          color="#1877F2"
        />
      </div>
    </div>
  );
};

export default Socials;
