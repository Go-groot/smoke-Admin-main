/** @format */
import React from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import HOC from "../../layout/HOC";

const AboutUs = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
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

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <p className="headP">Dashboard / School Request</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className=" text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All School Request ( Total : 3 )
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
          >
            Create New 
          </button>
        </div>

        <section className="sectionCont">
          <div className="filterBox">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
              alt=""
            />
            <input type="search" placeholder="Start typing to search " />
          </div>

          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>School Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Indir</td>
                  <td>
                    <ul style={{ listStyle: "disc" }}>
                      <li>Height</li>
                      <li>Age</li>
                      <li>A and B</li>
                      <li>None of the above</li>
                    </ul>
                  </td>
                  <td>Age</td>
                  <td>
                    <span className="flexCont">
                      <i className="fa-solid fa-pen-to-square" />
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </span>
                  </td>
                </tr>
           
              </tbody>
            </Table>
          </div>
        </section>
      </section>
    </>
  );
};
export default HOC(AboutUs);
