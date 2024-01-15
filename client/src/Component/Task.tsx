import React from 'react'

const Task:React.FC = () => {
  return (
    <div className='bg-white justify-center align-middle flex items-center '>
        <h1 className='text-3x1 font-bold text-center'>Task Tracker APP</h1>

        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='flex flex-col'>
                <span >Task Name: </span>
                <input className='h-[40px] p-6 w-[300px]' placeholder='Enter task name'/>
            </div>

                <div className='flex flex-col'>
                <span>Task Status:  </span>
                    <select className='block appearance-none w-full bg-white text-gray-700 border-gray rounded py-3 leading-tight focus:outline-none focus:border-gray-500'id='grid-state' >
                        <option> choose status: </option>
                        <option>Yet to commence</option>
                        <option>Ongoing </option>
                        <option>Pending </option>
                        <option>Completed </option>
                    </select>
                </div>

            <div>
                <span>Category: </span>

                <select className='block appearance-none w-full bg-white-200 text-gray-700 border-gray rounded py-3 leading-tight focus:outline-none focus:border-gray-500'id='grid-state' >
                         <option>selelct category</option>
                         <option>Personal</option>
                         <option>Work </option>
                    </select>

            </div>

            <button className='bg-blue-700 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>Create Task</button>


        </form>


        <br /><br /><br /><br /><br /><br /><br />


       <div className='relative overflow-auto'>
       <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope='col' className=' px-6 py-3' >S/N</th>
                    <th scope='col' className=' px-6 py-3' >TASK NAME</th>
                    <th scope='col' className=' px-6 py-3' >TASK STATUS</th>
                    <th scope='col' className=' px-6 py-3' >CATEGORY</th>
                    <th scope='col' className=' px-6 py-3' >COMPLETED</th>
                    <th scope='col' className=' px-6 py-3' >EDITH</th>
                    <th scope='col' className=' px-6 py-3' >DELETE</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                 <th scope='col' className=' px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white' >1</th>
                <td className='px-6 py-4' >To do list</td>
                <td className='px-6 py-4' >penidng</td>
                <td  className='px-6 py-4' >personal</td>
                <td className='px-6 py-4' >icon</td>
                <td className='px-6 py-4' >icon</td>
                <td className='px-6 py-4' >icon</td>
               
                </tr>
            </tbody>
        </table>
       </div>



    </div>
  )
}

export default Task