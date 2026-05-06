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

import { Book } from "../types";
import { books } from "../data/books";

export function addBook( book: Book ): void {
  books.push(book);
  console.log(`Buku berhasil ditambahkan : "${book.title}" oleh ${book.author} ( ${book.publicationYear} )`)
}

export function listBooks(): void {
  if ( books.length === 0 ) {
    console.log(`Belum ada buku yang tersimpan`)
  } else {
    console.log('\nDaftar semua buku :')
    books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title}`);
      console.log(`   Pengarang    : ${book.author}`);
      console.log(`   Tahun Terbit : ${book.publicationYear}`);
    })
  }
}

export function searchBook( title?: string ): void {
  if ( !title || title.trim() === '' ) {
    console.log('\nAnda tidak memasukkan keyword yang dicari, menampilkan semua buku :')
    listBooks();
    return;
  }

  const keywordTitle = title.toLowerCase().trim();
  const filteredBook = books.filter(book => book.title.toLowerCase().includes(keywordTitle)
  )

  if ( filteredBook.length === 0 ) {
    console.log(`\nTidak ditemukan buku dengan judul mengandung keyword "${title}".`)
    return;
  }

  console.log(`\nHasil pencarian dengan keyword "${title}" (${filteredBook.length} ditemukan) :`);

  filteredBook.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
    console.log(`   Pengarang    : ${book.author}`);
    console.log(`   Tahun Terbit : ${book.publicationYear}`);
  })
}
