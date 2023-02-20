import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigation } from "react-router-dom";

import style from "./NavSearch.module.css";
const NavSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchResultsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(e) {
      if (!searchResultsRef.current.contains(e.target)) {
        setShowResults(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchResultsRef]);

  useEffect(() => {
    setShowResults(false);
  }, [location]);

  const handleSearch = (text) => {
    setInputValue(text);

    if ((text = "")) {
      setShowResults(false);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className={style["nav_search"]}>
      <div className={style["nav_search_input"]}>
        <input
          ref={searchResultsRef}
          onChange={(e) => handleSearch(e.target.value)}
          value={inputValue}
          spellCheck="false"
          placeholder="Search"
          type="text"
        />
      </div>
    
      {showResults && (
        <div  className={style["nav_search_result"]}>
          {inputValue == "js" ? (
            <div className={style["list"]}>
              <Link to={"/search"}>
                <div className={style["list_item"]}>RESULT 1</div>
              </Link>
              <Link to={"/search"}>
                <div className={style["list_item"]}>RESULT 1</div>
              </Link>
              <Link to={"/search"}>
                <div className={style["list_item"]}>RESULT 1</div>
              </Link>
              <Link to={"/search"}>
                <div className={style["list_item"]}>RESULT 1</div>
              </Link>
              <Link to={"/search"}>
                <div className={style["list_item"]}>RESULT 1</div>
              </Link>
              <Link to={"/search"}>
                <div className={style["list_item"]}>RESULT 1</div>
              </Link>
              <Link to={"/search"}>
                <div
                  style={{ borderBottom: "none" }}
                  className={style["list_item"]}
                >
                  RESULT 1
                </div>
              </Link>
            </div>
          ) : (
            <div className={style["search_result_error"]}>
              NO RESULTS FOUND.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavSearch;
