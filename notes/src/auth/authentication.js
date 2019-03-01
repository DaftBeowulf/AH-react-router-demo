import React from "react";

const authentication = First => Second => props => {
  //First method, storing localStorage and if statement
  // const isLoggedIn = localStorage.getItem("username");

  // if (isLoggedIn) {
  //     //isloggedin, true
  // return <First/>
  // } else {
  //     //not loggedin, false
  // <Second />
  // }

  //Second method, ternary operator
  // return isLoggedIn ? <First/> : <Second/>

  //Third method, no variable, ternary operator
  return localStorage.getItem("username") ? <First /> : <Second />;
};

export default authentication;
