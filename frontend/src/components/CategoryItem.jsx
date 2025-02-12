import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({category}) => {
  return (
    <div className='reltive overflow-hidden h-96 w-full rounded-lg group'>
        <Link to={"category"+category.href}>
            <div className='w-full h-full cursor-pointer'>
                <img src={category.imageUrl} alt={category.name} className='w-full h-full object-cover group-hover:scale-115 transition-transform duration-500 ease-in-out'
                loading='lazy' />
            </div>
            <div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
                <h3 className='text-white text-2xl font-bold mb-2'>{category.name}</h3>
                <p className='text-gray-200 text-sm'>Explore{category.name}</p>
            </div>
        </Link>
      category item
    </div>
  )
}

export default CategoryItem
