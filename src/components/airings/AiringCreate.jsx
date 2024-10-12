import { useContext } from "react"
import AiringContext from "../../Context/AiringContext"

export const AiringCreate = () => {  
  const {formValues, onChange, errors, postAiring} = useContext(AiringContext)

  return (
    <div className='mt-10'>
      <form onSubmit={postAiring} className='max-w-md mx-auto p-5 bg-gray-100 shadow-sm rounded-md'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='start' className='block mb-2 text-sm font-medium'>Start</label>
            <input name='start' value={formValues['start']} onChange={onChange} className='border border-gray-500 text-black text-sm rounded-md block w-full p-2'/>
            {errors.start && <span className="text-sm text-red-600">{errors.start}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='number_of_parking_spots' className='block mb-2 text-sm font-medium'>Numer of parking spots</label>
            <input name='number_of_parking_spots' value={formValues['number_of_parking_spots']} onChange={onChange} className='border border-gray-500 text-black text-sm rounded-md block w-full p-2'/>
            {errors.number_of_parking_spots && <span className="text-sm text-red-600">{errors.number_of_parking_spots}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='movie_id' className='block mb-2 text-sm font-medium'>Related movie</label>
            <input name='movie_id' value={formValues['movie_id']} onChange={onChange} className='border border-gray-500 text-black text-sm rounded-md block w-full p-2'/>
            {errors.movie_id && <span className="text-sm text-red-600">{errors.movie_id}</span>}
          </div>
        </div>
        <div className='my-4 mx-auto flex justify-center'>
          <button className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>Add Airing</button>
        </div>
      </form>
    </div>
  )
}
