import Nav from "../components/nav-bar";
import SideBar from "../components/side-bar";
import Index from "../components/admin/index";
import { useState } from "react";
import AddProduct from "../components/products/add-product";
import Inventory from "../components/products/inventory";
import Orders from "../components/orders/orders";

function Home() {
  const [component, setComponent] = useState("HOME");

  const updateComponent = (newState) => {
    setComponent(newState);
  };

  return (
    <>
      <div className="w-screen h-screen bg-gray-50 flex ">
        <Nav updateComponent={updateComponent} />
        <SideBar updateComponent={updateComponent} />
        {component === "HOME" && <Index />}
        {component === "ADDPRODUCT" && <AddProduct />}
        {component === "INVENTORY" && <Inventory />}
        {component === "ORDERS" && <Orders />}
      </div>
    </>
  );
}

export default Home;
