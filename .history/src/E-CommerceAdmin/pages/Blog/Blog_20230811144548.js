/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const Blog = () => {
  const [edit, setEdit] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchHandler = async () => {
    try {
      const response = await axios.get(
        "https://smoke-backend.vercel.app/api/v1/subsription/getSubscription"
      );
      setData(response.data.data);
      setTotal(response.data.data.length);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function MyVerticallyCenteredModal(props) {

    const [ name , setName ] = useState(null)
    const [ price , setPrice ] = useState(null)
    const [crushAlert , setCrushAlert ] = useState(null)
    const [ firstLetter , setFirstLetter ] = useState(null)
    const [ fullName , setFullName] = useState(null)
    const [ ] = useState(null)
    const [ ] = useState(null)


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

      <p className="headP">Dashboard / Subscriptions Model </p>

      <div
        className="pb-4  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}
        >
          All Subscriptions Model ( Total : {total} )
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
              <th>First Letter</th>
              <th>Crush Alert</th>
              <th>Full Name</th>
              <th>Per Week</th>
              <th>Total Week</th>
              <th>Anonymous Mode</th>
              <th>Double Coins </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr>
                <td> #{index + 1} </td>
                <td>
                  <i className="fa-solid fa-indian-rupee-sign"></i> {i.price}
                </td>
                <td>/{i.name} </td>
                <td>{i.firstLetter}</td>
                <td>{i.crushAlert  === false ? "False" : "True"}</td>
                <td>{i.fullName}</td>
                <td>{i.perWeek}</td>
                <td>{i.totalWeek}</td>
                <td>{i.anonymousMode === false ? "False" : "True"}</td>
                <td>{i.doublecoins === false ? "False" : "True"}</td>
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
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default HOC(Blog);
