import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-[#0e0e0e] pt-20">
            <Navbar />
            <Skills />
            <Footer />
        </main>
    );
}
