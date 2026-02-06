export default function Footer() {
    return (
        <footer className="py-8 bg-black text-center text-gray-500 text-sm border-t border-white/10">
            <p>Made with ❤️ by Vishesh Nagar</p>
            <p className="mt-2 text-xs opacity-50">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </footer>
    );
}
