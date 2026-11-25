
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_tugas_kuliah'
});

db.connect((err) => {
    if (err) {
        console.log('Koneksi database gagal:', err);
    } else {
        console.log('Database berhasil terhubung!');
    }
});


// READ - Menampilkan semua tugas
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM daftar_tugas ORDER BY deadline ASC';

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('index', { tugas: results });
    });
});

// CREATE - Menambahkan tugas
app.post('/tambah', (req, res) => {
    const { nama_tugas, mata_kuliah, deadline, status } = req.body;

    const sql = 'INSERT INTO daftar_tugas (nama_tugas, mata_kuliah, deadline, status) VALUES (?, ?, ?, ?)';

    db.query(sql, [nama_tugas, mata_kuliah, deadline, status], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// UPDATE - Menampilkan halaman edit
app.get('/edit/:id', (req, res) => {
    const sql = 'SELECT * FROM daftar_tugas WHERE id_tugas = ?';

    db.query(sql, [req.params.id], (err, results) => {
        if (err) throw err;
        if (results.length === 0) return res.redirect('/');

        res.render('edit', { tugas: results[0] });
    });
});

// UPDATE - Menyimpan perubahan
app.post('/edit/:id', (req, res) => {
    const { nama_tugas, mata_kuliah, deadline, status } = req.body;

    const sql = `UPDATE daftar_tugas
                 SET nama_tugas = ?, mata_kuliah = ?,
                 deadline = ?, status = ?
                 WHERE id_tugas = ?`;

    db.query(sql, [
        nama_tugas,
        mata_kuliah,
        deadline,
        status,
        req.params.id
    ], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// DELETE - Menghapus tugas
app.post('/hapus/:id', (req, res) => {
    const sql = 'DELETE FROM daftar_tugas WHERE id_tugas = ?';

    db.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Menjalankan server
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
