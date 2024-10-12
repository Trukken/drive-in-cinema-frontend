import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import MovieContext from '../../Context/MovieContext';

export const MovieSpecific = () => {
  const {movie, getMovie, deleteMovie} = useContext(MovieContext)
  let {id} = useParams();

  useEffect(() =>{
    getMovie(id)
  }, [])
  return (
    <div className='mt-10'>
      <div className='flex justify-end m-2 p-2'>
        <Link to='/movie/create' className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>Add Movie</Link>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                      <th scope='col' className='px-6 py-3'>
                          Title
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          Description
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          Age Rating
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          Lanugage
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          Cover Image
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          <span className='sr-only'>Airings</span>
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          <span className='sr-only'>Edit</span>
                      </th>
                  </tr>
              </thead>
              <tbody>
                <tr key={movie.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {movie.title}
                </th>
                <td className='px-6 py-4'>
                    {movie.description}
                </td>
                <td className='px-6 py-4'>
                    {movie.age_rating}
                </td>
                <td className='px-6 py-4'>
                    {movie.language}
                </td>
                <td className='px-6 py-4'>
                    <img src={movie.cover_image}/>
                </td>
                <td className='px-6 py-4'>
                    <a href='#' className='font-medium px-4 py-2 bg-yellow-500 hover:bg-yellow-800 text-black rounded-md'>Airings</a>
                </td>
                <td className='px-6 py-4 w-64'>
                    <Link to={`/movie/${movie.id}/update`} className='font-medium px-4 py-2 bg-green-500 hover:bg-green-800 text-white rounded-md '>Update</Link>
                    <button onClick={() => deleteMovie(movie.id)} className='ml-2 font-medium px-4 py-2 bg-red-500 hover:bg-red-800 text-white rounded-md '>Delete</button>
                </td>
                </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}
