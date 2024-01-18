import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaCheckCircle } from 'react-icons/fa';
import { MdPending } from 'react-icons/md';


interface UserData {
    id: string;
    taskName: string,
    taskStatus: string,
    category: string,

}

const Task: React.FC = () => {
  const [tasks, setTasks] = useState<Array<UserData>>([]); // State to manage the array of tasks
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [category, setCategory] = useState('');
  const [toggleValue, setToggleValue] = useState<UserData>()
  const [show, setShow] = useState<Boolean>(false)
  const [editName, setEditName] = useState<string>("")
  const [editCategory, setEditCategory] = useState<string>("")
  const [editStatus, setEditStatus] = useState<string>("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create a new task object
    const newTask = {
        id: `${Math.random() * 40000}`,
        taskName,
        taskStatus,
        category,
      };

    // Update the tasks array with the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Reset the form fields
    setTaskName('');
    setTaskStatus('');
    setCategory('');
  };
  const removeTask = (id: string)=>{
    const filtered = tasks.filter((e)=>e.id !== id);
    setTasks(filtered)
  }

  const editTask = ()=>{
    const updatedTasks = tasks.map((task)=>{
        if(task.id === toggleValue?.id){
            const updatedTask ={
                id: toggleValue.id,
                taskName: editName !=="" ? editName : task.taskName,
                taskStatus: editStatus !== "" ? editStatus : task.taskStatus,
                category: editCategory !== "" ? editCategory : task.category
            }
            return updatedTask
        }
        
        console.log(toggleValue?.id)
        return task
        
    })
    console.log(updatedTasks)
    setTasks(updatedTasks)
    setShow(false)
  }
  const toggle = (props: UserData)=>{
    setShow(!show)
    setToggleValue(props)
  }

  return (
    <div className='bg-white relative h-[100dvh] justify-center flex-col flex items-center '>
      <h1 className='text-3xl font-bold text-center'>Task Tracker APP</h1>

      <form
        className='bg-slate-100 shadow-md rounded space-y-3 p-8 my-4'
        onSubmit={handleSubmit}>
        <div className='flex flex-col gap-y-1'>
                 <label >Task Name: </label>
                 <input value={taskName}onChange={(e) => setTaskName(e.target.value)}  className='h-[40px] px-3 w-[300px] rounded-1g'required placeholder='Enter task name'/>
             </div>

                 <div className='flex flex-col'>
                    <label>Task Status:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option> choose status </option>
                         <option>Yet To Commence</option>
                         <option>Ongoing</option>
                         <option>Pending</option>
                         <option>Completed</option>
                     </select>
                 </div>

             <div>
                 <span>Category: </span>
                 <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option  >select category</option>
                          <option >Personal</option>
                          <option >Work </option>
                 </select>
             </div>

        <button type='submit'className='bg-blue-700 hover:bg-blue-400 transition-all text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline' > Create Task </button>
      </form>

      <div className='overflow-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-white uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400'>
                 <tr>
                     
                     <th scope='col' className=' px-6 py-3' >TASK NAME</th>
                     <th scope='col' className=' px-6 py-3' >TASK STATUS</th>
                     <th scope='col' className=' px-6 py-3' >CATEGORY</th>
                     <th scope='col' className=' px-6 py-3' >COMPLETED</th>
                     <th scope='col' className=' px-6 py-3' >EDIT</th>
                     <th scope='col' className=' px-6 py-3' >DELETE</th>
                   
                 </tr>
             </thead>
          <tbody>
            {tasks?.map((task, index ) => (
              <tr key={index} className='bg-white border-b   dark:bg-gray-800 dark:border-gray-700'
              >
                {/* Render task details in each column */}
                <td className='px-6 py-4 truncate'>{task.taskName}</td>
                <td className='px-6 py-4 truncate'>{task.taskStatus}</td>
                <td className='px-6 py-4'>{task.category}</td>
                <td className='px-6 py-4 pl-12 text-[20px]'>{task.taskStatus === "Completed" ? <FaCheckCircle className='text-green-600'/> : <MdPending className='text-yellow-600'/>}</td>
                <td className='px-6 py-4'> <div className="bg-blue-700 py-1 cursor-pointer px-3 rounded-lg text-white" onClick={()=>toggle(task)}>Edit</div>
                <div className="">{show && toggleValue?.id === task.id ? ( <span className="">
                    <div className="absolute w-full h-full top-0 left-0  bg-black opacity-50 text-black"></div>
                    <div className="absolute w-[500px] mx-auto h-[400px] my-auto flex flex-col items-center justify-center inset-0 text-black font-medium bg-gray-400">
                        <div className="flex flex-col">
                        <label >Task Name</label>
                    <input type="text" placeholder='Edit task name' className='h-[40px] px-3 w-[350px] rounded-md mb-3 placeholder:text-gray-400 ' defaultValue={toggleValue?.taskName} onChange={(e)=>setEditName(e.target.value)} /> </div>
                    <div className='flex flex-col'>
                       <label>Task Status:</label>
                     <select  defaultValue={toggleValue?.taskStatus} onChange={(e) => setEditStatus(e.target.value)} className=' appearance-none w-[350px] bg-white text-gray-700 border-gray-200 mb-3  rounded h-[40px] px-3 focus:border-gray-500 'id='grid-state' >
                         <option>edit status </option>
                         <option>Yet to commence</option>
                         <option>Ongoing </option>
                         <option>Pending </option>
                         <option>Completed </option>
                       </select>
                    </div>

             <div className='flex flex-col'>
                 <span>Category: </span>
                 <select defaultValue={toggleValue?.category} onChange={(e) => setEditCategory(e.target.value)} className=' appearance-none w-[350px] bg-white-200 text-gray-700 mb-4 border-gray rounded px-3 h-[40px] leading-tight focus:outline-none focus:border-gray-500'id='grid-state' >
                          <option  >--edit category--</option>
                          <option >Personal</option>
                          <option >Work </option>
                 </select>
             </div>
                   
                    <button onClick={editTask} className='bg-blue-700 py-2 px-10 rounded-lg text-white'>Save</button>
             </div>
                </span> ) : null}
                </div>
                </td>
                
                <td className='px-6 py-4 pl-10 text-[18px] text-red-700'><div className="" onClick={()=>{removeTask(task.id)}}>
                <AiFillDelete/></div></td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
    </div>
  );
};

export default Task;