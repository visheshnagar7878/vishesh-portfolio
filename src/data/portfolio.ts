export interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    link: string;
    color: string;
}

export interface EducationItem {
    year: string;
    degree: string;
    institution: string;
    score?: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    image: string; // Path to image or placeholder
}

export interface SkillCategory {
    title: string;
    skills: { name: string; level: number }[];
}

export const portfolioData = {
    projects: [
        {
            title: 'Advanced Attendance System',
            description: 'Automated attendance system using face recognition and detection technologies.',
            tech: ['Python', 'OpenCV', 'Face Recognition'],
            github: 'https://github.com/AjitVerma15/Advance-Attendence-System',
            link: '#',
            color: 'from-purple-500 to-indigo-500',
        },
        {
            title: 'Telegram Bot',
            description: 'A bot capable of delivering news, weather updates, and small talk based on location.',
            tech: ['Python', 'Dialogflow', 'API'],
            github: 'https://github.com/AjitVerma15/Telegram-Bot',
            link: '#',
            color: 'from-blue-500 to-cyan-500',
        },
    ] as Project[],

    education: [
        {
            year: '2023',
            degree: 'High School (12th Grade)',
            institution: 'CBSE Board',
            score: '87%',
        },
        // Add more here easily
    ] as EducationItem[],

    certifications: [
        {
            name: 'Python Programming',
            issuer: 'Udemy',
            date: '2023',
            image: '/images/Cert.jpg',
        },
        {
            name: 'Web Development Bootcamp',
            issuer: 'Udemy',
            date: '2023',
            image: '/images/cetificate of html and css.jpg',
        },
        { // Example placeholder for future certs
            name: 'SQL Certification',
            issuer: 'HackerRank',
            date: '2024',
            image: '/images/sql cerficate.png',
        }
    ] as Certification[],

    skills: [
        {
            title: 'Languages',
            skills: [
                { name: 'Python', level: 90 },
                { name: 'C++', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'SQL', level: 75 },
            ],
        },
        {
            title: 'Libraries/Frameworks',
            skills: [
                { name: 'React', level: 70 },
                { name: 'Next.js', level: 65 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'Flask', level: 60 },
                { name: 'NumPy/Pandas', level: 50 },
            ],
        },
        {
            title: 'Tools & Platforms',
            skills: [
                { name: 'Git/GitHub', level: 80 },
                { name: 'VS Code', level: 95 },
                { name: 'Figma', level: 60 },
                { name: 'Windows', level: 90 },
            ],
        },
    ] as SkillCategory[],
};
