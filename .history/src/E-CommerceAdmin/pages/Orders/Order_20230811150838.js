/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Order = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchHandler = async () => {
    try {
      const response = await axios.get(
        "https://smoke-backend.vercel.app/api/v1/post/all"
      );
      setData(response.data.msg);
      setTotal(response.data.msg.length);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <section>
        <p className="headP">Dashboard / Post</p>

        <div
          className="pb-4 w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Post's ( Total : {total} )
          </span>
        </div>
        <section className="sectionCont">
          <div className="filterBox">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
              alt=""
            />
            <input type="search" placeholder="Start Typing to Search" />
          </div>
          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Video</th>
                  <th>Comments</th>
                  <th>Like</th>
                  <th>User</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td>#{index + 1} </td>
                    <td>
                      {i.image ? (
                        <a href={i.image} target="_blank" rel="noopener">
                          {" "}
                          Go To Image{" "}
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      {i.video ? (
                        <a href={i.video} target="_blank" rel="noopener">
                          {" "}
                          Go To Video{" "}
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      {i.document ? (
                        <a href={i.document} target="_blank" rel="noopener">
                          {" "}
                          Go To Document{" "}
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      {i.audio ? (
                        <a href={i.audio} target="_blank" rel="noopener">
                          Check Audio
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      {i.link ? (
                        <a href={i.link} target="_blank" rel="noopener">
                          Check Link
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>{i.desc}</td>
                    <td>{i.userId?.firstName + " " + i.us}</td>
                    <td>
                      5 <i className="fa-solid fa-comment"></i>
                    </td>
                    <td>
                      100 <i className="fa-solid fa-heart"></i>
                    </td>
                    <td>React Flyweis</td>
                    <td>
                      <span className="flexCont">
                        <i className="fa-solid fa-trash" />
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

export default HOC(Order);
