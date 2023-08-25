/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Contact = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchHandler = async () => {
    try {
      const response = await axios.get(
        "https://smoke-backend.vercel.app/api/v1/help"
      );
      setData(response.data.message);
      setTotal(response.data.message.length);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  const deleteHandler = async (id) => {
    try{
      const response = await axios.delete(``)
    }catch{}
  }


  return (
    <>
      <section>
        <p className="headP">Dashboard / Help and Support</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All help and support ( Total : {total} )
          </span>
     
        </div>

        <section className="sectionCont">
          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Query</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr>
                    <td>#{index + 1} </td>
                    <td> {i.name} </td>
                    <td> {i.email} </td>
                    <td> {i.mobile} </td>
                    <td> {i.query} </td>
                    <td>
                      <span className="flexCont">
                        <i className="fa-solid fa-trash" />
                   
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(Contact);
