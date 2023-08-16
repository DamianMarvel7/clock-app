import React, { useEffect, useState } from "react";
import { fetchData } from "../fetch/Worldtime";

const TimeExpand = () => {
  const [timezone, setTimezone] = useState();
  const [doty, setDoty] = useState();
  const [dotw, setDotw] = useState();
  const [weekNumber, setWeekNumber] = useState();

  useEffect(() => {
    const fetchTimeData = async () => {
      try {
        const json = await fetchData("http://worldtimeapi.org/api/ip");
        const timezone = json.timezone;
        const dayOfYear = json.day_of_year;
        const dayOfWeek = json.day_of_week;
        const weekNumber = json.week_number;
        // console.log(json);
        setTimezone(timezone);
        setDoty(dayOfYear);
        setDotw(dayOfWeek);
        setWeekNumber(weekNumber);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchTimeData();
  }, []);

  return (
    <div className="time-expand">
      <div className="time-expand-content container">
        <p>
          <span className="category h6">current timezone </span>
          <span className="value h5">{timezone}</span>
        </p>
        <p>
          <span className="category h6">day of the year </span>
          <span className="value h5">{doty}</span>
        </p>
        <p>
          <span className="category h6">day of the week </span>
          <span className="value h5">{dotw}</span>
        </p>
        <p>
          <span className="category h6">week number </span>
          <span className="value h5">{weekNumber}</span>
        </p>
      </div>
    </div>
  );
};

export default TimeExpand;
