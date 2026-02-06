import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#0e0e0e] pt-20">
            <Navbar />
            <Projects />
            <Footer />
        </main>
    );
}
