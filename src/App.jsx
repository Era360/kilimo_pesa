import { Route, Routes } from "react-router-dom";

// Local import
import AppLayout from "./components/applayout";
import HomePage from "./components/routes";
import Login from "./components/routes/login";
import SignUp from "./components/routes/signup";
import "./App.css";
import { ProvideAuth } from "./components/utils/use-auth";

function App() {
  return (
    <ProvideAuth>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ProvideAuth>
  );
}

export default App;
