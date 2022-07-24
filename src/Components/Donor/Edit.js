import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export default function Edit(prop) {

  var id;
  const [donordata, setDonorData] = useState("");

  function updateDonor(){

    id = localStorage.getItem("loginId");
    console.log(id);

    return fetch(`/donor/${id}`, 
      {
        method: "patch",
        body: JSON.stringify(donordata),
        headers: 
        {
          "Content-Type": "application/json",
        },
      })
      .then((response) => 
      {
        console.log(response);
        if(response.status==200)
        {
          console.log("update successfully");
        }
        else
        {
          console.log("cannot updated");
        }
    });
  }

  return (
    <div>
      <SweetAlert title={"Edit Your Data"} dependencies={[prop.name]}>
        <form onSubmit={updateDonor} class="form-group">
          Your name is: {prop.name}
          <hr />
          <input
            type={"text"}
            className="form-control"
            value={prop.name}
            onChange={(event) =>
              setDonorData({ donordata: event.target.value })
            }
            placeholder={"Enter Name"}
          />
          {console.log(donordata)}
          <br />
          <br />
          <hr />
        </form>
      </SweetAlert>
    </div>
  );
}
