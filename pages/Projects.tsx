
import React, { useEffect, useState } from 'react';
import { GithubRepo } from '../types';
import { GithubIcon } from '../components/Icons';

// Explicitly type ProjectCard as a functional component to handle standard props like 'key'
const ProjectCard: React.FC<{ repo: GithubRepo }> = ({ repo }) => {
  // Using GitHub's Open Graph images which look much more professional for repo cards
  const ogImageUrl = `https://opengraph.githubassets.com/1/pantane1/${repo.name}`;

  return (
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden">
      <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
        <img
          src={ogImageUrl}
          alt={repo.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/400/225?random=${repo.id}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-slate-900 rounded-lg font-bold text-sm flex items-center space-x-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source</span>
          </a>
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-900">{repo.name}</h3>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
            {repo.language || 'Code'}
          </span>
        </div>
        <p className="text-slate-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
          {repo.description || "A professional software project built with precision and modern best practices."}
        </p>

        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {repo.topics.map(topic => (
              <span
                key={topic}
                className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-default"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}

        <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-sm text-slate-400">
          <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
          <div className="flex items-center space-x-1 text-slate-600 font-medium">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <span>{repo.stargazers_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/pantane1/repos?sort=updated&per_page=12');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Failed to fetch GitHub repos", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="fade-in space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Built to Solve Problems.</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Here are some of the projects I’ve built and experimented with — from full-stack systems to practical tools. Each project reflects how I think, design, and solve problems.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="animate-pulse bg-white rounded-3xl h-[500px] border border-slate-100 shadow-sm" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map(repo => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Want to see more?</h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">Explore all my repositories and active contributions directly on my GitHub profile.</p>
        <a
          href="https://github.com/pantane1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all"
        >
          <GithubIcon className="w-5 h-5 mr-3" />
          Browse Full Profile
        </a>
      </div>
    </div>
  );
};

export default Projects;
