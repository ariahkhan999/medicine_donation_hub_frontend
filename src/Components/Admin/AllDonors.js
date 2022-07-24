import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import MedicineTable from '../MedicineTable';
import EditDonor from './EditDonor';
import swal from "@sweetalert/with-react";

function AllDonors(){

  let [donors, setDonors] = useState([]);
  let [load, setLoad] = useState(false);
  let [id, setId] = useState("");

  useEffect(() => {
    return fetch(`/donor`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 404) {
        console.log("No donor is found....");
      } else {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          setDonors(data);
        });
      }
    });
  }, []);

  function DeleteDonor(id){
    return fetch(`/donor/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        return(
          swal(
            <div>Successfully Deleted</div>,{
            button:true,}
            ).then(function(){window.location.reload();})
        )
      } else {
        return(
          swal(
            <div>Issue Occured</div>,{
            button:true,}
            )
        )
      }
    });
  }

  // function edit(){
  //   window.location.href = `/edit-donor`;
  // }

  return (
    <div>
      <Header />
      {/* {load ? edit() : ""} */}
      {console.log("donors")}
      {console.log(donors)}
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Donors List <span className="title-under"></span>
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div className="container">
          <div>
            <Table className="styled-table" style={{marginLeft:"330px"}}>
              <Thead>
                <Tr>
                  <Th>Donor Name</Th>
                  <Th>Email</Th>
                  <Th>Phone Number</Th>
                  <Th>Address</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {donors.map((r) => (
                  <Tr>
                    <Td>{r.donorname}</Td>
                    <Td>{r.email}</Td>
                    <Td>{r.phoneNumber}</Td>
                    <Td>{r.address}</Td>
                    <Td><button onClick={()=>DeleteDonor(r._id)}>Delete</button></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {/* <MedicineTable propdata={{donors},{head1:'DonorName'},{head2:'Emial'},{head3:'PhoneNumber'},{head4:'Address'}}/> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AllDonors;