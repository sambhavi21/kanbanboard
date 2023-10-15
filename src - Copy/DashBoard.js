import React from "react";
import { MoreHorizontal } from "react-feather";

function DashBoard(props) {
  var users = {
    "usr-1": "Anoop sharma",
    "usr-2": "Yogesh",
    "usr-3": "Shankar Kumar",
    "usr-4": "Ramesh",
    "usr-5": "Suresh",
  };
  var obj = {
    4: "Urgent",
    3: "High priority",
    2: "Medium priority",
    1: "Less priority",
    0: "No priority",
  };
  return (
    <>
      <div className="card" style={{ width: "17rem", background: "#fffdd0" }}>
        <div className="card-body">
          <h5 className="card-title">{props.ticket.id}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {props.ticket.title}
          </h6>
          <p className="card-text">
            <MoreHorizontal />
            {props.ticket.tag}
          </p>
          <div className="card-link">Name:-{users[props.ticket.userId]}</div>
          <div className="card-link">
            Priority:-{obj[props.ticket.priority]}
          </div>
        </div>
      </div>
    </>
  );
}
export default DashBoard;
