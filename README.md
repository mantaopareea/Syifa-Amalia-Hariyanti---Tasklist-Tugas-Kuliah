Tasklist Tugas Kuliah

Aplikasi web untuk mengelola daftar tugas kuliah menggunakan Express.js dan MySQL.

Features
- Create, Read, Update, Delete (CRUD) tugas kuliah.
- Menambahkan nama tugas, mata kuliah, deadline, dan status.
- Mengubah dan menghapus tugas.
- Dashboard ringkasan tugas.
- Progress penyelesaian tugas.
- Pomodoro timer untuk membantu fokus belajar.

Tech Stack
- Node.js
- Express.js
- MySQL
- EJS
- CSS

Database
Nama database: `db_tugas_kuliah`
Nama tabel: `daftar_tugas`
Kolom:
- `id_tugas`
- `nama_tugas`
- `mata_kuliah`
- `deadline`
- `status`

Installation

1. Clone repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat database MySQL bernama `db_tugas_kuliah`.
4. Buat tabel sesuai struktur database.
5. Sesuaikan konfigurasi koneksi database di `app.js`.
6. Jalankan aplikasi:

   ```bash
   npx nodemon app.js
   ```

7. Buka `http://localhost:3000` di browser.
