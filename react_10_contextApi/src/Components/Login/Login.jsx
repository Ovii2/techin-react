import UserContext from "../../UserContext/UserContext";
import { useContext } from "react";

function Login() {
  const { userHandler } = useContext(UserContext);

  return (
    <>
      <h1>Login form</h1>
      <form>
        <input type="text" id="name" placeholder="Enter user name" />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            userHandler({ userName: "admin", isAdmin: true });
          }}
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
