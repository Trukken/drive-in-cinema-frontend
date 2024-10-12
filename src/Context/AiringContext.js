import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = 'http://localhost/api/'

const AiringContext = createContext(null);

export const AiringProvider = ({children}) => {
    const [airings, setAirings] = useState([]);
    const [airing, setAiring] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    const [formValues, setFormValues] = useState({
      start: '',
      number_of_parking_spots: '',
      movie_id: ''
    });
  
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }
  
    const getAirings = async () => {
      const apiAirings = await axios.get('airing');
      setAirings(apiAirings.data);
    }
  
    const getAiring = async (id) => {
      const response = await axios.get('airing/' + id);
      const apiAiring = response.data;
      setAiring(apiAiring);
      setFormValues(apiAiring);
    }
  
    const postAiring = async (e) => {
      e.preventDefault();
      try {
        await axios.post('airing', formValues);
        getAirings();
        navigate('/airing');
      } catch (error) {
        setErrors(error.response.data.errors);
      }
    }
  
    const updateAiring = async (e) => {
      e.preventDefault();
      try {
        await axios.put('airing/' + airing.id, formValues);
        getAirings();
        navigate('/airing');
      } catch (error) {
        setErrors(error.response.data.errors);
      }
    }
  
    const deleteAiring = async (id) => {
      await axios.delete('airing/' + id);
      getAirings();
      navigate('/airing');
    }

    const getAiringsForMovie = async (id) => {
      const apiAirings = await axios.get('/movie/' + id + '/airings');
      setAirings(apiAirings.data);
    }

    return <AiringContext.Provider value={{
        airings,
        getAirings,
        airing,
        getAiring,
        formValues,
        setFormValues,
        onChange,
        errors,
        postAiring,
        updateAiring,
        deleteAiring,
        getAiringsForMovie
    }}>{children}</AiringContext.Provider>
}

export default AiringContext;