import { useState } from "react";
import axios from "axios";

function Signup(updateSignup) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");

  const signup = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/user/createUser",
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          roleId: "485625dc-430d-4467-9cc9-938b269e8320",
        }
      );

      console.log("data ", data);

      if (data.error) {
        return alert(data.error);
      }

      return alert("signed up successfully");
    } catch (error) {
      return alert("unable to signup");
    }
  };
  return (
    <>
      <div className="w-screen h-screen  flex justify-center bg-slate-200">
        <div className="w-3/12 h-full flex items-center flex-col justify-center ">
          <div className="w-full  p-4  bg-white rounded-md">
            <div className="w-full  flex  ">
              <div className="w-full h-full flex flex-col">
                <div className="w-full flex justify-center flex-col items-center">
                  <p className="text-black text-2xl font-semibold mb-4">
                    Sign up
                  </p>
                </div>
                <label className="text-black text-md font-semibold mb-1">
                  First Name
                </label>
                <input
                  className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none mb-2"
                  placeholder="First name"
                  required
                  type="text"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <label className="text-black text-md font-semibold mb-1">
                  Last Name
                </label>
                <input
                  className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none mb-2"
                  placeholder="Last name"
                  required
                  type="text"
                  onChange={(e) => {
                    setLasstName(e.target.value);
                  }}
                />

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
                  Password
                </label>
                <input
                  className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none  mb-2"
                  required
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <label className="text-black  text-md font-semibold mb-1">
                  Confirm Password
                </label>
                <input
                  className="border border-gray-300 bg-white p-1 rounded-md text-gray-500 focus:outline-none"
                  required
                  type="password"
                  onChange={(e) => {
                    setCPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex justify-center mt-2 flex-col items-center">
              <div className="w-full flex  items-start mb-4">
                <p className="text-gray-500  text-md mr-2">
                  {"Already have an account? "}
                  <span
                    className=" cursor-pointer hover:text-blue-500 hover:underline"
                    onClick={() => {
                      void updateSignup.updateSignup(false);
                    }}
                  >
                    Login
                  </span>
                </p>
              </div>
              <button
                disabled={
                  !(email, password, confirmPassword, firstName, lastName)
                }
                className="bg-blue-500 focus:outline-none w-32 disabled:bg-gray-200"
                onClick={() => {
                  void signup();
                }}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
