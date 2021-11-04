import React, { useState, useEffect } from "react";
import MapApiData from "./MapApiData";

export default function FetchGithubOrgs() {
  const [apiData, setData] = useState("");

  //api call when the components mounts via useEffect hook
  useEffect(() => {
    fetch("https://api.github.com/search/users?q=type:org")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(console.log(apiData))
      .catch((err) => console.log(err, "this did not work"));
  }, []);

  //conditionally rending the data, so app does not error out, because the call is made after the dom is loaded.
  return (
    <div>
      {apiData !== "" ? <MapApiData data={apiData} /> : <p>Loading...</p>}
    </div>
  );
}
