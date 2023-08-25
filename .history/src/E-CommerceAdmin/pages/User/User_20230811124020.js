/** @format */

import HOC from "../../layout/HOC";
import { Table, Badge } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://smoke-backend.vercel.app/api/v1/admin/User/allUser"
      );
      setUsers(response.data.data);
    } catch (e) {
      console.log("Get All User Err => ", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p className="headP">Dashboard / All User</p>

      <div
        className="pb-4  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}
        >
          All User's ( Total : 1 )
        </span>
      </div>


      <div className="Radio_Button">
        <input type='radio' name='SS' />
        <label></label>
      </div>

      <section className="sectionCont">
        <div className="overFlowCont">
          <Table>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Gender</th>
                <th>Phone Number</th>
                {/* <th>Email Address</th> */}
                {/* <th>Country Code</th> */}
                {/* <th>Country</th> */}
                {/* <th>Status</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((i, index) => (
                <tr key={index}>
                  <td>#{index + 1} </td>
                  <td> {i.firstName} </td>
                  <td> {i.lastName} </td>
                  <td> {i.userName} </td>
                  <td> {i.gender} </td>
                  <td> {i.phone} </td>
                  
                  <td>
                    {" "}
                    <span className="flexCont">
                      <i
                        className="fa-solid fa-eye"
                        onClick={() => navigate(`/user-data/React_Flyweis`)}
                      ></i>
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </span>
                  </td>
                </tr>
              ))}
             
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(User);
