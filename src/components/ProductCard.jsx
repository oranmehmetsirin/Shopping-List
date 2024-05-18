import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { deleteDataFunc } from '../redux/dataSlice';
import {updateDataFunc } from '../redux/dataSlice';

const ProductCard = ({dt}) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch()
  return (
    <div className='w-[200px] h-[200px] relative m-2 rounded-md'>
      <img className='w-full h-full rounded-md' src={dt?.url} />
      <div className='absolute left-0 bottom-0 bg-indigo-800 text-white w-full px-2'>
        <div className='text-lg font-semibold'>{dt?.name}</div>
        <div>{dt?.price} .-Eur </div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className='absolute top-5 right-2 p-2'>
        <BsThreeDots color='white' size={24}/>
      </div>
      {
        openEdit && (
            <div className='bg-indigo-900 text-white absolute top-0 right-2'>
              <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Delete</div>
              <div onClick={() => dispatch(updateDataFunc(dt?.id))} className='cursor-pointer'>Edit</div>
            </div>
        )
      }
    </div>
  )
}

export default ProductCard