import { Button, TextField } from '@mui/material'
import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import { userContext } from '../App';







const Home = ({item , setitem}) => {

  let data = {
    theme: "light",
    name: "Aman",
    userId: "aox01",
    email: "aman1@gmail.com",
    contactNumber: "+91 9898987231",
    noOfQuestionsSolved: 120,
    codingStreak: 30,
  };


  const [firstname, setfirstname] = useState()
  const [age, setphone] = useState()


  const handlesubmit = (e) => {
    e.preventDefault();
    let d1 = {
      firstname: firstname,
      age: age
    }
    setitem([...item, d1])
    setfirstname('')
    setphone('')

  }
  console.log(item)



  return (
    <React.Fragment>
        <div style={{ marginTop: "5%", alignItems: "center", textAlign: "center" }}>
          <h2>Add User</h2>
          <TextField id="standard-basic" value={firstname} onChange={(e) => setfirstname(e.target.value)} name="firstname" label="firstname" variant="standard" style={{ width: "30%" }} />
          <br />
          <TextField id="basic" value={age} onChange={(e) => setphone(e.target.value)}  name="age" label="age" variant="standard" type="number" style={{ width: "30%" }} />
          <br />
          <Button style={{ marginTop: "10px", width: "30%" }} onClick={handlesubmit} >Register</Button>
        </div>

      
    </React.Fragment>
  )
}

export default Home