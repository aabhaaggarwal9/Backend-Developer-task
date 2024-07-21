"use client";

import { useEffect, useState } from "react";
import Book from "../models/Book";
import axios from "axios";

const BookLeadership = () => {
  const [weeklyPopular, setWeeklyPopular] = useState<Book>();
  const [monthlyPopular, setMonthlyPopular] = useState<Book>();
  const [todayTrending, setTodayTrending] = useState<Book>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/api/popularBook");
        setWeeklyPopular(response.data.weeklyPopular);
        setMonthlyPopular(response.data.monthlyPopular);
        setTodayTrending(response.data.todayTrending);
      } catch (error) {
        setError("Failed to fetch popular books");
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <>{error}</>;
  }

  return (
    <div>
      <h2>Monthly Popular</h2>
      <div className="container">
        <p>{monthlyPopular?.title}</p>
        <p> by - {monthlyPopular?.author}</p>
        <p> downloaded by: {monthlyPopular?.downloads} people</p>
      </div>
      <br />
      <hr />
      <h2>Weekly Popular</h2>
      <div className="container">
        <p>{weeklyPopular?.title}</p>
        <p> by - {weeklyPopular?.author}</p>
        <p> downloaded by: {weeklyPopular?.downloads} people</p>
      </div>
      <br />
      <hr />
      <h2>Today Trending</h2>
      <div className="container">
        <p>{todayTrending?.title}</p>
        <p> by - {todayTrending?.author}</p>
        <p> downloaded by: {todayTrending?.downloads} people</p>
      </div>
    </div>
  );
};

export default BookLeadership;
