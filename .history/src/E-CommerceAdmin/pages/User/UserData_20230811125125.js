/** @format */

import { Button, Form, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const UserData = () => {
  const { id } = useParams();




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
        <p className="headP">Dashboard / {id} </p>
        <section className="sectionCont">
          <Form>
            <div className="img-cont">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt=""
                className="centerImage"
              />
            </div>

            {ValueChecker("React", "First Name")}
            {ValueChecker("Flyweis", "Last Name")}
            {ValueChecker("React_Flyweis", "User Name")}
            {ValueChecker("Male", "Gender")}
            {ValueChecker("7854965412", "Phone Number")}
            {ValueChecker("react1@flyweis.technology", "Email Address")}
            {ValueChecker("+91", "Country Code")}
            {ValueChecker("India", "Country ")}
            {ValueChecker("21", "Age ")}
            {ValueChecker("College/University:", "Education Level ")}
            {ValueChecker("Bachelors 4th Year:", "Year ")}
            {ValueChecker("Delhi", "State ")}
            {ValueChecker("Delhi", "City ")}
            {ValueChecker("Delhi University", "School/College ")}

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
