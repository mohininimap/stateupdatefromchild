import React, { useState } from "react";
import Child from "./Child";
const Parent = (test) => {
  function showAlert(a) {
    alert(a);
  }
  
  const [data, setData] = useState({
    name: {
      first: "Mohini",
      last: "Raut",
    },
    technical: {
      frontend: {
        js: {
          stack: ["react"],
        },
      },
      backend: {
        js: {
          stack: ["node"],
        },
        python: {
          stack: ["Django"],
        },
      },
    },
    company: [{ name: "nimap" }],
  });

  return (
    <>
      <div>
        <Child data={data} setData={setData} showAlert={showAlert} />
      </div>
    </>
  );
};

export default Parent;
