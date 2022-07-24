import React, { useState } from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./Header";
import swal from "@sweetalert/with-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [choice, setChoice] = useState("");
  var [id, setId] = useState("");


  function handleAdminId (data,status){
    console.log(status);
    if(status === 200)
    {
      id=data;
      localStorage.setItem('loginId',id);
      window.location.href = "/admin-dashboard";
    }
    else
    {
      swal(
        <div>Login Failed</div>,{
        button:true,}
        )
        window.location.reload(); 
    }
  }

  function handleDonorId (data,status){
    if(status === 200)
    {
      id=data;
      localStorage.setItem('loginId',id);
      window.location.href = "/donor-dashboard";
    }
    else
    {
      swal(
        <div>Login Failed</div>,{
        button:true,}
        )
        window.location.reload(); 
    }
  }

  function login(event) {
    event.preventDefault();
    const user = {
      email,
      password,
    };

    console.log(email);
    console.log(password);
    console.log(choice);
    debugger
    if(choice==="admin")
    {
      return fetch("/administrator/login", 
      {
        method: "post",
        body: JSON.stringify(user),
        headers: 
        {
          "Content-Type": "application/json",
        },
      })
      .then((response) => 
      {
        console.log(response);
        response.json().then(data =>
        {
          handleAdminId(data,response.status);
        })
    });
    }
    else if(choice==="donor")
    {
      return fetch("/donor/login", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => 
      {
        console.log(response);
        response.json().then(data =>
        {
          debugger
          handleDonorId(data,response.status);
        })
    });
  }
  // else
  // {
  //   swal(
  //     <div>Login Failed</div>,{
  //     button:true,}
  //     )
  //     // window.location.reload(); 
  // }
}

  return (
    <div className="div-bg-color">
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Sign In <span className="title-under"></span>
          </h1>
          <p className="page-description">
            Signin yourself to help needy persons!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={login} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Sign In</b> <span className="title-under"></span>
                  </h1>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Email*"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Password*"
                    required
                  />
                  <br />
                  <br />
                </div>
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
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <Link to="/register">Register yourself</Link>
                  <br />
                  <br />
                  <br />
                  <BrowserRouter>
                    <Route path="./register"></Route>
                  </BrowserRouter>
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

export default Login;
