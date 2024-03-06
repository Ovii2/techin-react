import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { ClipLoader } from 'react-spinners';
import { getAllData } from './Components/services/get';
import CardList from './Components/CardList/CardList';
import CardDetails from './Components/CardDetails/CardDetails';
import Footer from './Components/Footer/Footer';

function App() {
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [update, setUpdate] = useState(0);

  const fetchData = async () => {
    setIsloading(true);
    try {
      const data = await getAllData();
      setDonors(data);
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
      <div className='App'>
        <ToastContainer autoClose={1500} />
        <Header setUpdate={setUpdate} />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='register' element={<RegistrationPage setUpdate={setUpdate} />} />
          <Route
            path='donors-list'
            element={
              !isLoading && donors.length > 0 ? (
                <CardList donors={donors} setUpdate={setUpdate} />
              ) : (
                <div className='loading'>
                  {donors.length === 0 ? (
                    <h2>No donors, found...</h2>
                  ) : (
                    <>
                      <ClipLoader />
                      <p>Loading</p>
                    </>
                  )}
                </div>
              )
            }
          />
          <Route path='donor-details/:id' element={<CardDetails setUpdate={setUpdate} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
