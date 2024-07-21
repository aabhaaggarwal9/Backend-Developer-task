"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Department from "../models/Department";

const DepartmentLeadership = () => {
  const [lastWeekWinner, setLastWeekWinner] = useState<Department>();
  const [top5Department, setTop5Department] = useState<Department[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("/api/popularDepartment");
        setLastWeekWinner(response.data.lastWeekWinner);
        setTop5Department(response.data.top5Department);
      } catch (error) {
        setError("Failed to fetch popular books");
      }
    };

    fetchDepartments();
  }, []);

  if (error) {
    <>{error}</>;
  }

  return (
    <div>
      <h2>Last Week Winner</h2>
      <p>{lastWeekWinner?.name}</p>
      <p>With downloads : {lastWeekWinner?.downloads}</p>
      <br />
      <hr />
      <h2>Top 5 Departments</h2>
      {top5Department.map((department, index) => (
        <div key={department.name}>
          <p>
            Rank {index + 1}. {department.name} - {department.downloads}{" "}
            downloads
          </p>
        </div>
      ))}
    </div>
  );
};

export default DepartmentLeadership;
