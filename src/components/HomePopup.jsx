import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const HomePopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const closeModal = () => setShowModal(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 10000);
    return () => clearTimeout(timer);
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!user || !email) return;
    console.log(user, email);
  };

  return (
    <div>
      {showModal && (
        <div className="popup">
          <div className="popup-content">
            <button className="popup-close" onClick={closeModal}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ fontSize: "25px" }}
              />
            </button>

            <div className="popup-img-container">
              <img
                src="https://i.ibb.co/zQTD37S/b1ab81b5-f8dc-4f16-8527-9b0bef20cdd1-1.jpg"
                alt="popup photo"
                className="popup-img"
              />
            </div>

            <div className="popup-subscribe-section">
              <h2 className="popup-title">SUBSCRIBE NOW</h2>
              <p>
                Join the list to be first to hear about our latest news and
                work.
              </p>
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={user}
                  onChange={(evt) => setUser(evt.target.value)}
                  className="popup-email-input"
                  autoComplete="email"
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="popup-email-input"
                  autoComplete="email"
                />
                <button className="btn-popup-subscribe">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePopup;
