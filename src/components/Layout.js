import React from "react";
import Header from "./header";
import "../styles/global.css";

export const metadata = {
  title: 'My First Sanity Project',
  description: 'My Sanity project Next app with TypeScript and Tailwind CSS',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto py-0 m-10 md:py-3">
        <Header />
        <main className="py-5">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
