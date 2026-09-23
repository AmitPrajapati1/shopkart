import React, { useState } from 'react'

export default function State() {
    const [name, setName] = useState("");
    const [subjects, setSubject] = useState(["HTML", "CSS", "Javascipt"]);
    const [user, setUser] = useState({name: "Amit", id:101})

    // const update = () => {
    //     setName("Anisha");
    // }
  return (
    <div>
        <div>{name}</div>
        <hr />
        {/* <button onClick={update}>Click</button> */}
        {name && <h1>Student name is {name}</h1>}
        <hr />
        <h1>{name || "Name is not provided"}</h1>
        <hr />
        {name ? <p>Welcome {name} </p> : <p>Name is not provided</p> }
        <button onClick={()=>{setName("Anisha")}}>Change Name</button>
        <hr />
        {
            subjects.map((s,i)=><p key={i}>{s}{i}</p>)
        }
        <hr />
        <button onClick={() => setSubject([...subjects, "Java"]) }>Add Java</button>
        <hr />
        <h1>{user.id} {user.name} {user.age}</h1>
        <button onClick={()=> setUser({...user, age:19})}>Add Age property</button>
    </div>
  )
}
