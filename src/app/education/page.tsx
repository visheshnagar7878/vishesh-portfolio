import Education from '@/components/Education';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-[#0e0e0e] pt-20">
            <Navbar />
            <Education />
            <Footer />
        </main>
    );
}
