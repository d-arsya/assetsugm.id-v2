import PublicLayout from '@/layouts/public';
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
const dummyArticle = [
    {
        id: 1,
        judul: 'Judul Artikel',
        tanggal: '2025-11-07',
        thumbnail: '/images/artikel/thumbnail.jpg',
        excerpt: 'Ringkasan artikel...',
        url: 'https://trpl.sv.ugm.ac.id/2025/11/07/slug-artikel/', // URL ke website TRPL
    },
];
export default function ArticlePage() {
    const [kabinetList, setKabinetList] = useState(dummykabinetList);
    const [articles, setArticles] = useState(dummyArticle);
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
                        <h1 className="mb-6 text-5xl font-bold md:text-6xl">Artikel</h1>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-emerald-50 md:text-2xl">
                            Berita dan informasi terkini seputar TRPL dan ASSETS UGM
                        </p>
                    </div>
                </div>
            </section>

            {/* Artikel Grid */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
                {articles && articles.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {articles.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="aspect-video overflow-hidden bg-gray-200">
                                    <img
                                        src={item.thumbnail || '/images/default-article.png'}
                                        alt={item.judul}
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
                                        {new Date(item.tanggal).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </div>
                                    <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition group-hover:text-emerald-600">
                                        {item.judul}
                                    </h3>
                                    <p className="mb-4 line-clamp-3 text-sm text-gray-600">{item.excerpt}</p>
                                    <div className="flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
                                        Baca Selengkapnya
                                        <svg
                                            className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <svg className="mx-auto mb-6 h-24 w-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <h3 className="mb-2 text-2xl font-semibold text-gray-700">Belum Ada Artikel</h3>
                        <p className="text-gray-500">Artikel akan segera tersedia. Silakan kembali lagi nanti.</p>
                    </div>
                )}
            </section>

            {/* CTA ke Website TRPL */}
            <section className="bg-gradient-to-br from-emerald-600 to-green-700 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold">Ingin Tahu Lebih Banyak?</h2>
                    <p className="mb-6 text-lg text-emerald-50">Kunjungi website resmi Program Studi TRPL untuk informasi lengkap</p>
                    <a
                        href="https://trpl.sv.ugm.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
                    >
                        Kunjungi Website TRPL
                    </a>
                </div>
            </section>
        </PublicLayout>
    );
}
