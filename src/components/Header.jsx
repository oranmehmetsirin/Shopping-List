import React from 'react'
import { MdPostAdd } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice';


const Header = () => {
    const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-between bg-indigo-900 text-white px-4 py-3'>
        <div className='text-2xl'>React</div>
        <div className='flex items-center gap-5'>
            <div className='text-black'>
                <select className='h-6 rounded' name="" id="">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
                <input className='h-6 rounded px-4' type="text"placeholder=' Search...'/>
            <div onClick={() => dispatch(modalFunc())} className='bg-indigo-700 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'>
                <MdPostAdd size={27}/>
            </div>
        </div>
    </div>
  )
}

export default Header