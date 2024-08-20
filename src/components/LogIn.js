import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8003/login', { email, password })
      if (response.data.userId) {
        navigate('/signin', { state: { userId: response.data.userId } })
      } else if (response.data === "User does not exist") {
        alert("User does not exist")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col max-w-2xl p-12 mx-auto bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden m-40">
      <h1 className="font-inconsolata p-6 text-xl">Log In here!</h1>
      <form onSubmit={handleSubmit} className='p-6 flex flex-col'>
        <label className='font-inconsolata'>Your Email</label>
        <input
          type='text'
          required
          placeholder="name@flowbite.com"
          onChange={(e) => setEmail(e.target.value)}
          className='p-1 mb-4 font-inconsolata bg-gray-50 border border-gray-300 rounded-lg'
        />
        <label className='font-inconsolata'>Your Password</label>
        <input
          type='password'
          required
          placeholder='123'
          onChange={(e) => setPassword(e.target.value)}
          className='p-1 font-inconsolata bg-gray-50 border border-gray-300 rounded-lg'
        />
        <button type=' submit' className='mt-5 font-inconsolata py-2 px-2 bg-white border border-gray-300 rounded-full dark:hover:bg-gray-200'>Log In!</button>
      </form>
    </div>
  )
}

export default LogIn
