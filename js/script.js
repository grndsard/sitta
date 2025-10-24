/**
 * File script.js - Logic dan data utama aplikasi UT Bahan Ajar
 * Berisi data dummy, fungsi validasi, dan utility functions
 */

/**
 * Data pengguna untuk autentikasi login
 * Berisi kredensial admin dan UT daerah
 */
const users = [
    { email: "admin@ut.ac.id", password: "admin123" },
    { email: "utdaerah@ut.ac.id", password: "utdaerah123" }
];

/**
 * Data bahan ajar dengan informasi stok dan harga
 * Array ini digunakan untuk menampilkan dan mengelola stok bahan ajar
 */
const dataBahanAjar = [
    { kode: "MKDU4110", nama: "Bahasa Indonesia", stok: 150, harga: 45000 },
    { kode: "MKDU4111", nama: "Pendidikan Kewarganegaraan", stok: 200, harga: 50000 },
    { kode: "MKDU4112", nama: "Ilmu Alamiah Dasar", stok: 10, harga: 55000 },
    { kode: "MKDU4113", nama: "Ilmu Sosial Budaya Dasar", stok: 0, harga: 48000 },
    { kode: "MKDU4221", nama: "Statistika", stok: 80, harga: 60000 }
];

/**
 * Data delivery orders untuk tracking pengiriman
 * Object dengan nomor DO sebagai key dan detail pengiriman sebagai value
 */
const deliveryOrders = {
    "JNE001": {
        namaMahasiswa: "Ahmad Rizki",
        status: "Dalam Perjalanan",
        progress: 75,
        ekspedisi: "JNE Express",
        tanggalKirim: "2025-10-15",
        jenispaket: "Hemat",
        totalPembayaran: 150000
    },
    "POS001": {
        namaMahasiswa: "Siti Nurhaliza",
        status: "Terkirim",
        progress: 100,
        ekspedisi: "Pos Indonesia",
        tanggalKirim: "2025-10-10",
        jenispaket: "Express",
        totalPembayaran: 200000
    },
    "TIKI001": {
        namaMahasiswa: "Budi Santoso",
        status: "Diproses",
        progress: 25,
        ekspedisi: "TIKI",
        tanggalKirim: "2025-10-20",
        jenispaket: "Reguler",
        totalPembayaran: 175000
    }
};

/**
 * Fungsi untuk memvalidasi kredensial login pengguna
 * @param {string} email - Email pengguna
 * @param {string} password - Password pengguna
 * @returns {Object|undefined} Data pengguna jika valid, undefined jika tidak
 */
function validateLogin(email, password) {
    return users.find(user => user.email === email && user.password === password);
}

/**
 * Fungsi untuk mendapatkan sapaan berdasarkan waktu saat ini
 * @returns {string} Sapaan sesuai waktu (Pagi/Siang/Sore/Malam)
 */
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Selamat Pagi";
    if (hour < 15) return "Selamat Siang";
    if (hour < 18) return "Selamat Sore";
    return "Selamat Malam";
}

/**
 * Fungsi untuk mencari data delivery order berdasarkan nomor DO
 * @param {string} doNumber - Nomor delivery order
 * @returns {Object|null} Data delivery order jika ditemukan, null jika tidak
 */
function searchDeliveryOrder(doNumber) {
    return deliveryOrders[doNumber] || null;
}

/**
 * Fungsi untuk menambahkan bahan ajar baru ke dalam array dataBahanAjar
 * @param {string} kode - Kode bahan ajar
 * @param {string} nama - Nama bahan ajar
 * @param {string|number} stok - Jumlah stok
 * @param {string|number} harga - Harga bahan ajar
 */
function addBahanAjar(kode, nama, stok, harga) {
    dataBahanAjar.push({ kode, nama, stok: parseInt(stok), harga: parseInt(harga) });
}

/**
 * Fungsi untuk memformat angka menjadi format mata uang Rupiah
 * @param {number} amount - Jumlah uang yang akan diformat
 * @returns {string} String dalam format Rupiah (Rp xxx.xxx)
 */
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(amount);
}