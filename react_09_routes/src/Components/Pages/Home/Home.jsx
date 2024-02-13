import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/pricing">Next to pricing</Link>
    </>
  );
}

export default Home;
