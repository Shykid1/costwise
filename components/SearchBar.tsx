"use client";

import { FormEvent, useState } from "react";
import { scrapeAndStoreProduct } from "../lib/actions";

const isValidAmazoneProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.includes("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

const SearchBar = () => {
  const [searchPrompt, setSearchPromt] = useState("");
  const [isLording, setIsLording] = useState(false);

  const hundleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazoneProductURL(searchPrompt);

    if (!isValidLink) return alert("Please provide a valid Amazone link.");

    try {
      setIsLording(true);

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLording(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={hundleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPromt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {isLording ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
