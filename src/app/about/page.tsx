import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0e0e0e] pt-20">
            <Navbar />
            <About />
            <Footer />
        </main>
    );
}
