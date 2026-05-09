// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan


// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca


// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import Book from "../types";
import books from "../data/books";

// --- Menambahkan buku baru ke dalam daftar buku --- //
export function addBook( book: Book ): void {
  books.push(book); //--push untuk menambahkan data buku baru ke akhir daftar buku--/
  console.log(`Buku berhasil ditambahkan : "${book.title}" oleh ${book.author} ( ${book.publicationYear} )`)
}

// --- Menampilkan semua buku yang tersimpan --- //
export function listBooks(): void {
  if ( books.length === 0 ) { //--jika tidak ada isi dalam daftar buku--//
    console.log(`Belum ada buku yang tersimpan`) 
    return; //--return hanya untuk menghentikan eksekusi fungsi lebih awal--//
  } 
  console.log('\nDaftar semua buku :') //--\n untukpengosongan line sebelumnya--//
  books.forEach((book, index) => { //--forEach untuk mengolah setiap data dalam daftar buku--//
    console.log(`${index + 1}. ${book.title}`); //--3 baris console.log supaya rapi--//
    console.log(`   Pengarang    : ${book.author}`);
    console.log(`   Tahun Terbit : ${book.publicationYear}`);
  })  
}

// --- Mencari buku berdasarkan judul (case-insensitive) --- //
// --- Jika tidak ada keyword yang diberikan, tampilkan semua buku --- //
export function searchBook( title?: string ): void {

  if ( !title || title.trim() === '' ) { //--trim() untuk menghilangkan spasi di depan dan belakang keyword yg mungkin ada karena kesengajaan atau ketidaksengajaan--//
    console.log('\nAnda tidak memasukkan keyword yang dicari, menampilkan semua buku :')
    listBooks(); //--memanggil fungsi listBooks() untuk menampilkan semua data buku--//
    return; //--return hanya untuk menghentikan eksekusi fungsi lebih awal--//
  }

  // --pemisahan menjadi 2 variabel agar parameter dalam includes tidak terlalu panjang--//
  const keywordTitle = title.toLowerCase().trim(); //--penambahan trim() selain hanya memakai toLowerCase() agar adanya spasi di depan atau di belakang keyword tidak mengacaukan eksekusi fungsi--//
  const filteredBook = books.filter(book => book.title.toLowerCase().includes(keywordTitle)
  ) //--filter() digunakan untuk mencari data yang sesuai dengan keyword--//

  if ( filteredBook.length === 0 ) { //--jika hasil filter tdk ada yg sesuai dgn keyword--//
    console.log(`\nTidak ditemukan buku dengan judul mengandung keyword "${title}".`)
    return; 
  }

  // --jika 2 kondisi "if" di atas tidak terpenuhi maka dibawah ini yang akan dieksekusi-- //
  console.log(`\nHasil pencarian dengan keyword "${title}" (${filteredBook.length} ditemukan) :`);

  filteredBook.forEach((book, index) => { //--forEach() untuk mengolah setiap data hasil filter--//
    console.log(`${index + 1}. ${book.title}`);
    console.log(`   Pengarang    : ${book.author}`);
    console.log(`   Tahun Terbit : ${book.publicationYear}`);
  })
}
