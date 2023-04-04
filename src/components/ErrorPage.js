import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status + " :" + error.statusText);
  return (
    <>
      <div>
        <h3>Opps!!</h3>
        <h3>Something went wrong!</h3>
        <h3>{error.data}</h3>
        <h4>{error.status + ": " + error.statusText}</h4>
      </div>
      <div>
        <Link to="/">Back</Link>
      </div>
    </>
  );
};

export default ErrorPage;
