import React from 'react'
import { AuthContext } from '../Contexts/AuthContext';

export const RegisterPage = () => {
const {register} =React.useContext(AuthContext)
    const [formDetails , SetformDetails] =React.useState({
      name: "",
      email: "",
      username: "",
      mobile: "",
     password: ""
 });
//  https://masai-api-mocker.herokuapp.com/auth/register
 const handleChange = (e) => {
     const {name , value } = e.target;
 
     SetformDetails({
         ...formDetails,
         [name]: value
     });
    }

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails)
fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
    method: "POST",
    body: JSON.stringify(formDetails),
    headers: {"Content-Type": "application/json"}
})
.then((res)=> res.json())
.then((res) => register(res.token));

}

// {
//   "name": "MASAI School",
//   "email": "hello@masai.com",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!" 
// }

const {name,email , password,username} =formDetails;
    return (
    <form onSubmit={handleSubmit}> 
<h1>Register Page</h1>

<br />
<input 
name='name'
type="text"
placeholder='name'
value={name}
onChange={handleChange}
/>

<br />

<input
name= "email"
type="text"
placeholder='Email'
value={email}
onChange={handleChange}
/>
<br />
<input 
name='password'
type="text"
placeholder='Password'
value={password}
onChange={handleChange}
/>

<br />
<input 
name='username'
type="text"
placeholder='username'
value={username}
onChange={handleChange}
/>



<br />
<input type="submit" value="Login"  />
    </form>
  )
}

// export  {Login}