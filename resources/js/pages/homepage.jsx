import PublicLayout from '@/layouts/public';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const dummykabinetAktif = {
    id: 1,
    nama: 'Adhigana',
    slug: 'adhigana',
    periode: '2024/2025',
    logo: '/images/kabinet/adhigana-logo.png',
    visi: 'Mewujudkan ASSETS sebagai organisasi yang inklusif, inovatif, dan berdampak bagi mahasiswa TRPL dan masyarakat luas',
    misi: 'Menyelenggarakan program kerja yang mendukung pengembangan soft skill dan hard skill mahasiswa, membangun ekosistem kolaboratif, serta berkontribusi nyata untuk kemajuan teknologi',
    primary_color: '#3B82F6',
    secondary_color: '#1E40AF',
    is_active: true,
};

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

const dummyprokerTerbaru = [
    {
        id: 1,
        nama: 'LIGA TRPL 2025',
        slug: 'liga-trpl-2025',
        tanggal: '2025-11-04',
        thumbnail: '/images/proker/liga-trpl-2025.jpg',
        deskripsi:
            'Kompetisi olahraga dan seni tahunan yang mempertemukan mahasiswa TRPL dalam berbagai cabang lomba untuk mempererat kebersamaan dan sportivitas',
        kabinet_id: 1,
    },
    {
        id: 2,
        nama: 'Hearing TRPL 2025',
        slug: 'hearing-trpl-2025',
        tanggal: '2025-11-07',
        thumbnail: '/images/proker/hearing-trpl-2025.jpg',
        deskripsi:
            'Forum diskusi terbuka antara mahasiswa dan dosen untuk membahas perbaikan akademik, fasilitas, dan berbagai aspirasi mahasiswa TRPL',
        kabinet_id: 1,
    },
    {
        id: 3,
        nama: 'Workshop Web Development',
        slug: 'workshop-web-dev',
        tanggal: '2025-10-15',
        thumbnail: '/images/proker/workshop-web.jpg',
        deskripsi: 'Pelatihan intensif pengembangan web modern menggunakan teknologi terkini seperti React, Node.js, dan database management',
        kabinet_id: 1,
    },
    {
        id: 4,
        nama: 'ASSETS Goes to School',
        slug: 'assets-goes-to-school',
        tanggal: '2025-09-20',
        thumbnail: '/images/proker/goes-to-school.jpg',
        deskripsi: 'Program sosialisasi dan pengenalan teknologi kepada siswa SMA/SMK untuk meningkatkan literasi digital generasi muda',
        kabinet_id: 1,
    },
];

