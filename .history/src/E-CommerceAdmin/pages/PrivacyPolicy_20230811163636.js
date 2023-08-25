/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import {
  Table,
  Modal,
  Form,
  Button,
  Alert,
  FloatingLabel,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const PrivacyPolicy = () => {
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [id, setId] = useState("");

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        "https://smoke-backend.vercel.app/api/v1/static/getPrivacyPolicy"
      );
      setData(res.data.data);
      setTotal(res.data.data.length);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [PrivacyPolicy, setPrivacyPolicy] = useState("");

    const payload = { PrivacyPolicy };

    const postHandller = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "https://smoke-backend.vercel.app/api/v1/static/createPrivacyPolicy",
          payload
        );
        const msg = response.data.message;
        toast.success(msg);
        fetchHandler();
        props.onHide();
      } catch (e) {
        const err = e.response.data.message;
        toast.error(err);
      }
    };
    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(
          `https://smoke-backend.vercel.app/api/v1/static/PrivacyPolicy/${id}`,
          payload
        );
        const msg = response.data.message;
        toast.success(msg);
        fetchHandler();
        props.onHide();
      } catch (e) {
        const err = e.response.data.message;
        toast.error(err);
      }
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit ? "Edit Term" : "Create New Term"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putHandler : postHandller}>
            <FloatingLabel label="PrivacyPolicy" className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="PrivacyPolicy"
                style={{ height: "100px" }}
                onChange={(e) => setPrivacyPolicy(e.target.value)}
              />
            </FloatingLabel>

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

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(
        `https://smoke-backend.vercel.app/api/v1/static/PrivacyPolicy/${id}`
      );
      const msg = res.data.message;
      toast.success(msg);
      fetchHandler();
    } catch {}
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <p className="headP">Dashboard / Privacy Policy</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Privacy Policy ( Total : {total} )
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
            {data?.length === 0 || !data ? (
              <Alert>No PrivacyPolicy Yet !</Alert>
            ) : (
              <Table>
                <thead>
                  <tr>
                    <th>SNo.</th>
                    <th>PrivacyPolicy</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td> {i.PrivacyPolicy} </td>
                      <td>
                        <span className="flexCont">
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteHandler(i._id)}
                          />
                          <i
                            className="fa-solid fa-pen-to-square"
                            onClick={() => {
                              setId(i._id);
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
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(PrivacyPolicy);
