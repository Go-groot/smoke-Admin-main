/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Modal, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Banner = () => {
  const [top, setTop] = useState([]);
  const [bottom, setBottom] = useState([]);
  const [mid, setMid] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  // const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getTopBanner = async () => {
    const url =
      "https://krish-vapes-backend.vercel.app/api/v1/Banner/getTopBanner";
    try {
      const { data } = await axios.get(url);
      setTop(data?.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getBottomBanner = async () => {
    const url =
      "https://krish-vapes-backend.vercel.app/api/v1/Banner/getBottomBanner";
    try {
      const { data } = await axios.get(url);
      setBottom(data?.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getMidBanner = async () => {
    const url =
      "https://krish-vapes-backend.vercel.app/api/v1/Banner/getMidBanner";
    try {
      const { data } = await axios.get(url);
      setMid(data?.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getTopBanner();
    getBottomBanner();
    getMidBanner();
  }, []);

  function MyVerticallyCenteredModal(props) {


    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit ? "Edit Category" : " Add Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                required
              />
            </Form.Group>
           

            <Button
              style={{ backgroundColor: "#19376d", borderRadius: "0" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }



  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <p className="headP">Dashboard / Loading Screen Image</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Loading Screen Image ( Total : 2 )
          </span>
          <button
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
            onClick={() => setModalShow(true)}
          >
           Create New  <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <section className="sectionCont">
          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1 </td>
                  <td>
                    <img
                      src="https://thumbs.dreamstime.com/b/gradient-fire-phoenix-bird-simple-logo-design-black-bird-simple-logo-design-simple-gradient-fire-phoenix-bird-logo-158339374.jpg"
                      alt=""
                      style={{ maxWidth: "80px" }}
                    />
                  </td>
                  <td>
                    <span className="flexCont">
                      <i className="fa-solid fa-trash" />
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => {
                          setEdit(true);
                          setModalShow(true);
                        }}
                      ></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>#2 </td>
                  <td>
                    <img
                      src="https://img.freepik.com/premium-photo/phoenix-bird-fire-mythological-fenix-bird-with-flames-fantasy-illustration_691560-3545.jpg?w=2000"
                      alt=""
                      style={{ maxWidth: "80px" }}
                    />
                  </td>
                  <td>
                    <span className="flexCont">
                      <i className="fa-solid fa-trash" />
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => {
                          setEdit(true);
                          setModalShow(true);
                        }}
                      ></i>
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

export default HOC(Banner);
