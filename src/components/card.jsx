import React from "react";

const card = (props) => {
  const handleClick = (item) => {
    props.handleClick(item);
  };
  const formatDate = (timestamp) => {
    const today = new Date();
    const postedDate = new Date(timestamp);
    const timeDiff = Math.abs(today - postedDate);
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    if (daysDiff === 1) {
      return "1d ago";
    } else {
      return `${daysDiff}d ago`;
    }
  };
  return (
    // <>
    //   <DataList />
    // </>

    <div className="card w-75 m-5 card shadow">
      <div className="card-body">
        <div className="row">
          <div className="col-md-2 mx-5 me-1 pe-0">
            <img
              src={props.data.company_logo}
              className="rounded-circle w-50 h-75"
            ></img>
          </div>
          <div className="col-md-4 ">
            <h5 className="card-title">{props.data.company}</h5>
            <p className="mb-1 fw-bold">{props.data.position}</p>
            <div>
              <span className="pl-2  ">{formatDate(props.data.posted_on)}</span>
              <span className="p-2">{props.data.timing}</span>
              <span className="pl-2"> {props.data.location}</span>
            </div>
          </div>

          <div className="col-md-4">
            {props.data.keywords.map((item) => (
              <button
                onClick={() => handleClick(item)}
                className="btn btn-primary m-2 border-0"
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
