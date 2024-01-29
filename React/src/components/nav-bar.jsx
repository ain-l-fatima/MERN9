function Nav(updateComponent) {
  return (
    <>
      <div className=" w-screen h-16 bg-gray-50 flex absolute top-0 shadow-2xl justify-end">
        <div className="w-5/6  flex justify-center">
          <div className="w-3/6 h-full flex justify-start items-center cursor-pointer ">
            <p
              className=" text-purple-900 font-bold  text-xl  "
              onClick={() => {
                void updateComponent.updateComponent("HOME");
              }}
            >
            <i>ecommerce store</i> 
            </p>
          </div>
        </div>
        <div className="w-2/6 h-full flex justify-start items-center gap-4 ">
          <p className="text-black cursor-pointer hover:bg-gray-200 p-2 rounded-md transition delay-150 ">
            🔔 Notifications
          </p>

          <p className="text-black cursor-pointer hover:bg-gray-200 p-2 rounded-md transition delay-150 ">
            🛒 Cart
          </p>
          <p className="text-black cursor-pointer hover:bg-gray-200 p-2 rounded-md transition delay-150 ">
            Profile
          </p>
          <p className="text-black cursor-pointer hover:bg-gray-200 p-2 rounded-md transition delay-150 ">
            Logout
          </p>
        </div>
      </div>

      
    </>
  );
}

export default Nav;
