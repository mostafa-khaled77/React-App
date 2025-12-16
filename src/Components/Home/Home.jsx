import React, { useEffect } from "react";
import logo from "../../assets/avataaars.svg";

export default function Home() {
  useEffect(() => {
      document.body.style.backgroundColor = "#1abc9c";
      return () => {
        document.body.style.backgroundColor = "white";
      };
    }, []);
  return (
    <>
      <div className="p-5 mt-5">
        <div className="div">
          <img src={logo} alt="logo" className="w-75" />
          <h1 className="text-uppercase fw-bolder pt-5 text-white">
            start Framework
          </h1>
          <div className="demo ">
            <i class="fa-solid fa-star text-white mx-3"></i>
          </div>
          <p className="pt-4 text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
