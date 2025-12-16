import React, { use } from "react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.body.style.background = "white";

    return;
    document.body.style.background = "#1abc9c";
  }, []);
  return (
    <>
      <section className="w-50">
        <div className="mb-5">
          <h1 className="text-uppercase fw-bolder pt-5 text-black">
          conatct section
        </h1>
        <div className="demo w-50 mx-auto py-2" style={{ "--demo-color": "black" }}>
          <i className="fa-solid fa-star text-black mx-3"></i>
        </div>
        </div>

        <div className="row pt-5">
          <div className="col-12">
            <input type="text" className="form-control mx-auto mb-5 border-0 border-bottom" placeholder="User Name"/>
          </div>
          <div className="col-12">
            <input type="text" className="form-control mx-auto mb-5 border-0 border-bottom" placeholder="User Age"/>
          </div>
          <div className="col-12">
            <input type="text" className="form-control mx-auto mb-5 border-0 border-bottom" placeholder="User Email"/>
          </div>
          <div className="col-12">
            <input type="text" className="form-control mx-auto mb-5 border-0 border-bottom" placeholder="User Password" />
          </div>
        </div>
          <div className="d-flex">
            <button className="btn text-white">Send Message</button>
          </div>
      </section>
    </>
  );
}
