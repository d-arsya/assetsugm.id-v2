import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export const PublicLayout = ({ children, kabinet = null }) => {
    // Apply kabinet color theme if exists
    const themeStyle = kabinet
        ? {
              '--primary-color': kabinet.primary_color,
              '--secondary-color': kabinet.secondary_color,
          }
        : {};

    return (
        <div className="min-h-screen bg-gray-50" style={themeStyle}>
            <PublicHeader />
            <main>{children}</main>
            <PublicFooter />
        </div>
    );
};

export const PublicHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [kabinetDropdownOpen, setKabinetDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const kabinetList = [
        {
            id: 1,
            slug: 'anvaya',
            nama: 'Anvaya',
            periode: '2025/2026',
        },
    ];
    const menus = [
        {
            link: '/about',
            label: 'Tentang',
        },
        {
            link: '/article',
            label: 'Artikel',
        },
        {
            link: '/aspiration',
            label: 'Aspirasi',
        },
    ];
    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/80 opacity-80 shadow-md backdrop-blur-md' : 'bg-white shadow-sm'
            }`}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <img src="/images/logo-assets.png" alt="ASSETS UGM" className="h-10 w-auto" />
                        <div className="hidden sm:block">
                            <div className="text-lg font-bold text-gray-900">ASSETS UGM</div>
                            <div className="text-xs text-gray-600">TRPL Sekolah Vokasi</div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden items-center space-x-8 md:flex">
                        <div className="relative">
                            <button
                                onClick={() => setKabinetDropdownOpen(!kabinetDropdownOpen)}
                                className="flex items-center space-x-1 text-gray-700 transition hover:text-blue-600"
                            >
                                <span>Kabinet</span>
                                <svg
                                    className={`h-4 w-4 transition-transform ${kabinetDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {kabinetDropdownOpen && (
                                <div className="absolute top-full left-0 z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                                    {kabinetList.map((kab) => (
                                        <Link
                                            key={kab.id}
                                            href={`/cabinet/${kab.slug}`}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setKabinetDropdownOpen(false)}
                                        >
                                            {kab.nama} ({kab.periode})
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        {menus.map((e) => (
                            <Link href={e.link} className="text-gray-700 transition hover:text-blue-600">
                                {e.label}
                            </Link>
                        ))}

                        <Link href="/voting" className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                            Voting
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="border-t py-4 md:hidden">
                        <div className="flex flex-col space-y-3">
                            <div>
                                <button
                                    onClick={() => setKabinetDropdownOpen(!kabinetDropdownOpen)}
                                    className="flex w-full items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600"
                                >
                                    <span>Kabinet</span>
                                    <svg
                                        className={`h-4 w-4 transition-transform ${kabinetDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {kabinetDropdownOpen && (
                                    <div className="mt-2 ml-6 space-y-2">
                                        {kabinetList.map((kab) => (
                                            <Link
                                                key={kab.id}
                                                href={`/cabinet/${kab.slug}`}
                                                className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                                            >
                                                {kab.nama} ({kab.periode})
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {menus.map((e) => (
                                <Link href={e.link} className="px-3 py-2 text-gray-700 hover:text-blue-600">
                                    {e.label}
                                </Link>
                            ))}

                            <Link href="/voting" className="mx-3 rounded-lg bg-blue-600 px-3 py-2 text-center text-white hover:bg-blue-700">
                                Voting
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export const PublicFooter = () => {
    return (
        <footer className="bg-emerald-800 text-white">
            <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* About */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">ASSETS UGM</h3>
                        <p className="text-sm leading-relaxed">
                            Association of Software Engineering Technology Students
                            <br />
                            Program Studi Teknologi Rekayasa Perangkat Lunak
                            <br />
                            Sekolah Vokasi, Universitas Gadjah Mada
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/kabinet" className="hover:text-emerald-500">
                                    Kabinet
                                </Link>
                            </li>
                            <li>
                                <Link href="/tentang" className="hover:text-emerald-500">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/artikel" className="hover:text-emerald-500">
                                    Artikel
                                </Link>
                            </li>
                            <li>
                                <a href="https://trpl.sv.ugm.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
                                    Website TRPL
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/assets_ugm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-500"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/association-of-software-engineering-technology-students-ugm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-500"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} ASSETS UGM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default PublicLayout;
