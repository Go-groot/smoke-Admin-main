/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Badge, Button, Form, Modal, Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Order = () => {
  return (
    <>
      <section>
        <p className="headP">Dashboard / Post</p>

        <div
          className="pb-4 sticky top-0  w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Post's (Total : 1)
          </span>
        </div>
        <section className="sectionCont">
          <div className="filterBox">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
              alt=""
            />
            <input type="search" placeholder="Start Typing to Search" />
          </div>
          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Video</th>
                  <th>Comments</th>
                  <th>Like</th>
                  <th>User</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <img
                      src="https://blog.hootsuite.com/wp-content/uploads/2022/06/Instagram-Apps-Cover-Photo-556x556.png"
                      alt=""
                      style={{ maxWidth: "80px" }}
                    />
                  </td>
                  <td>
                    <video width="200" controls>
                      <source
                        src="https://vod-progressive.akamaized.net/exp=1691675550~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4714%2F18%2F473574982%2F2110908541.mp4~hmac=a177614485aa27e3706349e9f1ad3cf69f9b9fcd09c6237fba163a63e1b8520a/vimeo-prod-skyfire-std-us/01/4714/18/473574982/2110908541.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </td>
                  <td>
                    5 <i className="fa-solid fa-comment"></i>
                  </td>
                  <td>
                    100 <i className="fa-solid fa-heart"></i>
                  </td>
                  <td>React Flyweis</td>
                  <td>
                    <span className="flexCont">
                      <i className="fa-solid fa-trash" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(Order);
