import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let err = {};

        if (!name.trim()) {
            err.name = "Enter your name";
        }

        if (!email.trim()) {
            err.email = "Enter your email";
        } else if (!emailRegex.test(email)) {
            err.email = "Enter a valid email";
        }

        if (!age.trim()) {
            err.age = "Enter your age";
        }

        if (Object.keys(err).length === 0) {
            alert("Login successfully");
            axios.post("http://localhost:3001/createUser", { name, email, age })
                .then(result => {
                    console.log(result);
                    navigate('/');
                })
                .catch(err => console.log(err));
        }

        setError(err);
    };

    return (
        <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' 
                        onChange={(e) =>setName(e.target.value)}/>
                        <p style={{color:"red"}}>{error.name}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' className='form-control' 
                        onChange={(e) =>setEmail(e.target.value)}/>
                        <p style={{color:"red"}}>{error.email}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="number" placeholder='Enter Age' className='form-control' 
                        onChange={(e) =>setAge(e.target.value)}/>
                        <p style={{color:"red"}}>{error.age}</p>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;


// import React, {  useState } from 'react';
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

// function CreateUser(){
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [age, setAge] = useState()
//     const navigate = useNavigate()
//     const [error,setError]=useState({})
//     // const [emailreg,setEmailreg]=useState("/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/")
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
//     const Submit =(event) =>{
//         event.preventDefault()
//         let err={}
//         if(!name){
//            err.name=("enter your name")
//         }
//         else if(emailreg.test(email)){
//             err.emailreg="enter correct format"
//         }
//         else if(!email){
//             err.email=("enter your Email")
//         }
//         else if(!age){
//             err.age=("enter yor age")
//         }
//         else{
//             alert("Login successfully")
//             axios.post("http://localhost:3001/createUser",{name,email,age})
//             .then(result =>{
//                 console.log(result)
//                 navigate('/')
//             })
//             .catch(err => console.log(err))
//         }
//         setError(err)
//     }
//     return(
//         <div className='d-flex vh-100 bg-dark justify-content-center aligh-item-center'>
//             <div className="w-50 bg-white rounded p-3">
//                 <form onSubmit={Submit}>
//                     <h2>Add User</h2>
//                     <div className="mb-2">
//                         <label htmlFor="">Name</label>
//                         <input type="text" placeholder='Enter Name' className='form-control' 
//                         onChange={(e) =>setName(e.target.value)}/>
//                         <p style={{color:"red"}}>{error.name}</p>
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="">Email</label>
//                         <input type="text" placeholder='Enter Email' className='form-control' 
//                         onChange={(e) =>setEmail(e.target.value)}/>
//                         <p style={{color:"red"}}>{error.email}</p>
//                         <p style={{color:"red"}}>{error.emailreg}</p>
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="">Age</label>
//                         <input type="number" placeholder='Enter Age' className='form-control' 
//                         onChange={(e) =>setAge(e.target.value)}/>
//                         <p style={{color:"red"}}>{error.age}</p>
//                     </div>
//                     <button className='btn btn-success'>Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default CreateUser;