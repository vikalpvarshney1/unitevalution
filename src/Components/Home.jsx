import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [item , setItems] = React.useState([])
    const [copyitem,setCopyItems]=React.useState([])
const navigate = useNavigate();
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
navigate('/:id')
    }
  return (
    <div>


{
        copyitem.map(post => {
          return(
            <div key={post.id} className='poster' onClick={()=> handleClick(post.id )} >
          
           
            <div className='postertitle'>
          
            <p style={{margin: "0px"}}>{post.username} </p>
            <p style={{margin: "0px" , marginBottom: "20px"}}>{post.email}</p>
           
            </div>
            </div>
           
          )
        })
      }

    </div>
  )
}

export  {Home}