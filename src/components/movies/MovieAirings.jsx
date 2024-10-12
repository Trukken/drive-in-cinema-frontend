import { useContext, useEffect } from "react"
import { Link, useParams } from 'react-router-dom';
import AiringContext from "../../Context/AiringContext"

export const MovieAirings = () => {
  const {airings, getAiringsForMovie, deleteAiring} = useContext(AiringContext)
  let {id} = useParams();

  useEffect(() => {
    getAiringsForMovie(id);
  }, [])

  return (
    <div className='mt-10'>
    <div className='flex justify-end m-2 p-2'>
      <Link to='/airing/create' className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>Add Airing</Link>
    </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                      <th scope='col' className='px-6 py-3'>
                          Start
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          Numer of parking spots
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          Related movie
                      </th>
                      <th scope='col' className='px-6 py-3'>
                          <span className='sr-only'>Edit</span>
                      </th>
                  </tr>
              </thead>
              <tbody>
                {airings.map((airing) => {
                  return (
                  <tr key={airing.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {airing.start}
                    </th>
                    <td className='px-6 py-4'>
                      {airing.number_of_parking_spots}
                    </td>
                    <td className='px-6 py-4'>
                      <Link to={`/movie/${airing.movie_id}`} className='px-4 py-2 bg-slate-100 hover:bg-slate-300 text-black rounded-md'>{airing.movie_id}</Link>
                    </td>
                    <td className='px-6 py-4 w-64'>
                      <Link to={`/airing/${airing.id}/update`} className='font-medium px-4 py-2 bg-green-500 hover:bg-green-800 text-white rounded-md '>Update</Link>
                      <button onClick={() => deleteAiring(airing.id)} className='ml-2 font-medium px-4 py-2 bg-red-500 hover:bg-red-800 text-white rounded-md '>Delete</button>
                    </td>
                  </tr>)
                })}
              </tbody>
          </table>
      </div>
    </div>
  )
}
