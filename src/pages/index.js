import { Inter } from 'next/font/google'
import Header from './Header'
import Layout from '@/layout'
import UserButton from '@/components/UserButton'
import Table from '@/components/Table'
import UserForm from '@/components/UserForm'
import UpdateUserForm from '@/components/UpdateUserForm'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const [visible, setVisible] = useState(false)
const handleClick = () => {
  (visible ? setVisible(false) : setVisible(true))
}

  return (
    <section className='container mx-auto w-5/6'>
      <div className='p-1 border-b-1 mb-8'>
        <div onClick={handleClick} className='cursor-pointer'>
        <UserButton title='Add employee'/>
        </div>
      </div>
    {/* {visible ? <UserForm /> : <UpdateUserForm />} */}
    {visible && <UserForm />}
    <Table />
    <br />
      <br />
      <br />
      <br />
    </section>
   
  )
}
