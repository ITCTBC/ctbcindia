import { useEffect, useState } from "react";
import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const data = [
  {
    id: 1,
    image: tour1,
    title: "Board",

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 7,
    image: tour3,
    title: "Board",

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 2,
    image: tour2,
    title: "Management",

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 12,
    image: tour4,
    title: "Management",

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 3,
    image: tour3,
    title: "Advisory",

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 4,
    image: tour4,
    title: "HonoraryMembers",

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 5,
    image: tour5,
    title: "Staff",

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
  {
    id: 6,
    image: tour6,
    title: "Staff",

    info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a accusamus eius aut. Vitae alias doloribus, ad suscipit aut debitis maxime minus amet placeat? Placeat.",
  },
];

const Person = () => {
  const location = useLocation();

  const btnValue = location?.state?.btnValue || "All";
  const [members, setMembers] = useState(btnValue);
  const [tours, setTours] = useState(data);
  const btnStyle = {
    background: "transparent",
    border: "solid 2px gray",
    padding: "0.5rem",
    borderRadius: "15%",
  };
  const defaultStyle = {
    padding: "0.5rem",
    background: "transparent",
    borderRadius: "15%",
    border: "none",
  };

  const handleTours = (title) => {
    if (title !== "All") {
      const newTours = data.filter((tour) => {
        return tour.title === title;
      });
      setTours(newTours);
      setMembers(title);
      return;
    }
    setTours(data);
    setMembers(title);
  };

  useEffect(() => {
    handleTours(btnValue);
  }, [btnValue]);

  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>People</span>
        </h2>
      </div>

      <div className="nav-center">
        <ul
          id="nav-links"
          style={{
            margin: "2rem auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("All")}
              style={members === "All" ? btnStyle : defaultStyle}
            >
              {" "}
              All{" "}
            </button>
          </li>
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Board")}
              style={members === "Board" ? btnStyle : defaultStyle}
            >
              {" "}
              board{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Management")}
              style={members === "Management" ? btnStyle : defaultStyle}
            >
              {" "}
              management{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Advisory")}
              style={members === "Advisory" ? btnStyle : defaultStyle}
            >
              {" "}
              advisory{" "}
            </button>
          </li>

          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("HonoraryMembers")}
              style={members === "HonoraryMembers" ? btnStyle : defaultStyle}
            >
              {" "}
              honoraryMembers
            </button>
          </li>
          <li>
            <button
              href=""
              className="nav-link"
              onClick={() => handleTours("Staff")}
              style={members === "Staff" ? btnStyle : defaultStyle}
            >
              {" "}
              staff
            </button>
          </li>
        </ul>
      </div>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, title, info } = tour;
          return (
            <article
              className="tour-card"
              key={id}
              style={{ position: "relative" }}
            >

              <div className="tour-card-side tour-card-front">
                <img
                  src={image}
                  alt="people-img"
                  style={{
                    position: "absolute",
                    borderRadius: "50%",
                    top: '50%',
                    left: '30%',
                    transform: "translate(-50%,-50%)",
                    width: "100px",
                    height: "100px",
                    zIndex:'2'
                  }}
                />
                <div className="tour-img-container">
                  <img src={image} className="people-card-img" alt={title} />
                </div>
                <div className="tour-info">
                  <div className="people-card-title">
                    {<h4> {members !== title?title:members} </h4>}
                  </div>
                  <p>{info}</p>
                  <button className="email-icon"><FontAwesomeIcon icon={faEnvelope} /></button>
                </div>
              </div>

              <div className="tour-card-side tour-card-back">
                <p>{info}</p>
              </div>
            </article>
          );
        })}

        {/* <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-1.jpeg" className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-2.jpeg" className="tour-img" alt="" />
            <p className="tour-date">october 1th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-3.jpeg" className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-4.jpeg" className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2019</p>
          </div>
          <div className="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article> */}
      </div>
    </section>
  );
};
export default Person;
