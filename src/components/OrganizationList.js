import React from "react";
import { Link } from "react-router-dom";

export default function OrganizationList(props) {
  //rendering data via props passed in from the api call.  I wrapped the "more info button in a link, so that when it is clicked on it will render the desired component."
  return (
    <div className="organization-list">
      <img src={props.avatar} alt="" />
      <p>{props.name}</p>
      <Link to={`/orgs/${props.name}`}>
        <button className="more-info">More Info</button>
      </Link>
      <div className="page-breakup"></div>
    </div>
  );
}
