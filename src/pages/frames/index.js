import React, { useState } from 'react'
import { useReducer } from 'react'
import UserButton from '../../components/UserButton'
import { Modal } from '@/components/Dialog'
// import { useMutation, useQueryClient } from 'react-query'
// import { postUser } from '../../lib/helper'

export default function Form() {

  const formReducer = function (state, action) {
    return {
      ...state,
      [action.target.name]: action.target.value
    }
  }
    
  const [formData, setFormData] = useReducer(formReducer, {})

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if (Object.keys(formData).length === 0) {
     setdataAvail(false)
    }
   }


   const [dataAvail, setdataAvail] = useState(true)
  return (
    <div className='mb-10 w-10/12 mx-auto mt-10'>
    {dataAvail && <Modal />}
      <form className='grid grid-cols-1 lg:grid-cols-3' onSubmit={handleSubmit}>
        <div>
        <input autoComplete='true' type='text' name='firstname' className='px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1' placeholder='First Name' onChange={setFormData}/>
        <input autoComplete='true' type='text' name='lastname' className='px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1' placeholder='Last Name' onChange={setFormData}/>
        <input autoComplete='true' type='text' name='email' className='px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1' placeholder='Email' onChange={setFormData}/>
        <input type='submit' value='Submit' className='bg-indigo-700 mb-3 px-3 py-2 text-slate-100 rounded-md border border-white font-medium cursor-pointer hover:bg-slate-100 outline hover:outline-yellow-300 hover:text-zinc-700 hover:outline-1'/>
        </div>
        <div>
        <input type='text' name='salary' className='px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1' placeholder='Salary' onChange={setFormData}/>
        <input type='date' name='birthday' className='px-1 mb-3 py-2 text-sm border border-slate-200 block rounded-md w-5/6' placeholder='Date of Birth' onChange={setFormData}/>
        <div className='space-x-5'>
        <div className='inline-block space-x-1 align-text-bottom'>
            <input type='radio' id='active' value='active' className='form-check-input appearance-none rounded-full w-4 h-4 border border-gray-950 bg-slate-100 align-middle checked:bg-green-500 checked:border checked:border-gray-900' onChange={setFormData}/>
            <label htmlFor='active' className='align-baseline'>Active</label>
        </div>
        <div className='inline-block space-x-1 align-text-bottom'>
            <input type='radio' id='inactive' value='inactive' className='form-check-input appearance-none rounded-full w-4 h-4 border border-gray-950 bg-slate-100 align-middle checked:bg-green-500 checked:border checked:border-gray-500' onChange={setFormData}/>
            <label htmlFor='inactive' className='align-baseline'>Inactive</label>
            
        </div>
        <UserButton title='Add Member'/>
        </div>
        </div>
        
      </form>
    </div>
  )
}
