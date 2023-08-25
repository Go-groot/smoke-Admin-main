/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const UserData = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [colorId, setColorId] = useState(null);

  const BaseUrl = "https://krish-vapes-backend.vercel.app/";
  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getOrder = async () => {
    try {
      const response = await axios.get(`${BaseUrl}api/v1/Product/${id}`);
      setData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);


  function ValueChecker(holder, string) {
    return holder ? (
      <Form.Group className="mb-3">
        <Form.Label> {string} </Form.Label>
        <Form.Control placeholder={holder} disabled />
      </Form.Group>
    ) : (
      ""
    );
  }

  

  return (
    <>
      <section>
        <p className="headP">Dashboard / {data?.name}</p>
        <section className="sectionCont">
          <Form>
            <div className="img-cont">
              {data?.colors
                ? data?.colors?.map((i) => (
                    <img
                      src={i.img}
                      alt=""
                      className="centerImage"
                      key={i._id}
                    />
                  ))
                : ""}
            </div>
            <img src={getImageLink(data)} alt="" className="centerImage" />
            {ValueChecker(data?.name, "Product Name")}
            {ValueChecker(data?.description, "Description")}
            {ValueChecker(data?.price, "Price")}
            {ValueChecker(data?.quantity, "Quantity")}
            {ValueChecker(data?.discountPrice, "Discount Price")}
            {ValueChecker(data?.tax, "Tax")}
            {ValueChecker(data?.ratings, "Ratings")}

            {data?.colors
              ? data?.colors?.map((i , index) => (
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <Form.Group className="mb-3" style={{ width: "90%" }}>
                      <Form.Label>Colors </Form.Label>

                      <Form.Control
                        placeholder={i.color}
                        disabled
                        className="mt-2"
                      />
                      <div
                        style={{
                          backgroundColor: "#e9ecef",
                          width: "100%",
                          marginTop: "10px",
                        }}
                      >
                        <ul style={{ listStyle: "disc" }}>
                          {i.colorSize?.map((item) => (
                            <li key={item._id}>
                              {" "}
                              {item.size}{" "}
                              {item.quantity
                                ? ` , Quantity  : ${item.quantity}`
                                : ""}{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Form.Group>

                    <i
                      className="fa-solid fa-plus"
                      onClick={() => {
                        setColorId(i._id);
                        setModalShow(true);
                      }}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                ))
              : ""}

            {ValueChecker(data?.createdAt?.slice(0, 10), "Created At")}

            <Link to="/Product">
              <Button variant="dark">Back</Button>
            </Link>
          </Form>
        </section>
      </section>
    </>
  );
};
export default HOC(UserData);
