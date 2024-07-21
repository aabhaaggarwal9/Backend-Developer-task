import Department from "../models/Department";
import { listOfBooks } from "./BookData";

export const departments = [
  new Department("Department One", listOfBooks.slice(0, 3), 100),
  new Department("Department Two", listOfBooks.slice(3, 6), 170),
  new Department("Department Three", listOfBooks.slice(6, 9), 180),
  new Department("Department Four", listOfBooks.slice(9, 12), 135),
  new Department("Department Five", listOfBooks.slice(12, 15), 165),
];
