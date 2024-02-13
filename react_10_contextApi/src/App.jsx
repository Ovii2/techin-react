import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserContext from "./UserContext/UserContext";
import ThemeContext from "./ThemeContext/ThemeContext";

function App() {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("light");

  const userHandler = (user) => {
    setUser(user);
  };

  const themeHandler = (theme) => {
    setTheme(theme);
  };

  return (
    <>
      <ThemeContext.Provider value={{theme, themeHandler}}>
        <UserContext.Provider value={{ user, userHandler }}>
          <ToastContainer />
          <Login />
          <Dashboard />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
