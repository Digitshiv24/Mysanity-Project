import React from "react";
import Header from "./header";
import Home from "./Home";
// import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div>
       <Header/>
       <main>{children}</main>
  </div>
  );
};

export default Layout;
