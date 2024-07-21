class Book {
  id!: number;
  title!: string;
  author!: string;
  downloads!: number;

  constructor(id: number, title: string, author: string, downloads: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.downloads = downloads;
  }
}

export default Book;
