# UT Bahan Ajar - Sistem Pemesanan Bahan Ajar

Aplikasi web untuk sistem pemesanan dan manajemen bahan ajar Universitas Terbuka.

## Fitur Utama

- **Login System** - Autentikasi pengguna dengan validasi dan notifikasi
- **Dashboard** - Menu utama dengan layout 2x2 dan submenu dinamis
- **Manajemen Stok** - Kelola data bahan ajar dengan validasi duplikasi
- **Tracking Pengiriman** - Lacak status delivery order dengan progress bar animasi
- **Laporan** - Monitoring progress dan rekap data real-time

## Teknologi

- HTML5 dengan semantic markup
- CSS3 (Grid, Flexbox, Responsive Design, Material Design Blue Theme)
- JavaScript (Vanilla JS) dengan dokumentasi lengkap
- Local Storage untuk session management

## Cara Menjalankan

1. **Langsung di Browser:**
   - Buka file `index.html` di browser

2. **Dengan Live Server:**
   - Install extension "Live Server" di VS Code
   - Klik kanan `index.html` → "Open with Live Server"

3. **Dengan Python Server:**
   ```bash
   python -m http.server 8000
   ```

## Login Credentials

- **Admin:** `admin@ut.ac.id` / `admin123`
- **UT Daerah:** `utdaerah@ut.ac.id` / `utdaerah123`

## Struktur File

```
sitta-praktik/
├── index.html          # Halaman login
├── dashboard.html      # Dashboard utama
├── stok.html          # Manajemen stok bahan ajar
├── tracking.html      # Tracking pengiriman
├── css/
│   └── style.css      # Styling aplikasi
├── js/
│   └── script.js      # Logic dan data aplikasi
└── assets/            # Asset tambahan
```

## Fitur Detail

### Dashboard
- Greeting dinamis berdasarkan waktu
- Menu grid 2x2 layout
- Submenu laporan dengan monitoring dan rekap
- Histori transaksi

### Manajemen Stok
- Tambah bahan ajar baru dengan validasi lengkap
- Tabel stok dengan status color-coded (Tersedia/Menipis/Habis)
- Statistik stok real-time dalam satuan pcs
- Validasi duplikasi kode dan nama (case-insensitive)
- Validasi stok minimal > 0

### Tracking Pengiriman
- Pencarian berdasarkan nomor DO
- Progress bar animasi
- Detail informasi lengkap pengiriman

## Validasi & Fitur Keamanan

- Session management dengan localStorage
- Validasi form input dengan notifikasi popup
- Duplikasi check untuk kode dan nama bahan ajar
- Auto-redirect jika belum login
- Validasi stok tidak boleh 0 atau negatif

## Fitur Terbaru

- **UI/UX Improvements**: Material Design Blue theme
- **Enhanced Navigation**: Text links untuk navigasi yang lebih clean
- **Better Validation**: Validasi komprehensif dengan popup notifications
- **Responsive Footer**: Footer dengan credit developer
- **Bahasa Indonesia**: Terminologi konsisten (Kata Sandi, pcs, dll)

## Browser Support

- Chrome (Recommended)
- Firefox
- Safari
- Edge

## Author

Developed by Grandis Ardana A F  
Praktik STSI4209 Pemrograman Berbasis Web - Universitas Terbuka