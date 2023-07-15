import React, { useEffect, useState } from "react";
import DataList from "../components/DataList";

const Main = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const handleKeywordClick = (keyword) => {
    setIsClicked(true);
    if (!clickedData.includes(keyword)) {
      setClickedData((prev) => [...prev, keyword]);
    }

    console.log(clickedData);
  };

  const handleClickData = (item) => {
    clickedData.includes(item) &&
      setClickedData(clickedData.filter((kw) => kw !== item));
  };

  useEffect(() => {
    if (clickedData.length === 0) {
      setIsClicked(false);
    }
  }, [clickedData]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-primary h-50"
        style={{ paddingTop: "50px", paddingBottom: "100px" }}
      >
        {/* Navbar content */}
      </nav>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white w-full h-40 flex items-end justify-center">
          {isClicked && (
            <div className=" w-80 h-16 shadow-xl bg-white flex items-center justify-between">
              <div className="flex flex-row">
                {clickedData.map((item) => (
                  <div
                    className="flex flex-col bg-white p-1 h-10 m-2 text-primary"
                    key={item}
                  >
                    {" "}
                    {item}
                    <button
                      onClick={() => handleClickData(item)}
                      className="btn btn-light text-primary hover:bg-slate-900 p-2 flex items-center justify-center text-2xl"
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
              <div className="p-2 mx-2">
                <button
                  onClick={() => {
                    setClickedData([]);
                    setIsClicked(false);
                  }}
                  className="btn btn-success "
                >
                  clear
                </button>
              </div>
            </div>
          )}
        </div>
        <DataList handleClick={handleKeywordClick} clickedData={clickedData} />
      </div>
    </div>
  );
};

export default Main;
