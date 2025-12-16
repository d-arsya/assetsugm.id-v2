import PublicLayout from '@/layouts/public';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
const dummyKabinet = {
    id: 1,
    nama: 'Adhigana',
    slug: 'adhigana',
    periode: '2024/2025',
    logo: '/images/kabinet/adhigana-logo.png',
    tagline: 'Bersama Membangun, Bersama Berkembang',
    deskripsi: 'Deskripsi singkat kabinet...',
    makna: 'Makna dari nama kabinet...',
    visi: 'Visi kabinet...',
    misi: 'Misi kabinet...',
    primary_color: '#10B981',
    secondary_color: '#059669',
    is_active: true,

    pengurus_inti: {
        ketua: {
            nama: 'John Doe',
            nim: '21/123456',
            foto: '/images/ketua.jpg',
        },
        wakil_ketua: {
            nama: 'Jane Doe',
            nim: '21/123457',
            foto: '/images/wakil.jpg',
        },
        sekretaris_1: {
            nama: 'Alice',
            nim: '21/123458',
            foto: '/images/sekre1.jpg',
        },
        sekretaris_2: {
            nama: 'Bob',
            nim: '21/123459',
            foto: '/images/sekre2.jpg',
        },
        bendahara_1: {
            nama: 'Charlie',
            nim: '21/123460',
            foto: '/images/bend1.jpg',
        },
        bendahara_2: {
            nama: 'David',
            nim: '21/123461',
            foto: '/images/bend2.jpg',
        },
    },

    divisi: [
        {
            id: 1,
            nama: 'Divisi PSDM',
            deskripsi: 'Divisi yang menangani pengembangan sumber daya manusia',
            kepala_divisi: {
                id: 7,
                nama: 'Eve',
                nim: '21/123462',
                foto: '/images/kadiv-psdm.jpg',
            },
            anggota: [
                {
                    id: 8,
                    nama: 'Frank',
                    nim: '22/123463',
                    foto: '/images/anggota1.jpg',
                },
                {
                    id: 9,
                    nama: 'Grace',
                    nim: '22/123464',
                    foto: '/images/anggota2.jpg',
                },
            ],
        },
    ],

    program_kerja: [
        {
            id: 1,
            nama: 'Workshop Web Development',
            slug: 'workshop-web-dev',
            tanggal: '2025-10-15',
            thumbnail: '/images/proker/workshop.jpg',
            deskripsi: 'Workshop pengembangan web...',
            divisi: {
                id: 1,
                nama: 'PSDM',
            },
        },
    ],
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
export default function DetailKabinet() {
    const [kabinet, setKabinet] = useState(dummyKabinet);
    const [kabinetList, setKabinetList] = useState(dummykabinetList);
    // Apply color theme
    const themeStyle = {
        '--primary-color': kabinet.primary_color,
        '--secondary-color': kabinet.secondary_color,
    };

    return (
        <PublicLayout kabinet={kabinet} kabinetList={kabinetList}>
            <div style={themeStyle}>
                {/* Hero Section */}
                <section
                    className="relative overflow-hidden text-white"
                    style={{
                        background: `linear-gradient(to bottom right, ${kabinet.primary_color}, ${kabinet.secondary_color})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            {/* Logo Kabinet */}
                            <div className="flex justify-center">
                                <img
                                    src={kabinet.logo || '/images/default-kabinet.png'}
                                    alt={`Kabinet ${kabinet.nama}`}
                                    className="h-auto w-full max-w-md"
                                />
                            </div>

                            {/* Info Kabinet */}
                            <div>
                                <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                                    Periode {kabinet.periode}
                                </div>
                                <h1 className="mb-4 text-4xl font-bold md:text-5xl">Kabinet {kabinet.nama}</h1>
                                {kabinet.tagline && <p className="mb-6 text-xl font-medium text-white/90 md:text-2xl">"{kabinet.tagline}"</p>}
                                {kabinet.deskripsi && <p className="leading-relaxed text-white/90">{kabinet.deskripsi}</p>}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Makna, Visi, Misi */}
                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Makna */}
                        {kabinet.makna && (
                            <div className="rounded-xl border-t-4 bg-white p-8 shadow-lg" style={{ borderColor: kabinet.primary_color }}>
                                <div className="mb-4 flex items-center">
                                    <div className="mr-4 rounded-lg p-3" style={{ backgroundColor: `${kabinet.primary_color}20` }}>
                                        <svg
                                            className="h-8 w-8"
                                            style={{ color: kabinet.primary_color }}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Makna</h3>
                                </div>
                                <p className="leading-relaxed text-gray-700">{kabinet.makna}</p>
                            </div>
                        )}

                        {/* Visi */}
                        <div className="rounded-xl border-t-4 bg-white p-8 shadow-lg" style={{ borderColor: kabinet.primary_color }}>
                            <div className="mb-4 flex items-center">
                                <div className="mr-4 rounded-lg p-3" style={{ backgroundColor: `${kabinet.primary_color}20` }}>
                                    <svg
                                        className="h-8 w-8"
                                        style={{ color: kabinet.primary_color }}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
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
                            <p className="leading-relaxed text-gray-700">{kabinet.visi}</p>
                        </div>

                        {/* Misi */}
                        <div className="rounded-xl border-t-4 bg-white p-8 shadow-lg" style={{ borderColor: kabinet.primary_color }}>
                            <div className="mb-4 flex items-center">
                                <div className="mr-4 rounded-lg p-3" style={{ backgroundColor: `${kabinet.primary_color}20` }}>
                                    <svg
                                        className="h-8 w-8"
                                        style={{ color: kabinet.primary_color }}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
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
                            <p className="leading-relaxed text-gray-700">{kabinet.misi}</p>
                        </div>
                    </div>
                </section>

                {/* Pengurus Inti */}
                <section className="bg-gray-50 py-16 md:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Pengurus Inti</h2>
                            <p className="text-gray-600">Struktur kepemimpinan Kabinet {kabinet.nama}</p>
                        </div>

                        {kabinet.pengurus_inti && (
                            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Ketua */}
                                {kabinet.pengurus_inti.ketua && (
                                    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                                        <div className="aspect-square overflow-hidden bg-gray-200">
                                            <img
                                                src={kabinet.pengurus_inti.ketua.foto || '/images/default-avatar.png'}
                                                alt={kabinet.pengurus_inti.ketua.nama}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <div
                                                className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold"
                                                style={{ backgroundColor: `${kabinet.primary_color}20`, color: kabinet.primary_color }}
                                            >
                                                Ketua
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{kabinet.pengurus_inti.ketua.nama}</h3>
                                            {kabinet.pengurus_inti.ketua.nim && (
                                                <p className="text-sm text-gray-500">{kabinet.pengurus_inti.ketua.nim}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Wakil Ketua */}
                                {kabinet.pengurus_inti.wakil_ketua && (
                                    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                                        <div className="aspect-square overflow-hidden bg-gray-200">
                                            <img
                                                src={kabinet.pengurus_inti.wakil_ketua.foto || '/images/default-avatar.png'}
                                                alt={kabinet.pengurus_inti.wakil_ketua.nama}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <div
                                                className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold"
                                                style={{ backgroundColor: `${kabinet.primary_color}20`, color: kabinet.primary_color }}
                                            >
                                                Wakil Ketua
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{kabinet.pengurus_inti.wakil_ketua.nama}</h3>
                                            {kabinet.pengurus_inti.wakil_ketua.nim && (
                                                <p className="text-sm text-gray-500">{kabinet.pengurus_inti.wakil_ketua.nim}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Sekretaris 1 */}
                                {kabinet.pengurus_inti.sekretaris_1 && (
                                    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                                        <div className="aspect-square overflow-hidden bg-gray-200">
                                            <img
                                                src={kabinet.pengurus_inti.sekretaris_1.foto || '/images/default-avatar.png'}
                                                alt={kabinet.pengurus_inti.sekretaris_1.nama}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <div
                                                className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold"
                                                style={{ backgroundColor: `${kabinet.primary_color}20`, color: kabinet.primary_color }}
                                            >
                                                Sekretaris 1
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{kabinet.pengurus_inti.sekretaris_1.nama}</h3>
                                            {kabinet.pengurus_inti.sekretaris_1.nim && (
                                                <p className="text-sm text-gray-500">{kabinet.pengurus_inti.sekretaris_1.nim}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Sekretaris 2 */}
                                {kabinet.pengurus_inti.sekretaris_2 && (
                                    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                                        <div className="aspect-square overflow-hidden bg-gray-200">
                                            <img
                                                src={kabinet.pengurus_inti.sekretaris_2.foto || '/images/default-avatar.png'}
                                                alt={kabinet.pengurus_inti.sekretaris_2.nama}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <div
                                                className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold"
                                                style={{ backgroundColor: `${kabinet.primary_color}20`, color: kabinet.primary_color }}
                                            >
                                                Sekretaris 2
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{kabinet.pengurus_inti.sekretaris_2.nama}</h3>
                                            {kabinet.pengurus_inti.sekretaris_2.nim && (
                                                <p className="text-sm text-gray-500">{kabinet.pengurus_inti.sekretaris_2.nim}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Bendahara 1 */}
                                {kabinet.pengurus_inti.bendahara_1 && (
                                    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                                        <div className="aspect-square overflow-hidden bg-gray-200">
                                            <img
                                                src={kabinet.pengurus_inti.bendahara_1.foto || '/images/default-avatar.png'}
                                                alt={kabinet.pengurus_inti.bendahara_1.nama}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <div
                                                className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold"
                                                style={{ backgroundColor: `${kabinet.primary_color}20`, color: kabinet.primary_color }}
                                            >
                                                Bendahara 1
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{kabinet.pengurus_inti.bendahara_1.nama}</h3>
                                            {kabinet.pengurus_inti.bendahara_1.nim && (
                                                <p className="text-sm text-gray-500">{kabinet.pengurus_inti.bendahara_1.nim}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Bendahara 2 */}
                                {kabinet.pengurus_inti.bendahara_2 && (
                                    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                                        <div className="aspect-square overflow-hidden bg-gray-200">
                                            <img
                                                src={kabinet.pengurus_inti.bendahara_2.foto || '/images/default-avatar.png'}
                                                alt={kabinet.pengurus_inti.bendahara_2.nama}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 text-center">
                                            <div
                                                className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold"
                                                style={{ backgroundColor: `${kabinet.primary_color}20`, color: kabinet.primary_color }}
                                            >
                                                Bendahara 2
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{kabinet.pengurus_inti.bendahara_2.nama}</h3>
                                            {kabinet.pengurus_inti.bendahara_2.nim && (
                                                <p className="text-sm text-gray-500">{kabinet.pengurus_inti.bendahara_2.nim}</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>

                {/* Divisi-divisi */}
                {kabinet.divisi && kabinet.divisi.length > 0 && (
                    <section className="py-16 md:py-20">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Divisi</h2>
                                <p className="text-gray-600">Struktur divisi dan anggota Kabinet {kabinet.nama}</p>
                            </div>

                            <div className="space-y-16">
                                {kabinet.divisi.map((divisi, index) => (
                                    <div key={divisi.id}>
                                        {/* Divisi Header */}
                                        <div className="mb-8 text-center">
                                            <div
                                                className="mb-3 inline-block rounded-full px-6 py-2 text-lg font-bold text-white"
                                                style={{ backgroundColor: kabinet.primary_color }}
                                            >
                                                {divisi.nama}
                                            </div>
                                            {divisi.deskripsi && <p className="mx-auto max-w-3xl text-gray-600">{divisi.deskripsi}</p>}
                                        </div>

                                        {/* Kepala Divisi */}
                                        {divisi.kepala_divisi && (
                                            <div className="mb-8">
                                                <h4 className="mb-6 text-center text-sm font-semibold text-gray-500">KEPALA DIVISI</h4>
                                                <div className="flex justify-center">
                                                    <div className="group w-64 overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-xl">
                                                        <div className="aspect-square overflow-hidden bg-gray-200">
                                                            <img
                                                                src={divisi.kepala_divisi.foto || '/images/default-avatar.png'}
                                                                alt={divisi.kepala_divisi.nama}
                                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                                            />
                                                        </div>
                                                        <div className="p-6 text-center">
                                                            <h3 className="text-lg font-bold text-gray-900">{divisi.kepala_divisi.nama}</h3>
                                                            {divisi.kepala_divisi.nim && (
                                                                <p className="text-sm text-gray-500">{divisi.kepala_divisi.nim}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Anggota Divisi */}
                                        {divisi.anggota && divisi.anggota.length > 0 && (
                                            <div>
                                                <h4 className="mb-6 text-center text-sm font-semibold text-gray-500">ANGGOTA</h4>
                                                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                                    {divisi.anggota.map((anggota) => (
                                                        <div
                                                            key={anggota.id}
                                                            className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg"
                                                        >
                                                            <div className="aspect-square overflow-hidden bg-gray-200">
                                                                <img
                                                                    src={anggota.foto || '/images/default-avatar.png'}
                                                                    alt={anggota.nama}
                                                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                                                                />
                                                            </div>
                                                            <div className="p-4 text-center">
                                                                <h3 className="mb-1 text-sm font-semibold text-gray-900">{anggota.nama}</h3>
                                                                {anggota.nim && <p className="text-xs text-gray-500">{anggota.nim}</p>}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Divider */}
                                        {index < kabinet.divisi.length - 1 && <div className="mt-16 border-t-2 border-gray-200"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Program Kerja */}
                {kabinet.program_kerja && kabinet.program_kerja.length > 0 && (
                    <section className="bg-gray-50 py-16 md:py-20" id="proker">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Program Kerja</h2>
                                <p className="text-gray-600">Kegiatan dan program yang dilaksanakan Kabinet {kabinet.nama}</p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {kabinet.program_kerja.map((proker) => (
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
                                            <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
                                                <div className="flex items-center">
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
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })}
                                                </div>
                                                {proker.divisi && (
                                                    <span
                                                        className="rounded-full px-3 py-1 text-xs font-semibold"
                                                        style={{ backgroundColor: `${kabinet.primary_color}20`, color: kabinet.primary_color }}
                                                    >
                                                        {proker.divisi.nama}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="mb-2 line-clamp-2 text-xl font-bold text-gray-900 transition group-hover:text-emerald-600">
                                                {proker.nama}
                                            </h3>
                                            <p className="line-clamp-2 text-sm text-gray-600">{proker.deskripsi}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </PublicLayout>
    );
}
