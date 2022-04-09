import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import { Link } from "react-router-dom"
import { userContext } from '../App.js';
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ setitem }) => {

  const item = useContext(userContext);

const onRemove=(id)=>{
  console.log(id)

  const newlist = item.filter((ele , index)=>{
    return (
      index !==id
    )  
  })
 setitem(newlist)
}



  return (
    <div className='container-fluid' >
      <div className="row">

        {item.map((ele , id) => {
          return (
            <div key={id} className="col-12  col-sm-6  col-md-6 col-lg-4 my-3" style={{ marginTop: "5%", alignItems: "center", textAlign: "center" }}>
              <div className='shadow p-3  bg-white rounded'>
                <p className='text-end'  onClick={()=>onRemove(id)} ><AiOutlineClose /></p>
                <img src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg" alt="" style={{ width: "130px", height: "130px", borderRadius: "50%" }} />
                <h2> Name :&nbsp;{ele.firstname}</h2>
                <h2>Age : &nbsp;{ele.age}</h2>
                {/* </div> */}
              </div>
            </div>
          )
        })
        }

      </div>

    </div>

  )
}

export default Cart