const dummyartikelTerbaru = [
    {
        id: 1,
        judul: 'Hearing TRPL SV UGM 2025: Diskusi Terbuka Mahasiswa dan Dosen untuk Perbaikan Akademik & Fasilitas',
        slug: 'hearing-trpl-2025',
        tanggal: '2025-11-07',
        thumbnail: '/images/artikel/hearing-2025.jpg',
        excerpt:
            'Program Studi Teknologi Rekayasa Perangkat Lunak (TRPL) Sekolah Vokasi UGM mengadakan hearing bersama mahasiswa sebagai upaya memperkuat komunikasi dan meningkatkan mutu layanan akademik.',
    },
    {
        id: 2,
        judul: '🏆 Opening LIGA TRPL 2025: Perjalanan Ini Telah Resmi Dimulai!',
        slug: 'opening-liga-trpl-2025',
        tanggal: '2025-11-04',
        thumbnail: '/images/artikel/opening-liga-2025.jpg',
        excerpt:
            'Euforia, semangat, dan antusiasme luar biasa mewarnai hari pembukaan LIGA TRPL 2025. Acara yang telah lama dinantikan ini akhirnya resmi dimulai, menandai awal dari sebuah perjalanan besar.',
    },
    {
        id: 3,
        judul: 'Mahasiswa Vokasi UGM Aktif Lomba Sejak Semester 1, Kini Terlibat Riset AI untuk Kesehatan dan SDGs',
        slug: 'mahasiswa-vokasi-riset-ai',
        tanggal: '2025-10-28',
        thumbnail: '/images/artikel/riset-ai.jpg',
        excerpt:
            'Mahasiswa TRPL SV UGM menunjukkan prestasi gemilang dengan aktif mengikuti berbagai kompetisi sejak semester awal dan kini berkontribusi dalam riset AI untuk kesehatan.',
    },
];
export default function Homepage() {
    const [kabinetAktif, setKabinetAktif] = useState(dummykabinetAktif);
    const [kabinetList, setKabinetList] = useState(dummykabinetList);
    const [prokerTerbaru, setProkerTerbaru] = useState(dummyprokerTerbaru);
    const [artikelTerbaru, setArtikelTerbaru] = useState(dummyartikelTerbaru);
    return (
        <PublicLayout kabinet={kabinetAktif} kabinetList={kabinetList}>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-500 text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"></div>
                    <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
                    <div className="text-center">
                        <h1 className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">ASSETS UGM</h1>
                        <p className="mb-4 text-2xl font-semibold text-emerald-100 md:text-3xl">Small Organization BIG Impact</p>
                        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-emerald-50 md:text-xl">
                            Association of Software Engineering Technology Students - Himpunan Mahasiswa Program Studi Teknologi Rekayasa Perangkat
                            Lunak, Sekolah Vokasi, Universitas Gadjah Mada
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href="/tentang"
                                className="rounded-lg bg-white px-8 py-3 font-semibold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href={`/kabinet/${kabinetAktif?.slug}`}
                                className="rounded-lg border-2 border-white bg-emerald-500/30 px-8 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-emerald-500/50"
                            >
                                Lihat Kabinet Aktif
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kabinet Aktif Section */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Kabinet Aktif</h2>
                    <p className="mx-auto max-w-2xl text-gray-600">Kabinet yang sedang aktif menjalankan program kerja untuk periode ini</p>
                </div>

                {kabinetAktif && (
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-xl">
                        <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
                            <div className="flex items-center justify-center">
                                <img
                                    src={kabinetAktif.logo || '/images/default-kabinet.png'}
                                    alt={kabinetAktif.nama}
                                    className="h-auto w-full max-w-md object-contain"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="inline-block">
                                    <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
                                        {kabinetAktif.periode}
                                    </span>
                                </div>
                                <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Kabinet {kabinetAktif.nama}</h3>
                                <div className="mb-6">
                                    <h4 className="mb-2 text-lg font-semibold text-gray-800">Visi</h4>
                                    <p className="leading-relaxed text-gray-600">{kabinetAktif.visi}</p>
                                </div>
                                <div className="mb-8">
                                    <h4 className="mb-2 text-lg font-semibold text-gray-800">Misi</h4>
                                    <p className="leading-relaxed text-gray-600">{kabinetAktif.misi}</p>
                                </div>
                                <Link
                                    href={`/kabinet/${kabinetAktif.slug}`}
                                    className="rounded-lg bg-emerald-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
                                >
                                    Lihat Detail Kabinet
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Kabinet Lainnya */}
                <div className="mt-12">
                    <h3 className="mb-6 text-center text-xl font-bold text-gray-900">Kabinet Lainnya</h3>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {kabinetList
                            .filter((kab) => kab.id !== kabinetAktif?.id)
                            .map((kab) => (
                                <Link
                                    key={kab.id}
                                    href={`/kabinet/${kab.slug}`}
                                    className="group rounded-lg bg-white p-4 text-center shadow transition hover:shadow-lg"
                                >
                                    <div className="mb-3 flex aspect-square items-center justify-center">
                                        <img
                                            src={kab.logo || '/images/default-kabinet.png'}
                                            alt={kab.nama}
                                            className="h-full w-full object-contain transition group-hover:scale-110"
                                        />
                                    </div>
                                    <h4 className="mb-1 truncate text-sm font-semibold text-gray-900">{kab.nama}</h4>
                                    <p className="text-xs text-gray-500">{kab.periode}</p>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* Program Kerja Terbaru */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Program Kerja Terbaru</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">Program kerja terkini yang sedang atau telah dilaksanakan</p>
                    </div>

                    {prokerTerbaru && prokerTerbaru.length > 0 ? (
                        <>
                            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {prokerTerbaru.slice(0, 3).map((proker) => (
                                    <Link
                                        key={proker.id}
                                        href={`/proker/${proker.slug}`}
                                        className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
                                    >
                                        <div className="aspect-video overflow-hidden bg-gray-200">
                                            <img
                                                src={proker.thumbnail || '/images/default-proker.png'}
                                                alt={proker.nama}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-3 flex items-center text-sm text-gray-500">
                                                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                {new Date(proker.tanggal).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 transition group-hover:text-emerald-600">
                                                {proker.nama}
                                            </h3>
                                            <p className="line-clamp-2 text-gray-600">{proker.deskripsi}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link
                                    href={`/kabinet/${kabinetAktif?.slug}#proker`}
                                    className="inline-block rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
                                >
                                    Lihat Semua Program
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="py-12 text-center">
                            <p className="text-gray-500">Belum ada program kerja tersedia</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Artikel Terbaru */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Artikel Terbaru</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">Berita dan informasi terkini seputar TRPL dan ASSETS</p>
                    </div>

                    {artikelTerbaru && artikelTerbaru.length > 0 ? (
                        <>
                            <div className="mb-8 grid gap-6 md:grid-cols-3">
                                {artikelTerbaru.slice(0, 3).map((artikel) => (
                                    <Link
                                        key={artikel.id}
                                        href={`/artikel/${artikel.slug}`}
                                        className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
                                    >
                                        <div className="aspect-video overflow-hidden bg-gray-200">
                                            <img
                                                src={artikel.thumbnail || '/images/default-article.png'}
                                                alt={artikel.judul}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-3 text-sm text-gray-500">
                                                {new Date(artikel.tanggal).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </div>
                                            <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition group-hover:text-emerald-600">
                                                {artikel.judul}
                                            </h3>
                                            <p className="line-clamp-3 text-sm text-gray-600">{artikel.excerpt}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link
                                    href="/artikel"
                                    className="inline-block rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
                                >
                                    Lihat Semua Artikel
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="py-12 text-center">
                            <p className="text-gray-500">Belum ada artikel tersedia</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Aspirasi CTA Section */}
            <section className="bg-gradient-to-br from-emerald-600 to-indigo-700 py-16 text-white md:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Punya Aspirasi untuk ASSETS?</h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-emerald-50">
                        Suara kamu penting bagi kami. Sampaikan aspirasi, saran, atau kritik membangun untuk kemajuan ASSETS dan TRPL.
                    </p>
                    <Link
                        href="/aspirasi"
                        className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
                    >
                        Sampaikan Aspirasi
                    </Link>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-emerald-600 md:text-5xl">2020</div>
                            <div className="font-medium text-gray-600">Tahun Berdiri</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-emerald-600 md:text-5xl">{kabinetList?.length || 0}</div>
                            <div className="font-medium text-gray-600">Kabinet</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-emerald-600 md:text-5xl">{prokerTerbaru?.length || 0}+</div>
                            <div className="font-medium text-gray-600">Program Kerja</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-emerald-600 md:text-5xl">200+</div>
                            <div className="font-medium text-gray-600">Mahasiswa</div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
