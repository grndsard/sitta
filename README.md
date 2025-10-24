# UT Bahan Ajar - Sistem Pemesanan Bahan Ajar

Aplikasi web untuk sistem pemesanan dan manajemen bahan ajar Universitas Terbuka.

## Fitur Utama

- **Login System** - Autentikasi pengguna dengan validasi
- **Dashboard** - Menu utama dengan berbagai fitur
- **Manajemen Stok** - Kelola data bahan ajar dan stok
- **Tracking Pengiriman** - Lacak status delivery order
- **Laporan** - Monitoring progress dan rekap data

## Teknologi

- HTML5
- CSS3 (Grid, Flexbox, Responsive Design)
- JavaScript (Vanilla JS)
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
- Tambah bahan ajar baru dengan validasi
- Tabel stok dengan status (Tersedia/Menipis/Habis)
- Statistik stok real-time
- Validasi duplikasi kode dan nama

### Tracking Pengiriman
- Pencarian berdasarkan nomor DO
- Progress bar animasi
- Detail informasi lengkap pengiriman

## Validasi & Fitur Keamanan

- Session management dengan localStorage
- Validasi form input
- Duplikasi check untuk kode dan nama bahan ajar
- Auto-redirect jika belum login

## Browser Support

- Chrome (Recommended)
- Firefox
- Safari
- Edge

## Author

Grandis Ardana A F - Praktik STSI4209 Pemrograman Berbasis Web - Universitas Terbuka