import React from 'react'
import HeaderTemp from '../Temp/HeaderTemp'
import FooterTemp from '../Temp/FooterTemp'
import DescriptionTemp from '../Temp/DescriptionTemp'
import CardTemp from '../Temp/CardTemp'
import FormTemp from '../Temp/FormTemp'

const Website = () => {
  return (
    <div className='text-gray-100'>
        <HeaderTemp/>
        <DescriptionTemp/>
        <FormTemp/>
        <CardTemp/>
        <FooterTemp/>
    </div>
  )
}

export default Website