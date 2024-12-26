import React from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="">
        <div className="flex flex-col h-screen w-full">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
