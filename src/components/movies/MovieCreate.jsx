import { useContext } from "react"
import MovieContext from "../../Context/MovieContext"

export const MovieCreate = () => {  
  const {formValues, onChange, errors, postMovie} = useContext(MovieContext)

  return (
    <div className='mt-10'>
      <form onSubmit={postMovie} className='max-w-md mx-auto p-5 bg-gray-100 shadow-sm rounded-md'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='title' className='block mb-2 text-sm font-medium'>Title</label>
            <input name='title' value={formValues['title']} onChange={onChange} className='border border-gray-500 text-black text-sm rounded-md block w-full p-2'/>
            {errors.title && <span className="text-sm text-red-600">{errors.title}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block mb-2 text-sm font-medium'>Description</label>
            <input name='description' value={formValues['description']} onChange={onChange} className='border border-gray-500 text-black text-sm rounded-md block w-full p-2'/>
            {errors.description && <span className="text-sm text-red-600">{errors.description}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='age_rating' className='block mb-2 text-sm font-medium'>Age Rating</label>
            <input name='age_rating' value={formValues['age_rating']} onChange={onChange} className='border border-gray-500 text-black text-sm rounded-md block w-full p-2'/>
            {errors.age_rating && <span className="text-sm text-red-600">{errors.age_rating}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='language' className='block mb-2 text-sm font-medium'>Lanugage</label>
            <input name='language' value={formValues['language']} onChange={onChange} className='border border-gray-500 text-black text-sm rounded-md block w-full p-2'/>
            {errors.language && <span className="text-sm text-red-600">{errors.language}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='cover_image' className='block mb-2 text-sm font-medium'>Cover Image URL</label>
            <input name='cover_image' value={formValues['cover_image']} onChange={onChange} className='border border-gray-500 text-black text-sm rounded-md block w-full p-2'/>
            {errors.cover_image && <span className="text-sm text-red-600">{errors.cover_image}</span>}
          </div>
        </div>
        <div className='my-4 mx-auto flex justify-center'>
          <button className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>Add Movie</button>
        </div>
      </form>
    </div>
  )
}
