import { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidV4 } from "uuid";
import axios from "axios";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://fapaboxxewvjmbimghvz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcGFib3h4ZXd2am1iaW1naHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1Njc4NDAsImV4cCI6MjAxOTE0Mzg0MH0.x5ScSG_6Gd7j5UxniS0YtLZZg36tz5tFlc-NnQBQoog"
);

function UploadImage(uploadImage) {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  return (
    <>
      <div className="w-1/5 h-2/3 bg-gray-300  rounded-md cursor-pointer flex items-center justify-center">
        {!image ? (
          <>
            <p
              className=" text-5xl"
              onClick={() => {
                hiddenFileInput.current.click();
              }}
            >
              +
            </p>
          </>
        ) : (
          <>
            <img
              src={image}
              className=" w-full h-full"
              onClick={() => {
                hiddenFileInput.current.click();
              }}
            />
          </>
        )}

        <input
          type="file"
          className="hidden"
          accept="image/*"
          multiple
          ref={hiddenFileInput}
          onChange={async (e) => {
            const file = e.target.files[0];
            setImage(URL.createObjectURL(file));
            const { data: uploadData, error: uploadError } =
              await supabase.storage
                .from("images")
                .upload("image" + uuidV4(), file);

            if (uploadError) {
              alert("unable to upload image ");
              setImage(null);
            }

            console.log("upload image ", uploadData);
            const { data: getData } = supabase.storage
              .from("images")
              .getPublicUrl(uploadData.path);
            console.log("get image ", getData);

            void uploadImage.uploadImage(getData.publicUrl);
          }}
        />
      </div>
    </>
  );
}

function AddProduct() {
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const tempImageData = [
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
  ];

  const uploadImage = (image) => {
    setImages([...images, image]);
  };

  const addProduct = async () => {
    console.log("add product")
    const { data, error } = await axios.post(
      "http://localhost:3000/product/addProduct",
      {
        images,
        productName,
        price,
        quantity,
        description,
      },
      { withCredentials: true }
    );
    if (error) {
      return alert("unable to create product");
    }

    if (data) {
      alert("Product Added to Inventory");
    }

    setImages([]);
    setDescription("");
    setPrice("");
    setQuantity("");
    setProductName("");
  };

  return (
    <>
      <div className=" 100 h-full w-full flex justify-center items-end">
        <div className="bg-white w-11/12 h-5/6 shadow-lg p-2 flex flex-col">
          <p className="text-purple-900   text-lg   ">Add Product</p>
          <div className="w-full h-full  p-2">
            <div className=" w-full h-2/5 flex justify-between px-8 items-center ">
              {tempImageData.map((items, index) => {
                return <UploadImage key={index} uploadImage={uploadImage} />;
              })}
            </div>
            <div className=" w-full h-2/5 px-8 ">
              <div className=" w-full h-2/5 flex flex-col justify-start items-start ">
                <div className="w-full py-2  flex justify-between ">
                  <div className="w-1/4 h-full flex flex-col">
                    <label className="text-black text-md font-semibold mr-2">
                      Product Name
                    </label>
                    <input
                      className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none mb-2"
                      placeholder="product name"
                      required
                      type="text"
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-1/4 h-full flex flex-col">
                    <label className="text-black text-md font-semibold mr-2">
                      Price
                    </label>
                    <input
                      className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none mb-2"
                      placeholder="product price"
                      required
                      type="number"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-1/4 h-full flex flex-col">
                    <label className="text-black text-md font-semibold mr-2">
                      Quantity
                    </label>
                    <input
                      className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none mb-2"
                      placeholder="product quantity"
                      required
                      type="number"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full  py-2 flex justify-between ">
                  <div className="w-1/4 h-full justify-items-center flex flex-col">
                    <label className="text-black text-md font-semibold mr-2">
                      Decription
                    </label>
                    <input
                      className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none mb-2"
                      placeholder="product description"
                      required
                      type="text"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-1/5 ">
              <div className=" w-full h-full px-8  flex justify-end items-start focus-visible:outline-none">
                <button
                  disabled={
                    !(
                      productName &&
                      price &&
                      description &&
                      quantity &&
                      images.length > 3
                    )
                  }
                  onClick={() => {
                    void addProduct();
                  }}
                  className=" bg-purple-900  disabled:bg-gray-300"
                >
                  Add Product{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
