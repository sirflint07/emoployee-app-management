import React, { useEffect } from 'react'
import { getUsers } from "../../lib/helper"
import { useQuery } from 'react-query'
// import db from '../../database/data.json'
import { useDispatch, useSelector } from 'react-redux'
import {BsTrash, BsPencil} from 'react-icons/bs'
import { toggleChangeAction } from '../../redux/reducer'
import UserForm from './UserForm'
import UpdateUserForm from './UpdateUserForm'
// import { DialogBasicOne } from './Dialog'
// import { AnimatedNumberBasic } from './Numbers'
// import Image from 'next/image'

export default function Table() {

  
  //const state = useSelector((state) => console.log())
  //console.log(state)
  const { isError, isLoading, data, error } = useQuery('users', getUsers);  // Invoke getUsers
  const handleUpdate = () => {
    console.log('updated')
  }
  

  if (isLoading) return (<div>Loading data...</div>)
  if (isError) return (<div>Error: {error.message}</div>)
 

  return (
    <div className='min-w-full mt-8'>
      <table className='w-11/12 mx-auto'>
        <thead className='font-mono text-base'>
         <tr className='bg-gray-900 text-slate-300'>
            <th className='py-2'>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Birthday</th>
            <th>Status</th>
            <th>Action</th>
         </tr>
        </thead>
        <tbody>
        {data && Array.isArray(data) && data.map((item, i) => (
            <UserData key={i} {...item} />
          ))}

           {/* {db && Array.isArray(db) && db.map((item, i) => (
            <UserData key={i} {...item} />
          ))} */}
        </tbody>
      </table>
      <div>
      </div>
    
    </div>
  )
}

function UserData({ name, email, avatar, salary, date, status }) {
  const visible = useSelector((state) => state.app.client.toggleform)
  const dispatch = useDispatch()

  const handleUpdate = () => {
    dispatch(toggleChangeAction())
    console.log(visible)
  }
  
  return (
    <tr className='bg-slate-100 text-sm text-center'>
       <td className='flex pl-8 py-2'>
       <img src={avatar} alt='' className='w-8 h-8 rounded-full object-cover'/>
        <span className='pl-2 place-self-center font-semibold inline-block text-gray-600 text-base'>
          {name || '#'}
        </span>
       </td>
       <td><span className='p-2 font-normal inline-block'>{email || ''}</span></td>
       <td><span className='p-2 font-normal inline-block'>{salary || ''}</span></td>
       <td><span className='p-2 font-normal inline-block'>{date || ''}</span></td>
       <td>
        <span className={`${status === 'Active' ? 'bg-green-500' : 'bg-rose-500'} p-2 font-normal inline-block px-3 py-2 rounded-3xl`}>
          {status || ''}
        </span>
       </td>
       <td className='flex justify-around pb-4 -pt-2 px-3'>
        <button><BsTrash size={14} color='#333333'></BsTrash></button>
        <button onClick={handleUpdate} className='pl-2'><BsPencil size={14} color='#333333'></BsPencil></button>
       </td>
    </tr>
  )
}