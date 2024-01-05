import React, { useEffect, useState } from "react";

const Catagory = ({handleSelected}) => {
  const [catagories, setCatagories] = useState([]);
  const [active, setActive] = useState('0')
  
  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.log(error));
  }, []);

  

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">All Catagory</h1>
      <div className="max-lg:hidden"> 
        {catagories.map((catagory) => (
          <button
            key={catagory.id}
            onClick={() => {
              handleSelected(catagory.id)
              setActive(catagory.id)
            }}
            className={`w-full py-3  text-start rounded  px-6 border-b ${active===catagory.id?'bg-red-500 text-white duration-200':'hover:bg-gray-100'}`}
          >
            <h1>{catagory.name}</h1>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
