import axios from "axios";
import { useEffect, useState } from "react";

function ProductComponent(product) {
  const image = product.product.images[0];
  return (
    <>
      <div className="w-1/4 h-1/6 rounded-md mx-2 my-0 shadow-md p-2 flex ">
        <div className="w-1/3 h-full mr-2 ">
          <img src={image} className="w-full h-full rounded-md" />
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="w-full h-3/5 flex-col flex justify-around">
            <p className="text-black text-md ">{product.product.productName}</p>
            <p className="text-black text-md ">{product.product.price}</p>

            <p className="text-black text-md ">{product.product.quantity}</p>
          </div>
          <div className="w-full h-2/5">
            <p className="text-black text-md font-semibold">
              {product.product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Inventory() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/product/getProducts",
      {
        withCredentials: true,
      }
    );

    console.log("data.response ", data);

    setProducts(data.response);
  };

  useEffect(() => {
    void getProducts();
  }, []);

  useEffect(() => {}, [products]);

  return (
    <>
      <div className=" 100 h-full w-full flex justify-center items-end">
        <div className="bg-white w-11/12 h-5/6 shadow-lg p-2 flex flex-col">
          <p className="text-purple-900   text-lg  mb-3 ">Inventory</p>
          <div className="w-full h-full flex flex-wrap justify-around overflow-y-scroll ">
            {products &&
              products.map((product, index) => {
                return <ProductComponent key={index} product={product} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Inventory;
