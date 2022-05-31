import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Index from "./components/Index";
import MovieDetails from "./components/MovieDetails";

// b71712c0

const API_URL = "https://omdbapi.com?apikey=b71712c0";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-black min-h-screen">
          <div className="container md:mx-auto px-4">
            <Header />
            <Routes>
              <Route>
                <Route
                  path="/React-Movie-App"
                  element={<Index API_URL={API_URL} />}
                ></Route>
                <Route
                  path="/React-Movie-App/:title"
                  element={<MovieDetails API_URL={API_URL} />}
                ></Route>
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
