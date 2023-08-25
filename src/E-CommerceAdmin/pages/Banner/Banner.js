/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Modal, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useRef } from "react";

const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);

  // to Store Image Reference provided by the user;
  const image = useRef(null);

  // Storing all banner data to be displayed 
  const [allBanner, setAllBanner] = useState([]);

  // Accessing Admin Token from the cookies local storage for Authorization purpose
  const adminToken = window.localStorage.getItem("AdminToken");

  // Handling the file upload done by user

  const handleFileUploadChange = (e) => {
    const file = e.target.files[0];
    image.current = file;
  };

  // Handling Form Submit for adding new Banner 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.current);

    await axios
      .post(
        "https://smoke-backend.vercel.app/api/v1/admin/Banner/AddBanner",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${adminToken}`,
          },
        }
      )
      .then((res) => {
        image.current = null;
        setModalShow(false);
        toast.success("Banner created Successfully");
        fetchBannerData();
      })
      .catch((err) => console.log(err));
  };

  // Fetching All banner data;
  const fetchBannerData = async () => {
    await axios
      .get("https://smoke-backend.vercel.app/api/v1/admin/Banner/allBanner")
      .then((res) => setAllBanner(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  // getting Banner Info for each banner
  const handleBannerInfo = async (id) => {
    const response = await axios
      .get(
        `https://smoke-backend.vercel.app/api/v1/admin/Banner/getBannerById/${id}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Deleting the banner and fethcing the updated banner data
  const handleDeleteBanner = async (id, e) => {
    e.preventDefault();
    console.log(id);
    await axios
      .delete(
        `https://smoke-backend.vercel.app/api/v1/admin/Banner/deleteBanner/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
        }
      )
      .then((res) => {
        fetchBannerData();
        toast.success("Deleted Banner");
      })
      .catch((err) => console.log("Error is " + err));
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "Edit" : "Create New"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                required
                onChange={(e) => handleFileUploadChange(e)}
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#0c0c0c",
                borderRadius: "0",
                border: "1px solid #0c0c0c",
              }}
              type="submit"
              onClick={(e) => handleSubmit(e)}
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
            All Loading Screen Image ( Total : {allBanner.length} )
          </span>
          <button
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
            onClick={() => setModalShow(true)}
          >
            Create New <i className="fa-solid fa-plus"></i>
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
                {allBanner.map((item, i) => (
                  <tr
                    key={item._id}
                    onClick={() => handleBannerInfo(item._id)}
                  >
                    <td>#{i + 1} </td>
                    <td>
                      <img
                        src={item.image}
                        alt=""
                        style={{ maxWidth: "80px" }}
                      />
                    </td>
                    <td>
                      <span className="flexCont">
                        <i
                          className="fa-solid fa-trash"
                          onClick={(e) => handleDeleteBanner(item._id, e)}
                        />
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
                {/* <tr>
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
                </tr> */}
              </tbody>
            </Table>
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(Banner);
