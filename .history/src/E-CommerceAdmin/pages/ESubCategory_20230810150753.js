/** @format */

import React, { useState, useEffect } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import HOC from "../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";

const ESubCategory = () => {
  const token = localStorage.getItem("AdminToken");
  const [modalShow, setModalShow] = React.useState(false);

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
          Create New Poll
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Options</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Button variant="outline-success" type="submit">
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
        <p className="headP">Dashboard / Poll</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className=" text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Poll
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
          >
         Create New <i className="fa-solid fa-plus"></i>
          </button>
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
                  <th>Question</th>
                  <th>Options</th>
                  <th>Answer</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>What goes up but never ever comes down?</td>
                  <td>
                    <ul style={{ listStyle: "disc" }}>
                      <li>Height</li>
                      <li>Age</li>
                      <li>A and B</li>
                      <li>None of the above</li>
                    </ul>
                  </td>
                  <td>Age</td>
                  <td>
                    <span className="flexCont">
                      <i className="fa-solid fa-pen-to-square" />
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>#2</td>
                  <td>Padma Vibhushan is the _____civilian award of India?</td>
                  <td>
                    <ul style={{ listStyle: "disc" }}>
                      <li>Highest</li>
                      <li>Fourth highest </li>
                      <li>Third highest </li>
                      <li>Second highest </li>
                    </ul>
                  </td>
                  <td>Second highest</td>
                  <td>
                    <span className="flexCont">
                      <i className="fa-solid fa-pen-to-square" />
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>#3</td>
                  <td>The National Game of Bhutan is ?</td>
                  <td>
                    <ul style={{ listStyle: "disc" }}>
                      <li>Archery </li>
                      <li>Shooting </li>
                      <li>Taekwondo </li>
                      <li>Wrestling </li>
                    </ul>
                  </td>
                  <td>Archery</td>
                  <td>
                    <span className="flexCont">
                      <i className="fa-solid fa-pen-to-square" />
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

export default HOC(ESubCategory);
