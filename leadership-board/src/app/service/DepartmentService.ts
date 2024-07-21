import { departments } from "../data/DepartmentData";
import { readFromFile, writeToFile } from "./fileUtil";

export const updateDepartmentRanking = async (dayNumber: number) => {
  departments.forEach((department) => {
    department.downloads = department.books?.reduce(
      (total, book) => total + book.downloads,
      0
    );
  });
  const top5Departments = departments
    .slice()
    .sort((a, b) => b.downloads! - a.downloads!)
    .slice(0, 5);
  await writeToFile("top5Department.json", top5Departments);
  if (dayNumber == 1) {
    const lastWeekWinner = departments.reduce((prev, current) =>
      prev.downloads! > current.downloads! ? prev : current
    );
  }
};
