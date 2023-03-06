import React from 'react'
import { Button } from 'react-bootstrap'
import Car from './Car'

const CarsList = (props) => {
    const name = "foulen ben foulen"
  return (
    <>
    <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" ,margin:"50px" , border:"2px solid red" , padding:"20px"}}>
        {props.x.map((el)=> <Car car={el} key={el.id} PriceFunc={props.PriceFunc} />)}
    </div>
    <Button onClick={()=>props.callBackFunc(name)} >callBack Func</Button>
    </>
  )
}

export default CarsList