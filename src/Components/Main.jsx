import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Main = () => {
  const navigate = useNavigate();
  const [Photos, setPhotos] = useState([]);

  useEffect(() => {
    dataa();
  }, []);

  const dataa = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPhotos(data);
    console.log(data);
  };

  return (
    <>
      <div className="cards">
        {Photos.map((e, i) => (
          <div
            onClick={() => navigate(`/SingleMain/${e.id}`)}
            key={i}
            className="card"
          >
            <h2>{e.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
