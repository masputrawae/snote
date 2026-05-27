# snote

> kesederhanaan adalah kecanggihan tertinggi.

snote adalah sistem catatan berbasis web yang dibangun dengan [Astro](https://astro.build/). Dirancang dengan filosofi kesederhanaan radikal, jujur, dan apa adanya. Fokus utama adalah pada konten dan pengalaman membaca tanpa distraksi.

## Filosofi

- **Sederhana:** Menghilangkan semua elemen visual yang tidak esensial.
- **Jujur:** Menampilkan informasi apa adanya tanpa hiasan berlebih.
- **Efisien:** Ringan, cepat, dan mudah dikelola melalui Markdown.

## Fitur

- **Markdown Powered:** Tulis catatan Anda dalam Markdown di folder `vault/`.
- **Automatic Routing:** Struktur folder di `vault/` otomatis menjadi URL.
- **Minimalist Design:** Tipografi yang dioptimalkan untuk keterbacaan.
- **Dark Mode:** Mendukung skema warna gelap secara otomatis berdasarkan preferensi sistem.
- **Fast:** Dibangun dengan Astro untuk performa maksimal.

## Memulai

1. **Instalasi Dependensi:**
   ```bash
   pnpm install
   ```

2. **Menjalankan Server Pengembangan:**
   ```bash
   pnpm dev
   ```

3. **Menambah Catatan:**
   Tambahkan file `.md` atau `.mdx` baru di dalam direktori `vault/`.

4. **Membangun untuk Produksi:**
   ```bash
   pnpm build
   ```

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
