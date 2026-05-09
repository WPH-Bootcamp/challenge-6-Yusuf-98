// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini

console.log("by - Yusuf AR\n")

import Book from "./types";
import books from "./data/books"; //--diperlukan oleh console.log(books) jika mau di running juga--//
import { addBook, listBooks, searchBook } from "./functions/bookManager";


// Membuat data dummy buku untuk testing //
const book1: Book = {
  title: "Laskar Pelangi",
  author: "Andrea Hirata",
  publicationYear: 2005
};

const book2: Book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  publicationYear: 2008
};

const book3: Book = {
  title: "Madilog",
  author: "Tan Malaka",
  publicationYear: 1951
};

// --- Test Aplikasi --- //

// 1. Menambahkan buku //
addBook(book1);
addBook(book2);
addBook(book3);

// Melihat dalam Array apakah penambahan buku sudah berhasil //
// console.log(books)

// 2. Uji fungsi listbook untuk melihat semua data //
listBooks();

// 3. Uji fungsi searchBook dengan keyword ditemukan //
searchBook('cle');

// 4. Uji fungsi searchBook dengan keyword tidak ditemukan //
searchBook('harry');

// 5. Uji funsi searchBook dengan keyword kosong / parameter tidak diberikan //
searchBook();