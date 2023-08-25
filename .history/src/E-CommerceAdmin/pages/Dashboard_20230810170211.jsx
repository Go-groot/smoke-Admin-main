/** @format */

import { FiUser } from "react-icons/fi";
import HOC from "../layout/HOC";
import { useNavigate } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import Dropdown from 'react-bootstrap/Dropdown';

const Dashboard = () => {

  const navigate = useNavigate();




  const card = [
    {
      progress: "bg-green-400",
      title: "Total Male",
      number: 100,
      icon: <FiUser className="text-2xl text-[#29cccc]" />,
      bg: "#29cccc",
      link: "/Category",
    },
    {
      progress: "bg-green-400",
      title: "Total Female",
      number: 100,
      icon: <i class="fa-solid fa-cart-shopping text-2xl text-[#3c335d]"></i>,
      bg: "#3c335d",
      link: "/Product",
    },
    {
      progress: "bg-green-400",
      title: "Total User",
      number: 200,
      icon: <i class="fa-solid fa-cart-shopping text-2xl text-[#3c335d]"></i>,
      bg: "#3c335d",
      link: "/Product",
    },
    {
      progress: "bg-green-400",
      title: "Active User",
      number: 20,
      icon: <i class="fa-solid fa-cart-shopping text-2xl text-[#3c335d]"></i>,
      bg: "#3c335d",
      link: "/Product",
    },
  ];

  const series = [
    {
      name: "User",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];

  const options = {
    chart: {
      id: "area-chart",
    },
    xaxis: {
      categories: [12, 15, 16, 17, 18, 19, 20, 22, 25],
    },
  };

  const series1 = [
    {
      name: "Male",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Female",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options1 = {
    chart: {
      id: "area-chart",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
  };

  return (
    <>

<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cardDiv"
              key={index}
              style={{
                backgroundColor: `${card.bg}`,
                textTransform: "uppercase",
              }}
              onClick={() => navigate(`${card.link}`)}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center iCOn">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="two-chart">
        <div className="Main">
          <ReactApexChart
            options={options1}
            series={series1}
            type="area"
            height={350}
            width={"100%"}
          />{" "}
        </div>
        <div className="Main">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default HOC(Dashboard);
