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
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      const fd = new FormData();
      fd.append("image", image);
      fd.append("bannerName", name);
      fd.append("position", type);

      try {
        const { data } = await axios.post(
          "https://krish-vapes-backend.vercel.app/api/v1/Banner/addBanner",
          fd,
          Auth
        );
        toast.success(data.message);
        getTopBanner();
        getBottomBanner();
        getMidBanner();
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    const putHandler = async (e) => {
      e.preventDefault();
      const fd = new FormData();
      fd.append("image", image);
      fd.append("bannerName", name);
      fd.append("position", type);
      try {
        const { data } = await axios.put(
          `https://krish-vapes-backend.vercel.app/api/v1/Banner/updateBanner/${id}`,
          fd,
          Auth
        );
        toast.success(data.message);
        getTopBanner();
        getBottomBanner();
        getMidBanner();
        props.onHide();
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
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select an Type</option>
                <option value="TOP">TOP</option>
                <option value="BOTTOM">BOTTOM</option>
                <option value="MID">MID</option>
              </Form.Control>
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

  const handleDelete = async (ide) => {
    const url = `https://krish-vapes-backend.vercel.app/api/v1/Banner/${ide}`;
    try {
      const { data } = await axios.delete(url, Auth);
      toast.success(data.message);
      getTopBanner();
      getBottomBanner();
      getMidBanner();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <p className="headP">Dashboard / Banner</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Banner ( Total : {top.length} )
          </span>
          <button
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
            onClick={() => setModalShow(true)}
          >
            Add Banner
          </button>
        </div>

        <section className="sectionCont">
          {top?.length === 0 || !top ? (
            <Alert>Banner Not Found</Alert>
          ) : (
            <>
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
                        <img src="" alt="" style={{ maxWidth: "60px" }} />
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
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default HOC(Banner);
