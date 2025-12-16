import PublicLayout from '@/layouts/public';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
const dummyaspirasi = [
    {
        id: 1,
        nama: 'John Doe',
        email: 'john@example.com', // optional
        pesan: 'Aspirasi atau pesan yang disampaikan...',
        created_at: '2025-11-13T10:30:00',
    },
];
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
export default function AspirationPage({ flash }) {
    const [aspirasi, setAspirasi] = useState(dummyaspirasi);
    const [kabinetList, setKabinetList] = useState(dummykabinetList);
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        email: '',
        pesan: '',
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/aspirasi', {
            onSuccess: () => {
                reset();
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 5000);
            },
        });
    };

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
                        <h1 className="mb-6 text-5xl font-bold md:text-6xl">Aspirasi Publik</h1>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-emerald-50 md:text-2xl">
                            Sampaikan aspirasi, saran, atau kritik membangun untuk kemajuan ASSETS dan TRPL
                        </p>
                    </div>
                </div>
            </section>

            {/* Guidelines */}
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-6">
                    <div className="flex items-start">
                        <svg className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div>
                            <h3 className="mb-2 font-semibold text-emerald-900">Pedoman Aspirasi</h3>
                            <ul className="space-y-1 text-sm text-emerald-800">
                                <li>• Aspirasi Anda akan langsung dipublikasikan setelah dikirim</li>
                                <li>• Gunakan bahasa yang sopan dan membangun</li>
                                <li>• Hindari konten yang mengandung SARA atau offensive</li>
                                <li>• Aspirasi yang tidak sesuai pedoman akan dihapus oleh admin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Form Aspirasi */}
                    <div>
                        <div className="sticky top-24 rounded-xl bg-white p-8 shadow-lg">
                            <h2 className="mb-6 text-2xl font-bold text-gray-900">Kirim Aspirasi</h2>

                            {/* Success Alert */}
                            {showSuccess && (
                                <div className="mb-6 flex items-start rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
                                    <svg className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-semibold">Aspirasi berhasil dikirim!</p>
                                        <p className="text-sm">Terima kasih atas aspirasi Anda.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                {/* Nama */}
                                <div className="mb-6">
                                    <label htmlFor="nama" className="mb-2 block text-sm font-semibold text-gray-700">
                                        Nama <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        value={data.nama}
                                        onChange={(e) => setData('nama', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Masukkan nama Anda"
                                        required
                                    />
                                    {errors.nama && <p className="mt-1 text-sm text-red-500">{errors.nama}</p>}
                                </div>

                                {/* Email */}
                                <div className="mb-6">
                                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                                        Email <span className="text-xs text-gray-400">(Opsional)</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                        placeholder="email@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>

                                {/* Pesan */}
                                <div className="mb-6">
                                    <label htmlFor="pesan" className="mb-2 block text-sm font-semibold text-gray-700">
                                        Aspirasi/Pesan <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="pesan"
                                        value={data.pesan}
                                        onChange={(e) => setData('pesan', e.target.value)}
                                        rows="6"
                                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Tuliskan aspirasi, saran, atau kritik membangun Anda di sini..."
                                        required
                                    ></textarea>
                                    {errors.pesan && <p className="mt-1 text-sm text-red-500">{errors.pesan}</p>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {processing ? (
                                        <span className="flex items-center justify-center">
                                            <svg
                                                className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Mengirim...
                                        </span>
                                    ) : (
                                        'Kirim Aspirasi'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Daftar Aspirasi */}
                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">Aspirasi dari Mahasiswa</h2>

                        {aspirasi && aspirasi.length > 0 ? (
                            <div className="space-y-4">
                                {aspirasi.map((item) => (
                                    <div key={item.id} className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
                                        <div className="mb-3 flex items-start justify-between">
                                            <div className="flex items-center">
                                                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                                                    {item.nama.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{item.nama}</h3>
                                                    <p className="text-xs text-gray-500">
                                                        {new Date(item.created_at).toLocaleDateString('id-ID', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="leading-relaxed whitespace-pre-line text-gray-700">{item.pesan}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-xl bg-white p-12 text-center shadow-md">
                                <svg className="mx-auto mb-4 h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                </svg>
                                <h3 className="mb-2 text-lg font-semibold text-gray-700">Belum Ada Aspirasi</h3>
                                <p className="text-sm text-gray-500">Jadilah yang pertama menyampaikan aspirasi</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
