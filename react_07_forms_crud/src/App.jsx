import { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import UserList from "./Components/UserList/UserList.jsx";
import { BeatLoader } from "react-spinners";
import { getAllData, getAllDataPaginated } from "./services/get.js";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.css";
import Select from "./Components/Select/Select.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const fetchData = async () => {
    try {
      // const data = await getAllData();
      const resp = await getAllDataPaginated(page, perPage);
      const { data, items } = resp.data;
      if (items === 0) {
        throw new Error("No items found");
      }
      setTotal(items);
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update, page, perPage]);

  return (
    <>
      <Form setUpdate={setUpdate} />
      {!error && !isLoading && <UserList users={users} setUpdate={setUpdate} />}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {isLoading && (
          <>
            <BeatLoader />
            <p>Loading...</p>
          </>
        )}
      </div>
      {error && <p>{error}</p>}
      <Stack spacing={2}>
        <Pagination
          className="pagination"
          count={total % perPage === 0 ? total / perPage : Math.floor(total / perPage + 1)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            setPage(() => value);
          }}
        />
      </Stack>
      <Select setPerPage={setPerPage} />
    </>
  );
}

export default App;
