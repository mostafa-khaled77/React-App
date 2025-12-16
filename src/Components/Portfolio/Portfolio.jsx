import React, { useEffect } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

export default function Portfolio() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "#1abc9c";
    };
  }, []);

  return (
    <>
      <section>
        <h1 className="text-uppercase fw-bolder pt-5 text-black">
          portfolio component
        </h1>
        <div className="demo w-50 mx-auto" style={{ "--demo-color": "black" }}>
          <i className="fa-solid fa-star text-black mx-3"></i>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div type="button" data-bs-toggle="modal" data-bs-target="#img1">
              <div className="inner position-relative overflow-hidden rounded-3">
                <img src={img1} alt="port1" className="w-100" />
                <div className="layer position-absolute start-0 end-0 top-0 bottom-0 justify-content-center align-items-center d-flex">
                  <i className="fa-solid fa-plus text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div type="button" data-bs-toggle="modal" data-bs-target="#img2">
              <div className="inner position-relative overflow-hidden rounded-3">
                <img src={img2} alt="port1" className="w-100" />
                <div className="layer position-absolute start-0 end-0 top-0 bottom-0 justify-content-center align-items-center d-flex">
                  <i className="fa-solid fa-plus text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div type="button" data-bs-toggle="modal" data-bs-target="#img3">
              <div className="inner position-relative overflow-hidden rounded-3">
                <img src={img3} alt="port1" className="w-100" />
                <div className="layer position-absolute start-0 end-0 top-0 bottom-0 justify-content-center align-items-center d-flex">
                  <i className="fa-solid fa-plus text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div type="button" data-bs-toggle="modal" data-bs-target="#img1">
              <div className="inner position-relative overflow-hidden rounded-3">
                <img src={img1} alt="port1" className="w-100" />
                <div className="layer position-absolute start-0 end-0 top-0 bottom-0 justify-content-center align-items-center d-flex">
                  <i className="fa-solid fa-plus text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div type="button" data-bs-toggle="modal" data-bs-target="#img2">
              <div className="inner position-relative overflow-hidden rounded-3">
                <img src={img2} alt="port1" className="w-100" />
                <div className="layer position-absolute start-0 end-0 top-0 bottom-0 justify-content-center align-items-center d-flex">
                  <i className="fa-solid fa-plus text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div type="button" data-bs-toggle="modal" data-bs-target="#img3">
              <div className="inner position-relative overflow-hidden rounded-3">
                <img src={img3} alt="port1" className="w-100" />
                <div className="layer position-absolute start-0 end-0 top-0 bottom-0 justify-content-center align-items-center d-flex">
                  <i className="fa-solid fa-plus text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="img1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-body">
              <img src={img1} alt="" className="w-100 rounded-3" />
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="img2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-body ">
              <img src={img2} alt="" className="w-100 rounded-3" />
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="img3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-body ">
              <img src={img3} alt="" className="w-100 rounded-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
