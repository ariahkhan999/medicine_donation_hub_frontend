import React, { useState } from "react";
import Header from "../Header";
import swal from "@sweetalert/with-react";

function RequestMedicine() {
  const [patientname, setPatientname] = useState("");
  const [disease, setDisease] = useState("");
  const [medname, setMedname] = useState("");
  const [mg, setMg] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [profession, setProfession] = useState("");
  var [critical, setCritical] = useState("");
  //const alert=useAlert();

  function handleRequestId(data,status) {
    if (status === 200) {
      swal(
        <div>Successfully Requsted</div>,{
        button:true,}
        )
        window.location.reload();
    }
  }
  function request(event) {
    event.preventDefault();
    if (critical === "on") critical = true;
    else critical = false;
    const requestData = {
      patientname,
      disease,
      medname,
      mg,
      quantity,
      phoneNumber,
      gender,
      age,
      critical,
      income,
      CNIC,
      profession,
    };
    console.log(critical);
    console.log(gender);
    return fetch("/patient", {
      method: "post",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      response.json().then((data) => {
        handleRequestId(data,response.status);
      });
    });
  }

  return (
    <div className="div-bg-color">
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Request Medicine Here <span className="title-under"></span>
          </h1>
          <p className="page-description">We are here to help you!</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={request} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Request Medicines</b>{" "}
                    <span className="title-under"></span>
                  </h1>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="patientname"
                    onChange={(event) => {
                      setPatientname(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="disease"
                    onChange={(event) => {
                      setDisease(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Disease*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="medname"
                    onChange={(event) => {
                      setMedname(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Medicine Name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="mg"
                    onChange={(event) => {
                      setMg(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Medicine Mg*"
                    required
                  />
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
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phoneNumber"
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <lable>
                    <select
                      className="form-control"
                      onChange={(event) => {
                        setGender(event.target.value);
                      }}
                    >
                      <option name="gender">Male</option>
                      <option name="gender">Female</option>
                      <option name="gender">Not prefer to say</option>
                    </select>
                  </lable>
                  {/* <input
                    type="text"
                    name="gender"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Gender"
                    required
                  /> */}
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="age"
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Age"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="income"
                    onChange={(event) => {
                      setIncome(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Income"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="CNIC"
                    onChange={(event) => {
                      setCNIC(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter CNIC"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="profession"
                    onChange={(event) => {
                      setProfession(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Profession"
                    required
                  />
                </div>
                <div className="form-group">
                  <lable>
                    <input
                      type="checkbox"
                      name="critical"
                      onChange={(event) => {
                        setCritical(event.target.value);
                      }}
                      className="form-control"
                    />
                    Critical
                  </lable>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Request
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

export default RequestMedicine;
