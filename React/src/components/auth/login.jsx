import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(updateSignup) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (data.error) {
        return alert("Invalid Credentails");
      }

      data.response.role === "VENDOR"
        ? navigate("vendor")
        : navigate("customer");
    } catch (error) {
      return alert("Invalid Credentails");
    }
  };

  return (
    <>
      <div className="w-screen h-screen  flex justify-center bg-slate-200">
        <div className="w-3/12 h-full flex items-center flex-col justify-center ">
          <div className="w-full p-4   bg-white rounded-md">
            <div className="w-full  flex  ">
              <div className="w-full h-full flex flex-col">
                <div className="w-full flex justify-start flex-col items-center">
                  <p className="text-black text-2xl font-semibold mb-4">
                    Login
                  </p>
                </div>
                <label className="text-black text-md font-semibold mb-1">
                  Email
                </label>
                <input
                  className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none mb-2"
                  placeholder="Abc@example.com"
                  required
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="text-black  text-md font-semibold mb-1">
                  password
                </label>
                <input
                  className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none"
                  required
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex justify-center mt-2 flex-col items-center">
              <div className="w-full flex  items-start mb-4">
                <p className="text-gray-500  text-md mr-2">
                  {"Don't have an account? "}
                  <span
                    className=" cursor-pointer hover:text-blue-500 hover:underline"
                    onClick={() => {
                      void updateSignup.updateSignup(true);
                    }}
                  >
                    sign up
                  </span>
                </p>
              </div>
              <button
                className="bg-blue-500 focus:outline-none w-32 disabled:bg-gray-200"
                disabled={!(email && password)}
                onClick={() => {
                  void login();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
