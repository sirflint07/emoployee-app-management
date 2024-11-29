import React, { useState } from 'react'
import { useReducer } from 'react'
import UserButton from './UserButton'
import { useMutation, useQueryClient } from 'react-query'
import { getUsers, postUser } from '../../lib/helper'

export default function UserForm() {
    
    // Form reducer to handle input state updates
    const formReducer = (state, event) => {
        return {
            ...state,
            [event.target.name]: event.target.value
        }
    }

    const [formData, setFormData] = useReducer(formReducer, {}); // Using formReducer for handling state
    const queryClient = useQueryClient();

    const addMutation = useMutation(postUser, {
        onSuccess: () => {
            queryClient.prefetchQuery('users', getUsers);
        }
    });

    const [notify, setNotify] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if formData is empty
        if (Object.keys(formData).length === 0) {
            console.log('Empty form data');
            setNotify(true); // Trigger a notification if form is empty
            return;
        }

        // Destructure formData to get individual fields
        let { firstName, lastName, email, salary, birthday, status } = formData;

        const model = {
            name: `${firstName} ${lastName}`,
            avatar: `https://randomuser.me/api/portraits/thumb/men/${Math.floor(Math.random() * 100)}.jpg`,
            email: `${email}`,
            salary,
            date: `${birthday}`,
            status: status ?? `Active`
        };

        // Mutate (send the formData to the API)
        addMutation.mutate(model);
    };

    if (addMutation.isError) return <div>Error Adding User</div>;
    if (addMutation.isLoading) return <div>Adding the User</div>;
    if (addMutation.isSuccess) return <div>User Added Successfully</div>;

    return (
        <div className="mb-10">
            <form className="grid grid-cols-1 lg:grid-cols-3" onSubmit={handleFormSubmit}>
                <div>
                    <input
                        autoComplete="true"
                        type="text"
                        name="firstName"  /* Corrected name attribute */
                        className="px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1"
                        placeholder="First Name"
                        onChange={setFormData}
                    />
                    <input
                        autoComplete="true"
                        type="text"
                        name="lastName"  /* Corrected name attribute */
                        className="px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1"
                        placeholder="Last Name"
                        onChange={setFormData}
                    />
                    <input
                        autoComplete="true"
                        type="text"
                        name="email"
                        className="px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1"
                        placeholder="Email"
                        onChange={setFormData}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-indigo-700 mb-3 px-3 py-2 text-slate-100 rounded-md border border-white font-medium cursor-pointer hover:bg-slate-100 outline hover:outline-yellow-300 hover:text-zinc-700 hover:outline-1"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="salary"
                        className="px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1"
                        placeholder="Salary"
                        onChange={setFormData}
                    />
                    <input
                        type="date"
                        name="birthday"  /* Updated name attribute */
                        className="px-1 mb-3 py-2 text-sm border border-slate-200 block rounded-md w-5/6"
                        placeholder="Date of Birth"
                        onChange={setFormData}
                    />
                    <div className="space-x-5">
                        <div className="inline-block space-x-1 align-text-bottom">
                            <input
                                type="radio"
                                name="status"  /* Added missing name attribute */
                                id="active"
                                value="Active"
                                className="form-check-input appearance-none rounded-full w-4 h-4 border border-gray-950 bg-slate-100 align-middle checked:bg-green-500 checked:border checked:border-gray-900"
                                onChange={setFormData}
                            />
                            <label htmlFor="active" className="align-baseline">Active</label>
                        </div>
                        <div className="inline-block space-x-1 align-text-bottom">
                            <input
                                type="radio"
                                name="status"  /* Added missing name attribute */
                                id="inactive"
                                value="Inactive"
                                className="form-check-input appearance-none rounded-full w-4 h-4 border border-gray-950 bg-slate-100 align-middle checked:bg-green-500 checked:border checked:border-gray-500"
                                onChange={setFormData}
                            />
                            <label htmlFor="inactive" className="align-baseline">Inactive</label>
                        </div>
                    </div>
                </div>
                {notify && <div className="text-red-500">Please fill in all fields</div>}
            </form>
        </div>
    );
}



