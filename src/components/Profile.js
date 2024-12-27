import React, { useState } from "react";
import "../styles/Profile.css";
// import Typewriter from "typewriter-effect";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const Profile = ({ user }) => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div
        className="components card"
        style={{
          width: "21vw",
          height: "50vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        {user.map((person) => {
          return (
            <div key={person.id.value} className="component">
              <img
                src={person.picture.large}
                alt={person.name.first}
                className="card-img-top"
                style={{
                  width: "20rem",
                }}
              />
              <div
                className="card-body"
                style={{
                  backgroundColor: "white",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                onMouseOver={() => setEdit(true)}
                onMouseOut={() => setEdit(false)}
              >
                <br />
                <h5 className="card-title">
                  {person.login.username} &nbsp; &nbsp; &nbsp;
                  {edit && <MdModeEdit style={{ cursor: "pointer" }} />}
                </h5>
                <br />
                <p>
                  <MdOutlinePersonOutline className="icon" /> {person.gender}
                </p>
                <p>
                  <IoCallOutline className="icon" /> {person.phone}
                </p>
                <p>
                  <CiMail className="icon" /> {person.email}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="components card"
        style={{
          width: "22vw",
          height: "50vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        {user.map((person) => {
          return (
            <div key={person.id.value} className="component">
              <div
                className="card-body"
                style={{
                  backgroundColor: "white",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <br />
                <h3 className="card-title">Personal Information</h3>
                <br />
                <p>First Name : {person.name.first}</p>
                <p>Last Name : {person.name.last}</p>
                <p>
                  Street :{" "}
                  {person.location.street.number +
                    " " +
                    person.location.street.name}
                </p>
                <p>City : {person.location.city}</p>
                <p>Country : {person.location.country}</p>
                <p>Postcode : {person.location.postcode}</p>
                <p>Timezone-offset : {person.location.timezone.offset}</p>
                <p>
                  Timezone-description : {person.location.timezone.description}
                </p>
                <p>Date of Birth : 1967-07-23</p>
                <p>Age : {person.dob.age}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="components card"
        style={{
          width: "22vw",
          height: "20vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        {user.map((person) => {
          return (
            <div key={person.id.value} className="component">
              <div
                className="card-body"
                style={{
                  backgroundColor: "white",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <br />
                <h3 className="card-title">Skills</h3>
                <br />
                <p>Languages Known : JavaScript and Python</p>
                <p>Frontend : HTML, CSS and Bootstrap</p>
                <p>Framework : React</p>
                <p>Backend : Node and Express JS</p>
                <p>Database : MongoDB</p>
                <p>Version Control : Git</p>
                <p>IDE : Visual Studio Code</p>
                <p>Domain1 : Full Stack Development and Software Development</p>
                <p>
                  Good at : Problem Solving , Time Management and Communication
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
