/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";

const Blog = () => {
  const [edit, setEdit] = useState(false);
  const [modalShow, setModalShow] = useState(false);

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
            {edit ? "Edit Subscription Model" : "Create New Subscription Model"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Price </Form.Label>
              <Form.Control type="number" min={0} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time Period </Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control as="textarea" rows={2} required />
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

      <p className="headP">Dashboard / Subscriptions </p>

      <div
        className="pb-4  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}
        >
          All Subscriptions Model ( Total : 2 )
        </span>
        <div className="d-flex gap-1">
          <button
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
            onClick={() => setModalShow(true)}
          >
            Create New <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      <section className="sectionCont">
        <Table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Price</th>
              <th>Time Period</th>
              <th>Model</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> #1 </td>
              <td>
                <i className="fa-solid fa-indian-rupee-sign"></i> 99
              </td>
              <td>/Week</td>
              <td>
                <ul style={{ listStyle: "disc" }}>
                  <li>Hint for First letter : Unlimited times</li>
                  <li>Full Name Revel : 2 times</li>
                </ul>
              </td>

              <td>
                <span className="flexCont">
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => {
                      setEdit(true);
                      setModalShow(true);
                    }}
                  />

                  <i className="fa-sharp fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>

            <tr>
              <td> #2 </td>
              <td>
                <i className="fa-solid fa-indian-rupee-sign"></i> 149
              </td>
              <td>/Month</td>
              <td>
                <ul style={{ listStyle: "disc" }}>
                  <li>Crush alert</li>
                  <li>Hint for First letter : Unlimited</li>
                  <li>Full Name Revel : 2 times/week (total 8 revel)</li>
                  <li>Anonymous Mode : No one can view the user name</li>
                  <li>Double coins received for every poll completed</li>
                </ul>
              </td>

              <td>
                <span className="flexCont">
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => {
                      setEdit(true);
                      setModalShow(true);
                    }}
                  />

                  <i className="fa-sharp fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default HOC(Blog);
