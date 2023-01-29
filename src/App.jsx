import { Route, Routes } from "react-router-dom";

// Local import
// import AppLayout from "./components/applayout";
import HomePage from "./components/routes";
import Login from "./components/routes/login";
import SignUp from "./components/routes/signup";
import { ProvideAuth } from "./components/utils/use-auth";
import "./App.css";
import UserProfile from "./components/routes/profile";
import Product from "./components/routes/productId";

function App() {
  return (
    <ProvideAuth>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ProvideAuth>
  );
}

export default App;
