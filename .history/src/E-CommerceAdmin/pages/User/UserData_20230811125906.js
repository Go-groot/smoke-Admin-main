/** @format */

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import HOC from "../../layout/HOC";

const UserData = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  const fetchHandler = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://smoke-backend.vercel.app/api/v1/getUserById/${id}`
      );
      setUser(response.data.msg);
    } catch (e) {
      console.log("Single User Err => ", e);
    }
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [id]);

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
        <p className="headP">
          Dashboard / {user?.firstName + " " + user?.lastName}{" "}
        </p>
        <section className="sectionCont">
          <Form>
            <div className="img-cont">
              <img src={user?.profileImage} alt="" className="centerImage" />
            </div>

            {ValueChecker(user?.firstName, "First Name")}
            {ValueChecker(user?.lastName, "Last Name")}
            {ValueChecker(user?.userName, "User Name")}
            {ValueChecker(user?.gender, "Gender")}
            {ValueChecker(user?.phone, "Phone Number")}
            {ValueChecker(user?.age, "Age ")}
            {ValueChecker(user?.educationlevel, "Education Level ")}
            {ValueChecker(user?.grade, "Grade")}
            {ValueChecker( user?.state?.state , "State ")}
            {ValueChecker( user?.city?.city , "City ")}
            {ValueChecker( user?.district , "District ")}
            {ValueChecker(user?.year, "Year")}
            {ValueChecker(user?.flameCount, "Total Flames")}
            {ValueChecker(user?.friendCount, "Total Friends")}
            {ValueChecker(user?.coin, "Coin")}
            {ValueChecker(user?.friendCount, "User Type")}

            <Link to="/user">
              <Button variant="dark">Back</Button>
            </Link>
          </Form>
        </section>
      </section>
    </>
  );
};
export default HOC(UserData);
