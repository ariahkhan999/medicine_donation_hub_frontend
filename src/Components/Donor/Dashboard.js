import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Dashboard() {
  var id;
  let [donations, setDonations] = useState([]);

  useEffect(() => {
    id = localStorage.getItem("loginId");
    console.log(id);

    return fetch(`/donation/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 404) 
      {
        console.log("No donation is found....");
      } 
      else 
      {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          setDonations(data);
          // console.log("donation ka data");
          // console.log(donations);
        });
      }
    });
    //setDonations(data);
    //console.log(donations);
  }, []);

  function donateNow() {
    window.location.href = "/donate";
  }
  return (
    <div>
      <Header />
      {console.log("donation")}
      {console.log(donations)}
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <button
            onClick={donateNow}
            className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
            data-toggle="modal"
            data-target="#donateModal"
          >
            DONATE NOW
          </button>
          <h1 className="page-title">
            Donate Medicine to Help Needy Persons{" "}
            <span className="title-under"></span>
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div className="container">
          <Table className="styled-table" style={{marginLeft:"380px"}}>
            <Thead>
              <Tr>
                <Th>Medicie Name</Th>
                <Th>Medicine Mg</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {donations.map(donation=>
              <Tr>
                <Td>{donation.medname}</Td>
                <Td>{donation.mg}</Td>
                <Td>{donation.quantity}</Td>
              </Tr>
              )}
            </Tbody>
          </Table>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
