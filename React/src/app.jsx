import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/auth-layout";
import Home from "./layouts/admin-layout";
import Customer from "./layouts/customer-layout";
import Protected from "./middleware";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
      <Route
        path="/vendor"
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
}

export default App;
