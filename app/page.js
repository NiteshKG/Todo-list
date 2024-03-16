"use client"
import React, {useState} from "react"

const page = () =>{
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  
  const submitHandler=(e)=>{
    e.preventDefault();
    setmaintask([...maintask, {title,desc, status:""}]);
    settitle("")
    setdesc("")
  
    
    console.log(maintask)
  }
  const deleteHandler=(i)=>{
  let copytask = [...maintask]
  copytask.splice(i,1);
  setmaintask(copytask)
  }
  const statusHandler=(i)=>{
    
    const copystatus = [...maintask]
    copystatus[i].status = "Completed";
    setmaintask(copystatus);
  }
  let renderTask = <h2>No task available</h2>
   if(maintask.length>0){
    renderTask = maintask.map((t,i)=>{
      return <li key={i} className="flex items-center justify-between mb-5">
      <div className="flex justify-between mb-5 w-2/3">
        <h5 className="text-2xl font-semibold">{t.title}</h5>
        <h6 className="text-xl font-semibold">{t.desc}</h6>
        <h4 className="text-sm text-green-600 font-semibold">{t.status}</h4>
      </div>
      <button onClick={()=>{
        statusHandler(i) 
      }}

       className="bg-green-600 rounded-full text-white font-semibold px-6 py-3">Complete</button>

      <button onClick={()=>{
        deleteHandler(i)
      }}

       className="bg-red-600 rounded-full text-white font-semibold px-6 py-3">Delete</button>
      </li>
  })
   }
 
  return(
    <>
<h1 className="bg-zinc-700 text-white text-5xl font-bold text-center">Nitesh's Todo list</h1>
<form onSubmit={submitHandler} className="zinc-500"> 
    <input type="text" 
     className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
    placeholder="Enter Title here" 
    value={title} 
    onChange={(e)=>{
        settitle(e.target.value) 
    }} 
   />

    <input type="text" 
    className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
    placeholder="Enter description here" 
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value) 
  }}
    />
    <button className="bg-blue-600 text-white rounded-full m-5 px-4 py-2 ">Add Task</button>
</form>
<hr />
<div className="p-8 bg-slate-200">
  <ul className="">
    {renderTask}
  </ul>
</div>

   </>
  )
}
export default page