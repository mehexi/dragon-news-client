import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marque from "../../componant/Marque";
import NavChildren from "../../componant/NavChildren";

const Nav = () => {
  const [currentTime, setCurrentTime] = useState(
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="text-center mt-12 flex flex-col gap-3">
      <div>
        <img className="mx-auto" src={logo} alt="" />
        <h1>
          <small>Journalism Without Fear or Favor</small>
        </h1>
        <h1>{currentTime}</h1>
      </div>
      <Marque></Marque>
      <NavChildren></NavChildren>
    </nav>
  );
};

export default Nav;
