import React, { useEffect } from 'react'
import  axios  from 'axios'
import { useState } from 'react'
import {usermail} from './Login'

function Profile(){

    // console.log(user)
    const [data,setdata]=useState(null)

    // const email='coinbase@gmail.com'
    const run=async (usermail)=>{
        try {
            const res=await axios.post('http://localhost:8000/api/profile',{
            Email_ID:usermail
            })
            setdata(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{run(usermail)},[usermail])
    console.log(data)


    console.log(usermail)
    return (
        <div>
            <h1>Profile</h1>
            <input
            value={data.Email_ID}
            type='text'
            readOnly
            />
            <input
            value={data.Select_your_organization_type}
            type='text'
            readOnly
            />
            <input
            value={data.Name_of_your_organization}
            type='text'
            readOnly
            />
            <input
            value={data.Phone_number}
            type='text'
            readOnly
            />
            <input
            value={data.PAN_Card}
            type='text'
            readOnly
            />
        </div>
    )
}

export default Profile