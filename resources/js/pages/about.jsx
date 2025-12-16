import PublicLayout from '@/layouts/public';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const dummykabinetList = [
    {
        id: 1,
        nama: 'Adhigana',
        slug: 'adhigana',
        periode: '2024/2025',
        logo: '/images/kabinet/adhigana-logo.png',
        primary_color: '#3B82F6',
        secondary_color: '#1E40AF',
        is_active: true,
    },
    {
        id: 2,
        nama: 'Anargya',
        slug: 'anargya',
        periode: '2023/2024',
        logo: '/images/kabinet/anargya-logo.png',
        primary_color: '#10B981',
        secondary_color: '#059669',
        is_active: false,
    },
    {
        id: 3,
        nama: 'Wiratama',
        slug: 'wiratama',
        periode: '2022/2023',
        logo: '/images/kabinet/wiratama-logo.png',
        primary_color: '#F59E0B',
        secondary_color: '#D97706',
        is_active: false,
    },
    {
        id: 4,
        nama: 'Sekar Wangi',
        slug: 'sekar-wangi',
        periode: '2021/2022',
        logo: '/images/kabinet/sekar-wangi-logo.png',
        primary_color: '#EC4899',
        secondary_color: '#DB2777',
        is_active: false,
    },
    {
        id: 5,
        nama: 'IRIS',
        slug: 'iris',
        periode: '2020/2021',
        logo: '/images/kabinet/iris-logo.png',
        primary_color: '#8B5CF6',
        secondary_color: '#7C3AED',
        is_active: false,
    },
];
export default function AboutPage() {
    const [kabinetList, setKabinetList] = useState(dummykabinetList);
    const sejarah = [
        {
            tahun: '2020',
            kabinet: 'IRIS',
            peristiwa: 'ASSETS resmi berdiri dengan nama kabinet pertama IRIS sebagai wadah mahasiswa TRPL',
        },
        {
            tahun: '2021',
            kabinet: 'Sekar Wangi',
            peristiwa: 'Pengembangan program kerja berbasis kolaborasi dan pengabdian masyarakat',
        },
        {
            tahun: '2022',
            kabinet: 'Wiratama',
            peristiwa: 'Ekspansi kegiatan kompetisi dan peningkatan prestasi mahasiswa TRPL',
        },
        {
            tahun: '2023',
            kabinet: 'Anargya',
            peristiwa: 'Penguatan ekosistem digital dan inovasi teknologi untuk kemajuan bersama',
        },
        {
            tahun: '2024',
            kabinet: 'Adhigana',
            peristiwa: 'Fokus pada pengembangan soft skill, hard skill, dan kontribusi untuk SDGs',
        },
    ];

    return (
        <PublicLayout kabinetList={kabinetList}>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"></div>
                    <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-green-400/20 blur-3xl"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
                    <div className="text-center">
                        <h1 className="mb-6 text-5xl font-bold md:text-6xl">Tentang ASSETS</h1>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-emerald-50 md:text-2xl">
                            Mengenal lebih dekat organisasi yang mewadahi mahasiswa Teknologi Rekayasa Perangkat Lunak untuk tumbuh dan berkembang
                            bersama
                        </p>
                    </div>
                </div>
            </section>

            {/* Profil Singkat */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <img src="/images/assets-illustration.png" alt="ASSETS UGM" className="h-auto w-full rounded-2xl shadow-xl" />
                    </div>
                    <div>
                        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Apa itu ASSETS?</h2>
                        <p className="mb-4 leading-relaxed text-gray-600">
                            <strong className="text-emerald-600">ASSETS</strong> atau{' '}
                            <strong>Association of Software Engineering Technology Students</strong> merupakan himpunan mahasiswa Program Studi
                            Teknologi Rekayasa Perangkat Lunak, Sekolah Vokasi, Universitas Gadjah Mada.
                        </p>
                        <p className="mb-4 leading-relaxed text-gray-600">
                            ASSETS berdiri pada tahun <strong className="text-emerald-600">2020</strong> dengan nama kabinet pertama
                            <strong className="text-emerald-600"> IRIS</strong>. Sebagai himpunan yang membantu program studi dalam menyejahterakan
                            mahasiswanya melalui berbagai kegiatan akademik dan non-akademik.
                        </p>
                        <p className="leading-relaxed text-gray-600">
                            Dengan tagline <strong className="text-emerald-600">"Small Organization BIG Impact"</strong>, ASSETS berkomitmen untuk
                            memberikan dampak yang besar bagi mahasiswa dan masyarakat melalui program-program yang inovatif dan berkelanjutan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="bg-gradient-to-br from-emerald-50 to-green-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Visi & Misi</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">Arah dan tujuan ASSETS dalam mengembangkan potensi mahasiswa TRPL</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Visi */}
                        <div className="rounded-2xl border-t-4 border-emerald-600 bg-white p-8 shadow-lg">
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 rounded-lg bg-emerald-100 p-3">
                                    <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                            </div>
                            <p className="leading-relaxed text-gray-700">
                                Menjadi wadah unggul bagi mahasiswa untuk berkolaborasi, belajar, dan berinovasi dalam menciptakan solusi teknologi
                                yang bermanfaat bagi masyarakat.
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="rounded-2xl border-t-4 border-emerald-600 bg-white p-8 shadow-lg">
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 rounded-lg bg-emerald-100 p-3">
                                    <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                            </div>
                            <p className="leading-relaxed text-gray-700">
                                Penyelenggaraan kegiatan yang mendukung pengembangan keterampilan teknis dan non-teknis, meningkatkan kesadaran akan
                                pentingnya teknologi dalam kehidupan sehari-hari, serta membangun jaringan yang kuat antara anggota, alumni, dan
                                industri.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Makna & Filosofi */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 shadow-2xl">
                        <div className="p-8 text-white md:p-12">
                            <div className="mb-8 text-center">
                                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Makna & Filosofi</h2>
                                <div className="mx-auto h-1 w-20 bg-white/50"></div>
                            </div>

                            <div className="space-y-6 leading-relaxed text-emerald-50">
                                <p className="text-lg">
                                    <strong className="text-white">ASSETS</strong> adalah organisasi yang berkomitmen untuk mengembangkan potensi dan
                                    keterampilan mahasiswa dalam bidang teknologi rekayasa perangkat lunak melalui kegiatan akademik dan non-akademik.
                                </p>

                                <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                                    <h3 className="mb-4 text-center text-2xl font-bold text-white">"Small Organization BIG Impact"</h3>
                                    <p className="text-center">
                                        Tagline ini mencerminkan semangat ASSETS untuk memberikan dampak yang besar dan berkelanjutan bagi mahasiswa,
                                        program studi, dan masyarakat, meskipun dimulai dari organisasi yang sederhana.
                                    </p>
                                </div>

                                <p>
                                    Setiap program kerja dan kegiatan yang dilaksanakan ASSETS dirancang untuk memberdayakan mahasiswa TRPL agar
                                    memiliki kompetensi yang mumpuni, karakter yang kuat, dan kontribusi nyata untuk kemajuan teknologi Indonesia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sejarah Timeline */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Sejarah Perjalanan</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">Perjalanan ASSETS dari tahun ke tahun dalam mengabdi untuk mahasiswa TRPL</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-emerald-200 md:block"></div>

                        <div className="space-y-12">
                            {sejarah.map((item, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="rounded-xl border-l-4 border-emerald-600 bg-white p-6 shadow-lg">
                                            <div className="mb-3 flex items-center">
                                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                                                    {item.tahun}
                                                </span>
                                                <span className="ml-3 text-gray-500">•</span>
                                                <span className="ml-3 font-semibold text-emerald-600">Kabinet {item.kabinet}</span>
                                            </div>
                                            <p className="leading-relaxed text-gray-700">{item.peristiwa}</p>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 z-10 hidden h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-emerald-600 shadow-lg md:flex">
                                        <div className="h-3 w-3 rounded-full bg-white"></div>
                                    </div>

                                    {/* Empty Space */}
                                    <div className="hidden w-5/12 md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Struktur Organisasi */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Struktur Organisasi</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            Setiap periode, ASSETS membentuk kabinet dengan struktur organisasi yang solid
                        </p>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 p-8 text-center md:p-12">
                        <div className="mx-auto max-w-3xl">
                            <div className="mb-8 rounded-xl bg-white p-8 shadow-lg">
                                <svg className="mx-auto mb-6 h-20 w-20 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">Kabinet & Divisi</h3>
                                <p className="mb-6 leading-relaxed text-gray-600">
                                    Setiap kabinet memiliki struktur yang terdiri dari Ketua, Wakil Ketua, Sekretaris, Bendahara, dan berbagai divisi
                                    yang menjalankan program kerja sesuai bidangnya masing-masing.
                                </p>
                                <Link
                                    href="/kabinet"
                                    className="inline-block rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
                                >
                                    Lihat Kabinet
                                </Link>
                            </div>

                            <p className="text-gray-600">
                                Untuk melihat struktur lengkap setiap kabinet, silakan kunjungi halaman detail kabinet yang tersedia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact & Social Media */}
            <section className="bg-gradient-to-br from-emerald-600 to-green-700 py-16 text-white md:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hubungi Kami</h2>
                    <p className="mb-8 text-lg text-emerald-50">Ikuti media sosial kami atau hubungi kami untuk informasi lebih lanjut</p>

                    <div className="mb-8 flex justify-center space-x-6">
                        <a
                            href="https://www.instagram.com/assets_ugm/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition hover:bg-white/30"
                        >
                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/association-of-software-engineering-technology-students-ugm/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition hover:bg-white/30"
                        >
                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>

                    <div className="inline-block rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                        <p className="mb-2 text-sm text-emerald-100">Official Website TRPL</p>
                        <a
                            href="https://trpl.sv.ugm.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white transition hover:text-emerald-100"
                        >
                            trpl.sv.ugm.ac.id
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
