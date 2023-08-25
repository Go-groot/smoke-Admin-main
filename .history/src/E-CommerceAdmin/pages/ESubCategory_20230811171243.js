/** @format */

import axios from "axios";
import { f } from "html2pdf.js";
import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const ESubCategory = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        "https://smoke-backend.vercel.app/api/v1/question"
      );
      setData(res.data.msg);
      setTotal(res.data.msg.length);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const filterData = !query
    ? data
    : data?.filter(
        (i) =>
          i.question?.toLowerCase().includes(query?.toLowerCase()) ||
          i.type?.toLowerCase().includes(query?.toLowerCase())
      );

  function MyVerticallyCenteredModal(props) {
    const [ question , setQuestion ] = useState(null)

    
    const postHandler = async (e) => {
      e.preventDefault()
      try{
        const response = await axios.post
      }catch(e){
        const msg = e.response.data.message
        toast.error(msg)
      }
    }



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
              <Form.Control as="textarea" rows={2} required />
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

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(
        `https://smoke-backend.vercel.app/api/v1/question/${id}`
      );
      toast.success("Question Deleted Successfully");
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
        <p className="headP">Dashboard / Poll Question</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className=" text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Poll Question ( Total : {total} )
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
            <input
              type="search"
              placeholder="Start typing to search"
              onChange={(e) => setQuery(e.target.value)}
            />
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
                {filterData?.map((i, index) => (
                  <tr key={index}>
                    <td>#{index + 1} </td>
                    <td> {i.question} </td>
                    <td>{i.type}</td>
                    <td>{i.emoji}</td>
                    <td>
                      <span className="flexCont">
                        <i className="fa-solid fa-pen-to-square" />
                        <i
                          className="fa-sharp fa-solid fa-trash"
                          onClick={() => deleteHandler(i._id)}
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

export default HOC(ESubCategory);
