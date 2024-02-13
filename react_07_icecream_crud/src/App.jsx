import { useEffect, useState } from "react";
import { getAllData } from "./services/get";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";
import FlavorsList from "./Components/FlavorsList/FlavorsList";
import Counter from "./Components/Counter/Counter";
import Form from "./Components/Form/Form";

// import './App.css'

function App() {
  const [flavors, setFlavors] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [update, setUpdate] = useState(0);

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setFlavors(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <>
      <ToastContainer autoClose={1500} />
      <Form setUpdate={setUpdate} flavors={flavors} />
      <div className="flavors">
        {!isLoading && <FlavorsList flavors={flavors} setUpdate={setUpdate} />}
        {!isLoading && <Counter flavors={flavors} />}
      </div>
      {isLoading && (
        <div className="loading">
          <ClipLoader />
          <p>Loading</p>
        </div>
      )}
    </>
  );
}

export default App;
