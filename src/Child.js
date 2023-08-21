import React from "react";
const Child = ({ data, setData, showAlert }) => {
  const addName = () => {
    setData((prevdata) => ({
      ...prevdata,
      name: {
        ...prevdata.name,
        middle: "Mohan",
      },
    }));
  };
  const addTechnology = () => {
    setData((prevdata) => ({
      ...prevdata,
      technical: {
        ...prevdata.technical,
        frontend: {
          ...prevdata.technical.frontend,
          js: {
            ...prevdata.technical.frontend.js,
            stack: [
              ...prevdata.technical.frontend.js.stack,
              { technical: "Python" },
            ],
          },
        },
        backend: {
          ...prevdata.technical.backend,
          js: {
            ...prevdata.technical.backend.js,
            stack: [...prevdata.technical.backend.js.stack, "Java Programming"],
          },
          python: {
            ...prevdata.technical.backend.python,
            stack: [...prevdata.technical.backend.python.stack, "New Python"],
          },
        },
      },
    }));
  };
  const addCompany = () => {
    setData((prevdata) => ({
      ...prevdata,
      company: [...prevdata.company, { name: "mycompany" }],
    }));
  };
  console.log("data", data);
  return (
    <>
      <div>
        <span>Middle Name : </span>
        <span>{data.name.middle}</span>
      </div>
      <div>
        <span>Company Name : </span>
        {data?.company?.map((data) => (
          <div>{data?.name}</div>
        ))}
      </div>

      <div>
        <span>Backend Technologies: </span>
        {data.technical.backend.js.stack.map((technology, index) => (
          <div key={index}>{technology}</div>
        ))}
      </div>

      <button onClick={addName}>Name</button>
      <button onClick={addTechnology}>Technology</button>
      <button onClick={addCompany}>Company</button>
    </>
  );
};
export default Child;
