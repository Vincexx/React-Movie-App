import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Movie from "./components/Movie";

// b71712c0

const API_URL = "https://omdbapi.com?apikey=b71712c0";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route
              path="/React-Movie-App"
              element={<Index API_URL={API_URL} />}
            ></Route>
            <Route
              path="/React-Movie-App/:title"
              element={<Movie API_URL={API_URL} />}
            ></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
