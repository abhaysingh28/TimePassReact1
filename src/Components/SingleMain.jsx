import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Main1 = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const singledata = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    setData(data);
  };
  useEffect(() => {
    singledata();
  }, []);
  return (
    <div className="card">
      <div className="allcard">
        <h1>{data.title}</h1>
      </div>
    </div>
  );
};

export default Main1;
