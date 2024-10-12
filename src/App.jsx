import { Routes, Route, Link } from "react-router-dom";
import { MovieProvider } from "./Context/MovieContext";
import { AiringProvider } from "./Context/AiringContext";

import { MovieIndex } from './components/movies/MovieIndex';
import { MovieSpecific } from './components/movies/MovieSpecific';
import { MovieCreate } from './components/movies/MovieCreate';
import { MovieEdit } from './components/movies/MovieEdit';
import { MovieAirings } from './components/movies/MovieAirings';

import { AiringIndex } from './components/airings/AiringIndex';
import { AiringEdit } from './components/airings/AiringEdit';
import { AiringCreate } from './components/airings/AiringCreate';

function App() {
  return (
      <div className="bg-slate-300">
        <div className="max-w-7xl mx-auto min-h-screen">
          <nav>
            <ul className="flex">
              <li className="m-3 p-3 bg-blue-500 hover:bg-blue-800 text-white rounded-md">
                <Link to="/movie">Movies</Link>
              </li>
              <li className="m-3 p-3 bg-blue-500 hover:bg-blue-800 text-white rounded-md">
                <Link to="/airing">Airings</Link>
              </li>
            </ul>
          </nav>
          <MovieProvider>
            <Routes>
              <Route path="/" element={<MovieIndex />}/>
              <Route path="/movie" element={<MovieIndex />}/>
              <Route path="/movie/:id" element={<MovieSpecific />}/>
              <Route path="/movie/create" element={<MovieCreate />}/>
              <Route path="/movie/:id/update" element={<MovieEdit />}/>
            </Routes>
          </MovieProvider>
          <AiringProvider>
            <Routes>
              <Route path="/airing" element={<AiringIndex />}/>
              <Route path="/airing/create" element={<AiringCreate />}/>
              <Route path="/airing/:id/update" element={<AiringEdit />}/>
              <Route path="/movie/:id/airings" element={<MovieAirings />}/>
            </Routes>
          </AiringProvider>
        </div>
      </div>
  );
}

export default App;
