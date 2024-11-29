import React from 'react'

export default function UserButton({title}) {
  return (
    <button className='bg-indigo-700 mb-3 px-3 py-2 text-slate-100 rounded-md border border-white font-medium hover:bg-indigo-900'>
      {title}
    </button>
  )
}
