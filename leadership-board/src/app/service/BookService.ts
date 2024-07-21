import { listOfBooks } from "../data/BookData";
import { writeToFile } from "./fileUtil";

export const updateTodayTrending = async () => {
  listOfBooks.map((book) => {
    book.downloads = book.downloads + Math.floor(Math.random() * 11);
  });
  const todayTrending = listOfBooks.reduce((prev, current) =>
    prev.downloads! > current.downloads! ? prev : current
  );
  await writeToFile("todayTrending.json", todayTrending);
  await writeToFile("monthlyPopular.json", todayTrending);
  await writeToFile("weeklyPopular.json", todayTrending);
};
