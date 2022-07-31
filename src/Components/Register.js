import React, { useState } from "react";
import Header from "./Header";
import "react-phone-number-input/style.css";
import swal from "@sweetalert/with-react";
import PhoneInput from "react-phone-number-input";
import { useAlert } from "react-alert";

function Register() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhonenum] = useState();
  const [email, setEmail] = useState();
  const [choice, setChoice] = useState("");
const [donorname, setDonorname] = useState("")
  function register(event) {
    event.preventDefault();
    const admin = {
      username,
      password,
      phoneNumber,
      email,
    };
    const donor={
      donorname,
      password,
      phoneNumber,
      email,
      address
    }
    debugger
    console.log(donor);
    if(choice==="admin")
    {
    return fetch("/administrator", {
      method: "post",
      body: JSON.stringify(admin),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 400) {
        swal(<div>Successfully Registered</div>, {
          button: true,
        });
        window.location.reload();
        window.location.href = "/login";
      } else if (res.status === 500) {
        console.log(res);
      }
    });
  }
 else if(choice==="donor")
  {
  return fetch("/donor", {
    method: "post",
    body: JSON.stringify(donor),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 400) {
      swal(<div>Successfully Registered</div>, {
        button: true,
      });
      window.location.reload();
      window.location.href = "/login";
    } else if (res.status === 500) {
      console.log(res);
    }
  });
}
  }

  return (
    <div className="div-bg-color">
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Register Yourself <span className="title-under"></span>
          </h1>
          <p className="page-description">
            sign up yourself to help needy persons!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={register} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <div className="form-group radio">
                  <label>
                    <input
                      type="radio"
                      name="choice"
                      value="admin"
                      onChange={(event) => {
                        setChoice(event.target.value);
                      }}
                    />
                    Admin
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="choice"
                      value="donor"
                      onChange={(event) => {
                        setChoice(event.target.value);
                      }}
                    />
                    Donor
                  </label>
                </div>
                  <h1>
                    <b>Register Yourself</b>{" "}
                    <span className="title-under"></span>
                  </h1>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter your name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Password*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Email*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="address"
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Address*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phoneNumber"
                    onChange={(event) => {
                      setPhonenum(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Phone Number*"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
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

export default Register;
