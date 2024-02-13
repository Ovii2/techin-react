import { useContext } from "react";
import UserContext from "../../UserContext/UserContext";
import ThemeContext from "../../ThemeContext/ThemeContext";
import "./Profile.css";

function Profile() {
  const { user } = useContext(UserContext);
  const { theme, themeHandler } = useContext(ThemeContext);

  return (
    <div className={`profile-container ${theme}`}>
      <h1>Profile</h1>
      <h4>{user.userName}</h4>
      <h4>Admin? {user.isAdmin ? "true " : "false"}</h4>
      {/* <button onClick={() => themeHandler("dark")}>Switch</button> */}
      <button onClick={() => themeHandler(theme === "dark" ? "light" : "dark")}>Switch</button>
    </div>
  );
}

export default Profile;
