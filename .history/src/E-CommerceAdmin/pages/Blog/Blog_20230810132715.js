/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert, Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import SpinnerComp from "../Component/SpinnerComp";

const Blog = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://krish-vapes-backend.vercel.app/api/v1/Blog/all`
      );
      setData(data.data);
      setTotal(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      const fd = new FormData();
      fd.append("image", image);
      fd.append("title", title);
      fd.append("description", desc);

      try {
        const { data } = await axios.post(
          "https://krish-vapes-backend.vercel.app/api/v1/Blog/addBlog",
          fd,
          Auth
        );
        toast.success(data.message);
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    const putHandler = async (e) => {
      e.preventDefault();
      const fd = new FormData();
      fd.append("image", image);
      fd.append("tilte", title);
      fd.append("desc", desc);
      try {
        const { data } = await axios.put(
          `https://krish-vapes-backend.vercel.app/api/v1/Blog/updateBlog/${id}`,
          fd,
          Auth
        );
        toast.success(data.message);
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
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
            {edit ? "Edit Category" : " Add Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putHandler : postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                required
                onChange={(e) => setDesc(e.target.value)}
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

  const deleteHandler = async (ide) => {
    try {
      const { data } = await axios.delete(
        `https://krish-vapes-backend.vercel.app/api/v1/Blog/${ide}`,
        Auth
      );
      toast.success(data.message);
      fetchData();
    } catch (e) {
      const msg = e.response.data.message;
      toast.error(msg);
    }
  };

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
          All Subscriptions Model ( Total : 1 )
        </span>
        <div className="d-flex gap-1">
          <button
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
            onClick={() => setModalShow(true)}
          >
            Add Blog
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
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default HOC(Blog);
