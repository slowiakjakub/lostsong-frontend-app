import React from "react";
import {Link} from 'react-router-dom';

function NavigationBar() {
  return (
    <>
      <div>Navigation Bar</div>
      <Link to={`home`}>Home</Link>
      <Link to={`about`}>About</Link>
    </>
  );
}

export default NavigationBar;
