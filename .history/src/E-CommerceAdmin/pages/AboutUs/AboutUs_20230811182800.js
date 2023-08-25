/** @format */
import axios from "axios";
import React, { useState } from "react";
import { Table, Modal, Form, Button, Badge } from "react-bootstrap";
import HOC from "../../layout/HOC";

const AboutUs = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ data , setData ] =  useState([])


  const fetchHandler = async () => {
    try{
      const res = await axios.get("https://smoke-backend.vercel.app/api/v1/school/getAllPendingSchool")
      setData(res.data.data)
    }catch{}
  }


  


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            SCHOOL REQUEST
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>Accepted</option>
                <option>Rejected</option>
                <option>Pending</option>
              </Form.Select>
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#0c0c0c",
                borderRadius: "0",
                border: "1px solid #0c0c0c",
              }}
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
        <p className="headP">Dashboard / School Request</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className=" text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All School Request ( Total : 3 )
          </span>
        </div>

        <section className="sectionCont">
          <div className="filterBox">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
              alt=""
            />
            <input type="search" placeholder="Start typing to search " />
          </div>

          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>School/ University Name</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>University of Allahabad</td>
                  <td>
                    <Badge>Pending</Badge>
                  </td>
                  <td>
                    <span className="flexCont">
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => setModalShow(true)}
                      />
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>#2</td>
                  <td>University of Lucknow</td>
                  <td>
                    <Badge bg="success">Accepted</Badge>
                  </td>
                  <td>
                    <span className="flexCont">
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => setModalShow(true)}
                      />
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>#2</td>
                  <td>Delhi University </td>
                  <td>
                    <Badge bg="danger">Rejected</Badge>
                  </td>
                  <td>
                    <span className="flexCont">
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => setModalShow(true)}
                      />
                      <i className="fa-sharp fa-solid fa-trash"></i>
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
export default HOC(AboutUs);
