import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = 'http://localhost/api/'

const MovieContext = createContext(null);

export const MovieProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    age_rating: '',
    language: '',
    cover_image: ''
  });

  const onChange = (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value})
  }

  const getMovies = async () => {
    const apiMovies = await axios.get('movie');
    setMovies(apiMovies.data);
  }

  const getMovie = async (id) => {
    const response = await axios.get('movie/' + id);
    const apiMovie = response.data;
    setMovie(apiMovie);
    setFormValues(apiMovie);
  }

  const postMovie = async (e) => {
    e.preventDefault();
    try {
      await axios.post('movie', formValues);
      getMovies();
      navigate('/movie');
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  }

  const updateMovie = async (e) => {
    e.preventDefault();
    try {
      await axios.put('movie/' + movie.id, formValues);
      getMovies();
      navigate('/movie');
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  }

  const deleteMovie = async (id) => {
    await axios.delete('movie/' + id);
    getMovies();
    navigate('/movie');
  }

    return <MovieContext.Provider value={
      {
        movies,
        getMovies,
        movie,
        getMovie,
        formValues,
        setFormValues,
        onChange,
        errors,
        postMovie,
        updateMovie,
        deleteMovie
      }
    }>{children}</MovieContext.Provider>
}

export default MovieContext;