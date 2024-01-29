import { useState } from "react";
import Login from "../components/auth/login";
import Signup from "../components/auth/sign-up";

function AuthLayout() {
  const [signup, setSignup] = useState(false);

  const updateSignup = (newState) => {
    setSignup(newState);
  };

  return (
    <>
      {!signup && <Login updateSignup={updateSignup} />}
      {signup && <Signup updateSignup={updateSignup} />}
    </>
  );
}

export default AuthLayout;
