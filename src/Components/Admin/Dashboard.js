import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import swal from "@sweetalert/with-react";
import MedicineTable from '../MedicineTable';

function Dashboard() {
  function HandleCritical(critical) {
    if (critical === true) {
      critical = "yes";
    } else {
      critical = "no";
    }
    return critical;
  }

  function Accept(id) {
    console.log(id);
    return fetch(`/accept/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        console.log("Accepted....");
      } else {
        swal(<div>Medicine Not Present in Stock</div>, {
          button: true,
        });
      }
    });
  }

  function Reject(id) {
    console.log(id);
    return fetch(`/reject/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 500) {
        console.log("Medicine does not exists....");
      } else if (response.status === 200) {
        console.log("Rejected....");
      }
    });
  }

  let [requests, setRequests] = useState([]);

  useEffect(() => {
    return fetch(`/patient`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 404) {
        console.log("No donation is found....");
      } else {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          setRequests(data);
        });
      }
    });
  }, []);

  return (
    <div>
      <Header />
      {console.log("requests")}
      {console.log(requests)}
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Requests of Needy Perons <span className="title-under"></span>
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div className="container">
          <div>
            <Table className="styled-table">
              <Thead>
                <Tr>
                  <Th>PatientName</Th>
                  <Th>Age</Th>
                  <Th>Gender</Th>
                  <Th>Profession</Th>
                  <Th>Diesease</Th>
                  <Th>MedcineName</Th>
                  <Th>MedicineMg</Th>
                  <Th>CNIC</Th>
                  <Th>Income</Th>
                  <Th>Critical</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {requests.map((r) => (
                  <Tr>
                    <Td>{r.patientname}</Td>
                    <Td>{r.age}</Td>
                    <Td>{r.gender}</Td>
                    <Td>{r.profession}</Td>
                    <Td>{r.disease}</Td>
                    <Td>{r.medname}</Td>
                    <Td>{r.mg}</Td>
                    <Td>{r.CNIC}</Td>
                    <Td>{r.income}</Td>
                    <Td>{HandleCritical(r.critical)}</Td>
                    {r.status === 1 && (
                      <div>
                        <Td>
                          <button onClick={() => Accept(r._id)}>Accept</button>
                          {console.log(r._id)}
                        </Td>
                        <Td>
                          <button onClick={() => Reject(r._id)}>Reject</button>
                        </Td>
                      </div>
                    )}
                    {r.status === 2 && (
                      <div>
                        <p>Accepted</p>
                      </div>
                    )}
                    {r.status === 3 && (
                      <div>
                        <p>Rejected</p>
                      </div>
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
