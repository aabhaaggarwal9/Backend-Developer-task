import Book from "./Book";

class Department {
  name!: string;
  downloads: number | undefined;
  books: Book[] | undefined;

  constructor(name: string, books: Book[], downloads: number) {
    this.name = name;
    this.downloads = downloads;
    this.books = books;
  }
}

export default Department;
