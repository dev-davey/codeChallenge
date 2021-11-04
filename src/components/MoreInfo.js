import React, { useState, useEffect } from "react";

export default function MoreInfo(props) {
  const [orgData, setOrgData] = useState("");

  //api call when component mounts.  Calls the api with the params it received from routing passed in App.js

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${props.match.params.name.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((data) => setOrgData(data))
      .then(console.log(orgData, "is this working"))
      .catch((err) => console.log(err, "this did not work"));
  }, []);

  //conditionally rendering data and displaying it.
  return (
    <div className="organization-info">
      <h2>More Information Section</h2>
      <h4>{orgData?.login}</h4>
      <img src={orgData?.avatar_url} alt="" />
      <div className="facts">
        <p>Type: {orgData?.type}</p>
        <p> Oranization Url : {orgData?.url}</p>
        <p>Type of organization : {orgData?.type}</p>
        <p>Followers : {orgData?.followers_url} </p>
        <p>Twitter Username : {orgData?.twitter_username}</p>
        <p>Received Events : {orgData?.received_events_url}</p>
        <p>Blog : {orgData?.blog}</p>
        <p>Public Repos : {orgData?.public_repos}</p>
      </div>
    </div>
  );
}
