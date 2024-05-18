import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';


const Modal = ({title, content, btnText, btnFunc} ) => {
    const dispatch = useDispatch();
    const [productInfo, setProductInfo] = useState({name:"", price:"", url:""})
    const disptach = useDispatch()
    const onChangeFunc = (e, type) => {
      if(type == "url") {
        setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))

      } else {
        setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
      }
    }
    return (
    <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center'>
      <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
        <div>
          <div className='border-b py-3 flex items-center justify-between'>
            <div className='text-xl'>{title}</div>
            <GrClose onClick={() => dispatch(modalFunc())} size={21}/>
          </div>
          <input type='text' className='h-10 w-3/4 border-b rounded-md p-2 outline-none mt-2' placeholder='Add a Product ' name='name' id='name' onChange={e => onChangeFunc(e, "name")}/>
          <input type='number' className='h-10 w-3/4 border-b rounded-md p-2 outline-none mt-2' placeholder='Add a Price' name='price' id='price' onChange={e => onChangeFunc(e, "price")}/>
          <input type='file' className='h-10 w-3/4 border-b rounded-md p-2 outline-none mt-2' placeholder='Add a Photo' name='url' id='url' onChange={e => onChangeFunc(e, "url")}/>
          <Button btnText={btnText} onClick={btnFunc}/>
        </div>
      </div>
    </div>
  )
}

export default Modal;