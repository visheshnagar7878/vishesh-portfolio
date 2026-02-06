import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0e0e0e] pt-20">
            <Navbar />
            <Contact />
            <Footer />
        </main>
    );
}
