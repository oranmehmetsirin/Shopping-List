import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'
import dispatch from '../components/Modal'
import { createDataFunc } from '../redux/dataSlice'
import productInfo from '../components/Modal'
import { modalFunc } from '../redux/modalSlice'

const Product = () => {
      const {modal} = useSelector(state => state.modal)
      const {data} = useSelector(state => state.data)
    
    const buttonFunc = () => {
      dispatch(createDataFunc({...productInfo, id: data.length + 1}))
      dispatch(modalFunc())
    }

    
    return (
    <div>

        <div className='flex items-center flex-wrap'>
        {
          data?.map((  dt, i) => {
            <ProductCard key={i} dt={dt} />
          })
        }
        </div>

        <ProductCard/>
        {modal && <Modal title={"Add a Product"} btnText={"Create"} btnFunc={buttonFunc}/>}
    </div>
  )
}

export default Product