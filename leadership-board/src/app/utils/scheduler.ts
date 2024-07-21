import cron from "node-cron";
import { updateDepartmentRanking } from "../service/DepartmentService";
import { updateTodayTrending } from "../service/BookService";

export const updateDepartmentRankingDaily = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("Updating department ranking...");
    const today = new Date();
    const dayNumber = today.getDay();
    await updateDepartmentRanking(dayNumber);
  });
};

export const updateTodayTrendingHourly = () => {
  cron.schedule("0 * * * *", async () => {
    console.log("Updating today trending...");
    await updateTodayTrending();
  });
};

updateDepartmentRankingDaily();
updateTodayTrendingHourly();
