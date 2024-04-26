import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userDate) => {
        if (userDate) {
          dispatch(login({ userDate }));
        } else {
          dispatch(logout());
        }
      })
      .finally(setloading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-[#212121]">
      <div className="w-full block">
        <Header />
        <main className="mt-16"><Outlet/></main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
