import React from 'react'
// import {useEffect, useState} from 'react'
// import { useParams } from 'react-router-dom'
const Employees = () => {
    const [item , setItems] = React.useState([])
    const [copyitem,setCopyItems]=React.useState([])
// const navigate = useNavigate();
    React.useEffect(()=>{
        getData()
    },[])

    const getData =()=>{
        fetch(`http://localhost:3004/posts`)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res)
            setItems(res);
            setCopyItems(res);
            // updateValue()
            
            // console.log(item);
            // console.log(copyitem);
          }).catch((err)=>{
            console.log(err)
          })
    }
    const handleClick =()=>{

    }
  return (
    <div>


{
        copyitem.map(post => {
          return(
            <div key={post.id} className='poster' onClick={()=> handleClick(post.id )} >
          
           
            <div className='postertitle'>
            <h4 style={{margin: "0px"}}>{post.id}</h4>
            <h4 style={{margin: "0px"}}>{post.name}</h4>
            <p style={{margin: "0px"}}>{post.email}</p>
            <p style={{margin: "0px"}}>{post.Password} </p>
            <p style={{margin: "0px", marginBottom:"20px"}}>{post.username} </p>
            </div>
            </div>
           
          )
        })
      }

    </div>
  )
}

export  {Employees}