/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table, Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

const ECategory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        "https://smoke-backend.vercel.app/api/v1/faq/all/faq"
      );
      setData(res.data.data);
      setTotal(res.data.data.length);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function MyVerticallyCenteredModal(props) {

    const [  question , setQuestion ] = useState('')
    const [ ] 

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit ? "Edit FAQ" : "Create New FAQ"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Queation</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Answer</Form.Label>
              <Form.Control type="text" required />
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
        <p className="headP">Dashboard / FAQ</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All FAQ's ( Total : {total} )
          </span>
          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
          >
            Create New
          </button>
        </div>

        <section className="sectionCont">
          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td>#{index + 1} </td>
                    <td> {i.question} </td>
                    <td> {i.answer} </td>
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
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(ECategory);
