'use client';

import { useState } from 'react';
import { Copy, Plus, Trash, Briefcase, Award, Code } from 'lucide-react';

// Basic Types
interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    link: string;
    color: string;
}

interface Certification {
    name: string;
    issuer: string;
    date: string;
    image: string;
}

interface Skill {
    categoryTitle: string;
    name: string;
    level: number;
}

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState<'project' | 'cert' | 'skill'>('project');

    // Project State
    const [project, setProject] = useState<Project>({
        title: '', description: '', tech: [], github: '', link: '', color: 'from-purple-500 to-indigo-500',
    });
    const [techInput, setTechInput] = useState('');

    // Cert State
    const [cert, setCert] = useState<Certification>({
        name: '', issuer: '', date: '', image: '/images/Cert.jpg',
    });

    // Skill State
    const [skill, setSkill] = useState<Skill>({
        categoryTitle: 'Languages', name: '', level: 80,
    });

    const [copied, setCopied] = useState(false);

    // Handlers
    const handleTechAdd = () => {
        if (techInput.trim()) {
            setProject(prev => ({ ...prev, tech: [...prev.tech, techInput.trim()] }));
            setTechInput('');
        }
    };

    const generateJSON = () => {
        if (activeTab === 'project') return JSON.stringify(project, null, 2);
        if (activeTab === 'cert') return JSON.stringify(cert, null, 2);
        if (activeTab === 'skill') return JSON.stringify({ name: skill.name, level: skill.level }, null, 2) + `\n// Add this object to the '${skill.categoryTitle}' skills array`;
        return '';
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateJSON());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 px-6 font-sans pb-20">
            <div className="max-w-3xl mx-auto space-y-8">
                <header className="text-center space-y-2">
                    <h1 className="text-4xl font-bold font-[family-name:var(--font-syne)] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Content Manager</h1>
                    <p className="text-gray-400">Generate JSON snippets to update your portfolio data file.</p>
                </header>

                {/* Tabs */}
                <div className="flex justify-center gap-4 bg-card p-2 rounded-2xl border border-card-border w-fit mx-auto">
                    <button
                        onClick={() => setActiveTab('project')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all ${activeTab === 'project' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' : 'hover:bg-white/10 text-gray-400'}`}
                    >
                        <Briefcase size={18} /> Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('cert')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all ${activeTab === 'cert' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'hover:bg-white/10 text-gray-400'}`}
                    >
                        <Award size={18} /> Certifications
                    </button>
                    <button
                        onClick={() => setActiveTab('skill')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all ${activeTab === 'skill' ? 'bg-green-600 text-white shadow-lg shadow-green-500/25' : 'hover:bg-white/10 text-gray-400'}`}
                    >
                        <Code size={18} /> Skills
                    </button>
                </div>

                <div className="bg-card p-8 rounded-3xl border border-card-border space-y-6 shadow-2xl">

                    {/* PROJECT FORM */}
                    {activeTab === 'project' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-2xl font-bold text-purple-400 border-b border-white/10 pb-4">Add New Project</h2>
                            <div className="grid gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Project Title</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition-colors"
                                        value={project.title}
                                        onChange={(e) => setProject({ ...project, title: e.target.value })}
                                        placeholder="My Awesome App"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Description</label>
                                    <textarea
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition-colors h-24"
                                        value={project.description}
                                        onChange={(e) => setProject({ ...project, description: e.target.value })}
                                        placeholder="What does this project do?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Technologies</label>
                                    <div className="flex gap-2 mb-3">
                                        <input
                                            type="text"
                                            className="flex-1 bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition-colors"
                                            value={techInput}
                                            onChange={(e) => setTechInput(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleTechAdd()}
                                            placeholder="e.g. React"
                                        />
                                        <button onClick={handleTechAdd} className="p-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors"><Plus /></button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm flex items-center gap-2 border border-purple-500/30">
                                                {t}
                                                <button onClick={() => setProject(p => ({ ...p, tech: p.tech.filter((_, idx) => idx !== i) }))} className="hover:text-white"><Trash className="w-3 h-3" /></button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">GitHub URL</label>
                                        <input
                                            type="text"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition-colors"
                                            value={project.github}
                                            onChange={(e) => setProject({ ...project, github: e.target.value })}
                                            placeholder="https://github.com/..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">Live Link</label>
                                        <input
                                            type="text"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition-colors"
                                            value={project.link}
                                            onChange={(e) => setProject({ ...project, link: e.target.value })}
                                            placeholder="https://..."
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Gradient Color</label>
                                    <select
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition-colors"
                                        value={project.color}
                                        onChange={(e) => setProject({ ...project, color: e.target.value })}
                                    >
                                        <option value="from-purple-500 to-indigo-500">Purple/Indigo</option>
                                        <option value="from-blue-500 to-cyan-500">Blue/Cyan</option>
                                        <option value="from-emerald-500 to-green-500">Emerald/Green</option>
                                        <option value="from-orange-500 to-red-500">Orange/Red</option>
                                        <option value="from-pink-500 to-rose-500">Pink/Rose</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CERTIFICATE FORM */}
                    {activeTab === 'cert' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-2xl font-bold text-blue-400 border-b border-white/10 pb-4">Add New Certification</h2>
                            <div className="grid gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Certification Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        value={cert.name}
                                        onChange={(e) => setCert({ ...cert, name: e.target.value })}
                                        placeholder="e.g. AWS Certified Solutions Architect"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Issuer</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        value={cert.issuer}
                                        onChange={(e) => setCert({ ...cert, issuer: e.target.value })}
                                        placeholder="e.g. Amazon Web Services"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Date / Year</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        value={cert.date}
                                        onChange={(e) => setCert({ ...cert, date: e.target.value })}
                                        placeholder="e.g. 2024"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Image Path</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        value={cert.image}
                                        onChange={(e) => setCert({ ...cert, image: e.target.value })}
                                        placeholder="/images/Cert.jpg"
                                    />
                                    <p className="text-xs text-gray-500 mt-2">Place your image in the <code>public/images</code> folder first.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SKILL FORM */}
                    {activeTab === 'skill' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-2xl font-bold text-green-400 border-b border-white/10 pb-4">Add New Skill</h2>
                            <div className="grid gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Target Category</label>
                                    <select
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-green-500 transition-colors"
                                        value={skill.categoryTitle}
                                        onChange={(e) => setSkill({ ...skill, categoryTitle: e.target.value })}
                                    >
                                        <option value="Languages">Languages</option>
                                        <option value="Libraries/Frameworks">Libraries/Frameworks</option>
                                        <option value="Tools & Platforms">Tools & Platforms</option>
                                    </select>
                                    <p className="text-xs text-gray-500 mt-2">This determines where it goes in the list.</p>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Skill Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-green-500 transition-colors"
                                        value={skill.name}
                                        onChange={(e) => setSkill({ ...skill, name: e.target.value })}
                                        placeholder="e.g. Docker"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Proficiency Level ({skill.level}%)</label>
                                    <input
                                        type="range"
                                        min="0" max="100"
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
                                        value={skill.level}
                                        onChange={(e) => setSkill({ ...skill, level: parseInt(e.target.value) })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* JSON OUTPUT */}
                    <div className="pt-6 border-t border-white/10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                Generated JSON
                                <span className="text-xs font-normal px-2 py-1 bg-white/10 rounded-lg text-gray-400">
                                    {activeTab === 'project' ? 'Paste into projects array' : activeTab === 'cert' ? 'Paste into certifications array' : 'Paste into skills array'}
                                </span>
                            </h3>
                            <button
                                onClick={copyToClipboard}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-bold ${copied ? 'bg-green-500 text-black' : 'bg-white text-black hover:bg-gray-200'}`}
                            >
                                <Copy className="w-4 h-4" />
                                {copied ? 'Copied!' : 'Copy Code'}
                            </button>
                        </div>
                        <div className="relative group">
                            <pre className="bg-black/80 backdrop-blur p-6 rounded-xl overflow-x-auto text-sm font-mono text-gray-300 border border-white/10 shadow-inner">
                                {generateJSON()}
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
