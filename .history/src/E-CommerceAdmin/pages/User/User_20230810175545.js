/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert, Badge } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import SpinnerComp from "../Component/SpinnerComp";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

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
                <th>Email Address</th>
                <th>Country Code</th>
                <th>Country</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>React</td>
                <td>Flyweis</td>
                <td>React_Flyweis</td>
                <td>Male</td>
                <td>7854965412</td>
                <td>react1@flyweis.technology</td>
                <td>+91</td>
                <td>India</td>
                <td>
                  <Badge>Active</Badge>
                </td>
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
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(User);
