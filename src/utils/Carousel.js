import React, { useState } from "react";
import "../styles/Carousel.css";
import Profile from "../components/Profile";
import OtherDetails from "../components/OtherDetails";

const Carousel = ({ user }) => {
  const items = [{ color: "first" }, { color: "second" }];

  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex(index === 0 ? 0 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === items.length - 1 ? items.length - 1 : index + 1);
  };

  return (
    <div
      className={`carousel ${items[index].color}`}
      style={{ backgroundImage: items[index].color }}
    >
      {items[index].color === "first" ? (
        <>
          <Profile user={user} />
        </>
      ) : (
        <>
          <OtherDetails />
        </>
      )}
      <div id="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Other Details</button>
      </div>
    </div>
  );
};

export default Carousel;
