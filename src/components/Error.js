// components/Error.js  ----we write this as we used this in router directly
import React from 'react';
// import { useRouteError } from 'react-router-dom';
const Error = () => {
//   const e=useRouteError();
  return (
    <div>
      <h1>OOPS !!!! SOMETHING WENT WRONG</h1>
      {/* {<h1>Error: {e.Error} {e.message}</h1>}  to basically show the error message*/}
    </div>
  );
};

export default Error;
