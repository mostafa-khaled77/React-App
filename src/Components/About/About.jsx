import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
        document.body.style.backgroundColor = "#1abc9c";
        return () => {
          document.body.style.backgroundColor = "white";
        };
      }, []);
  return (
    <>
      <div className="p-5 mt-5">
        <h1 className="text-uppercase fw-bolder pt-5 text-white">
          about component
        </h1>
        <div className="demo w-50 mx-auto">
          <i class="fa-solid fa-star text-white mx-3"></i>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-md-6 p-3">
            <div className="inner text-start text-white">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="inner text-start text-white p-3">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
