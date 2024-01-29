import { useState } from "react";
import Nav from "../components/nav-bar";

function Customer() {
  const [component, setComponent] = useState("HOME");

  const updateComponent = (newState) => {
    setComponent(newState);
  };
  console.log(component ? component : "");

  return (
    <>
      <div className="w-screen h-screen bg-gray-50 flex ">
        <Nav updateComponent={updateComponent} />
      </div>
    </>
  );
}

export default Customer;