// import React, { useState } from 'react'
// import { useReducer } from 'react'
// import UserButton from './UserButton'
// import { useMutation, useQueryClient } from 'react-query'
// import { getUsers, postUser } from '../../lib/helper'

// export default function UserForm() {
    

//     const formReducer = (state, event) => {
//         return {
//             ...state,
//             [event.target.name]: event.target.value
//         }
//     }
//     const [formData, setFormData] = useReducer(formReducer, {})
//     const queryClient = useQueryClient()
//     const addMutation = useMutation(postUser,{
//       onSuccess: queryClient.prefetchQuery('users', getUsers)
//     })

    
//     const [notify, setNotify] =  useState(false)
//     // const mutation = useMutation(postUser, {
//     //   onSuccess: () => {
//     //     console.log('Data succesful')
//     //   }
//     // })

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if(Object.keys(formData).length === 0 && notify) {
//             console.log('Empty file')
//         }
//        // console.log(formData)
//         // inputData.push(formData);
//         // console.log(inputData)
//         // console.log(formData)

//         let {firstName, lastName, email, salary, date, status} = formData
//         const model = {
//           name: `${firstName} ${lastName}`,
//           avatar: `https://randomuser.me/api/portraits/lady/${Math.floor(Math.random() * 100)}.jpg`,
//           email: `${email}`,
//           salary,
//           date: `${date}`,
//           status: status ?? `Active`
//         }

//         addMutation.mutate(model)

//     }

//     const inputData = []

//     if (addMutation.isError) return <div>Error Adding User</div>
//     if (addMutation.isLoading) return <div>Adding the User</div>
//     if (addMutation.isSuccess) return <div>Added Succesful</div>

//   return (
//     <div className='mb-10'>
//       <form className='grid grid-cols-1 lg:grid-cols-3' onSubmit={handleFormSubmit}>
//         <div>
//         <input autoComplete='true' type='text' name='firstName' className='px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1' placeholder='First Name' onChange={setFormData}/>
//         <input autoComplete='true' type='text' name='lastName' className='px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1' placeholder='Last Name' onChange={setFormData}/>
//         <input autoComplete='true' type='text' name='email' className='px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1' placeholder='Email' onChange={setFormData}/>
//         <input type='submit' value='Submit' className='bg-indigo-700 mb-3 px-3 py-2 text-slate-100 rounded-md border border-white font-medium cursor-pointer hover:bg-slate-100 outline hover:outline-yellow-300 hover:text-zinc-700 hover:outline-1'/>
//         </div>
//         <div>
//         <input type='text' name='salary' className='px-1 mb-3 border border-slate-200 block rounded-md w-5/6 py-1' placeholder='Salary' onChange={setFormData}/>
//         <input type='date' name='birthday' className='px-1 mb-3 py-2 text-sm border border-slate-200 block rounded-md w-5/6' placeholder='Date of Birth' onChange={setFormData}/>
//         <div className='space-x-5'>
//         <div className='inline-block space-x-1 align-text-bottom'>
//             <input type='radio' id='active' value='active' className='form-check-input appearance-none rounded-full w-4 h-4 border border-gray-950 bg-slate-100 align-middle checked:bg-green-500 checked:border checked:border-gray-900' onChange={setFormData}/>
//             <label htmlFor='active' className='align-baseline'>Active</label>
//         </div>
//         <div className='inline-block space-x-1 align-text-bottom'>
//             <input type='radio' id='inactive' value='inactive' className='form-check-input appearance-none rounded-full w-4 h-4 border border-gray-950 bg-slate-100 align-middle checked:bg-green-500 checked:border checked:border-gray-500' onChange={setFormData}/>
//             <label htmlFor='inactive' className='align-baseline'>Inactive</label>
            
//         </div>
//         </div>
//         </div>
//         {/* {(Object.keys(formData).length === 0 && setNotify) && <div>Please input form fields</div>} */}
        
//       </form>
//     </div>
//   )
// }