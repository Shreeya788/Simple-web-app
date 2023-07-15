import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Card from "./card";

const DataList = (props) => {
  const [data, setData] = useState([]);
  const clickedData = props.clickedData
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleKeywordClick = (keyword) => {
    // console.log(keyword);
    props.handleClick(keyword);
 
  };

  const filteredData = clickedData.length > 0
    ? data.filter((item) =>
        clickedData.every((clickedItem) =>
          item.keywords.includes(clickedItem)
        )
      )
    : data;

  return (
    <>
      
      {data && data.length > 0 ? (
        filteredData.map((item) => (
          <Card
            key={item.posted_on}
            data={item}
            handleClick={handleKeywordClick}
          />
        ))
      ) : (
        <div>Loading ....</div>
      )}
    </>
  );
};

export default DataList;
