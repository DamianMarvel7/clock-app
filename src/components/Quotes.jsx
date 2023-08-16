import React, { useEffect, useState } from "react";
import { fetchData } from "../fetch/Worldtime";
import { convertName } from "../helper";
import iconRefresh from "../assets/desktop/icon-refresh.svg";

const Quotes = () => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  const fetchRandomQuote = async () => {
    try {
      const json = await fetchData("https://api.quotable.io/random");
      setQuote(json.content);
      setAuthor(convertName(json.authorSlug));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRandomQuote(); // Call fetchRandomQuote here to load initial quote
  }, []);
  return (
    <div className="quote container flex">
      <div className="quote-content flow">
        <p>{quote}</p>
        <p className="h5">{author}</p>
      </div>
      <img src={iconRefresh} alt="" onClick={fetchRandomQuote} />
    </div>
  );
};

export default Quotes;
