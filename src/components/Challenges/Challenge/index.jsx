import { Link } from 'react-router-dom'

export default function Challenge(props) {
  const { title, path, thumbnail } = props

  return (
    <div className='p-2 basis-1/3'>
      <div className='flex flex-col items-center overflow-hidden border border-gray-300 border-solid rounded-md'>
        <div className='overflow-hidden'>
          <Link to={path}>
            <img
              src={thumbnail}
              alt={title}
              className='transition ease-in-out duration-0 hover:scale-125 hover:duration-150'
            />
          </Link>
        </div>

        <div className='w-full bg-gray-100'>
          <Link to={path} className='hover:underline'>
            <h2 className='my-4 text-2xl text-center text-gray-800 md:text-xl'>
              {title}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
