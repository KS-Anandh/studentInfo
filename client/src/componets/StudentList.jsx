import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axois from 'axios'
const StudentList = () => {
  const [list,setList]=useState([])
   useEffect(()=>{
    axois.get("http://localhost:7000/student/list")
    .then((res)=>{
      setList(res.data)
   })
    .catch((err)=>console.log("there is error from api"))
   },[])

  function Delete(id){
  axois.delete(`http://localhost:7000/student/delete/${id}`)
  .then((res)=>{
    alert(res.data)
    setList(list.filter((item)=>item._id!=id))
  })
   }
  return (
    <div><div className='Dashboard'>
    <table  className='table_main'>
      <thead>
            <tr>
                <th>REG</th>
                <th>NAME</th>
                <th>MAIL</th>
                <th>FEES</th>
                <th>UPDATE</th>
                <th>DELETE</th>
            </tr>
            </thead> 
            <tbody>      
            {
              list.map((item,id)=>{
                  return(<tr key={id}>
                  <td>{item.reg}</td>
                  <td>{item.name}</td>
                  <td>{item.mail}</td>
                  <td>{item.fees}</td>
                  <td><Link to={`/update/${item._id}`}><button className='btn-warning' >edit</button></Link></td>
                  <td> <button onClick={()=>{
                  Delete(item._id)
                  }} className="btn-danger" >delete</button> </td>
              </tr>)
              })
            }

                    </tbody> 
    </table>
</div></div>
  )
}

export default StudentList