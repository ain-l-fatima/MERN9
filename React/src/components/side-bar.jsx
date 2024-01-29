function SideBar(updateComponent) {
  return (
    <>
      <div className="w-1/6  h-full bg-gray-50  flex items-center  shadow-2xl justify-end">
        <div className="w-full h-5/6    p-4  ">
          <p
            className="text-purple-900   text-lg my-1  cursor-pointer hover:bg-gray-200 p-2 rounded-md transition delay-150 "
            onClick={() => {
              void updateComponent.updateComponent("ADDPRODUCT");
            }}
          >
            Add Product
          </p>
          <p
            className="text-purple-900    text-lg   my-1   cursor-pointer hover:bg-gray-200 p-2 rounded-md transition delay-150 "
            onClick={() => {
              void updateComponent.updateComponent("INVENTORY");
            }}
          >
            Inventory
          </p>
          <p
            className="text-purple-900  text-lg  my-1   cursor-pointer hover:bg-gray-200 p-2 rounded-md transition delay-150 "
            onClick={() => {
              void updateComponent.updateComponent("ORDERS");
            }}
          >
            Orders
          </p>
        </div>
      </div>
    </>
  );
}

export default SideBar;
