import React from "react";
import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const new_em = name === "email" ? value.toLowerCase().replace('#','@') : value;
    console.log(value);
    setData((prev) => {
      return {
        ...prev,
        [name]: new_em,
      };
    });
  };
  return (
    <div className="page">
      <div className="my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Form;
