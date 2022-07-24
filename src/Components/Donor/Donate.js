import React, { Component, useState } from "react";
import Header from "./Header";
import swal from "@sweetalert/with-react";

function Donate() {
  const [medname, setMedname] = useState("");
  const [mg, setMg] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  var id;

  function donated(data){
    if (data !== null) {
      console.log("successfully donated")
      swal(
        <div>
          <div>
          Donated <b>Successfully</b>
        </div>
        </div>
        )
        window.location.reload();
    }
  }

  function donate(event) {
    event.preventDefault();
    id = localStorage.getItem("loginId");
    console.log(id);
    const med = {
      medname,
      mg,
      quantity,
      expiryDate,
    };

    console.log(med);

    return fetch(`/donation/${id}`, {
      method: "post",
      body: JSON.stringify(med),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 404) {
        console.log("No donation is found....");
      } 
      else 
      {
        console.log(response.status);
        response.json().then((data) => {
          donated(data);
        });
      }
    });
  }

  return (
    <div className="div-bg-color">
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Donate <span className="title-under"></span>
          </h1>
          <p className="page-description">Donate to help others!</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={donate} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Donate Medicine</b> <span className="title-under"></span>
                  </h1>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="medname"
                    onChange={(event) => {
                      setMedname(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Medicine Name"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="mg"
                    onChange={(event) => {
                      setMg(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Medicine Mg"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="quantity"
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Quantity"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="expirydate"
                    onChange={(event) => {
                      setExpiryDate(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Expiry Date"
                    required
                  />
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Donate
                  </button>
                  <br />
                  <br />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
