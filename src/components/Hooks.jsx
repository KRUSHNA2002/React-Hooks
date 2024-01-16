// import React from 'react';
// import {useState} from 'react';

// *********************************************************** Hello useState Number Hook ****************************************************

// const Hooks = () =>{

//     const [count,setCount]=useState(0);

//     const incCount=()=>{
//              setCount(count+1);
//     }

//     const decCount=()=>{
//         if(count>0)
//         {
//           setCount(count-1);
//         }
//     }

//     return(        
//         <>
        
//            <div className="container text-center my-4 ">
//                <h1 className='text-primary'>Hello useState Number Hook </h1>

//                <div>
//                 <button className='btn btn-success mb-3 my-3' onClick={incCount}>Increment</button>
                
//                 <h5>{count}</h5>

//                 <button className='btn btn-danger  mb-3 my-3' onClick={decCount}>Decrement</button>

//                </div>

//            </div>
        
           
       
//         </>
//     );
// }
// export default Hooks;

// *********************************************************** Hello useState String Hook ****************************************************


// import React from 'react';
// import {useState} from 'react';

// const Hooks =()=>{

// const [name,setName]=useState("Krushna");

//   const changeName=()=>{

//     var newName=window.prompt("Enter your Name");
//     setName(newName);
//   }

//     return(
//         <>
//           <div className="container text-center my-5">
//               <h1 className='text-primary'>Hello useState String Hook</h1>

//              <h1 className='my-5'>{name}</h1>
//               <button onClick={changeName} className='btn btn-dark'>Click me</button>
//           </div>
//         </>
//     );
// }
// export default Hooks;

// *********************************************************** Hello useState Array Hook ****************************************************

// import React from 'react';
// import { useState } from 'react';

// const Hooks =()=>{

//     const [lang,setLang]=useState(["HTML","CSS","JS"]);
    

//     const addlang=()=>{
//         let newlang=window.prompt("Add Your Lang");
//         setLang([...lang,newlang])
//     }

//     return(
//         <>
//                 <div className="container text-center my-5">
//                 <h1 className='text-primary'>Hello useState Array Hook</h1>
//                 {
//                     lang.map((val)=>{
//                     return(
//                         <div className="container text-start my-3">
//                             <li className='mr-0'>{val}</li>
//                         </div>
                        
//                     )
//                     })
//                 }
//                 <button onClick={addlang} className='btn btn-dark'>Add Lang</button>
//                 </div>

                

//         </>
//     );
// }
// export default Hooks;


// *********************************************************** Hello useState Array of object Hook ****************************************************


// import React , {useState} from 'react';

// const Hooks=()=>{

//     const[student , setStudent]=useState([]);

//    const addStudent=()=>{

//     const id=window.prompt("Enter the student id :")
//     const name=window.prompt("Enter the student name :")
//     const course=window.prompt("Enter the student course :")
//     const age=window.prompt("Enter the student age :")

//     if(id !=="")
//     {
//         setStudent([...student,{id,name,course,age}]);
//     }
//     else if(id === "")
//     {
//       alert("Please enter the id")
//     }
//    }

//    const removestudent=()=>{
//     const id=window.prompt("Enter the remove student id :")

//    const updateStudent=student.filter((std)=>{

//       return std.id !==id;
//    })

//    setStudent(updateStudent);

//    }
//     return(

//         <>
//           <div className="container  text-center my-4">
//              <h1>Hello useState Array of object Hook</h1>
//              <button className='btn btn-primary my-3 mx-2' onClick={addStudent}>Add student</button>
//              <button className='btn btn-danger my-3' onClick={removestudent}>Delete student</button>


//                                   <table className='table table-bordered my-3'>
//                                      <tr>
//                                         <th>sr</th>
//                                         <th>Name</th>
//                                         <th>course</th>
//                                         <th>Age</th>
//                                     </tr>
//                                     {
//                              student.map((val,i) => {
//                                 return(
//                                     <tr>
//                                         <td>{i+1}</td>
//                                         <td>{val.name}</td>
//                                         <td>{val.course}</td>
//                                         <td>{val.age}</td>
//                                     </tr>
//                                 );
                                
//                                })
//                             }
//                              </table>

            
//           </div>
          
//         </>
//     );
// }

// export default Hooks;


// *********************************************************** UseEffect Hook ******************************************8

// import React from 'react';
// import {useEffect , useState} from 'react';



// const Hooks=()=>{

//     const [count1 , setCount1]=useState(0);
//     const [count2 , setCount2]=useState(0);

// useEffect(()=>{
//     console.log('API call');
// },[count2])

//     return(
// <>
//      <div className="container text-center my-2">

//         <h1>Hello from UseEffect Hooks</h1>
//         <br></br>
//         <h1>Count1 :{count1}</h1>
//         <h1>Count2 : {count2}</h1>

//         <button className='btn btn-primary mx-2 my-4' onClick={()=>setCount1(count1+1)}>Increment1</button>
//         <button className='btn btn-primary mx-2 my-4' onClick={()=>setCount2(count2+1)}>Increment2</button>
//      </div>
// </>
//     );
// }
// export default Hooks;


// ****************************************************   Form Handling ************************************************************
import React, { useState } from 'react';

const Hooks =()=>{

    const [input , setInput]=useState({

        userName:'',
        passWord:''

    });

    const handleChange=(e)=>{

        setInput({
            ...input,
            [e.target.name]:e.target.value
        })


    }
    return(
        <>
        
     <div className="container text-center">
                    <h1 className='my-4'>Form Handling</h1>

                <input type="text" className='mx-2'
                placeholder='Enter your Name'
                onChange={handleChange}
                name='userName'
                value={input.userName}


                />

                <input type="text"
                placeholder='Enter your password'
                onChange={handleChange}
                name='passWord'
                value={input.passWord}


                />

                <h1 className='my-4'>UserName : {input.userName}</h1>
                <h1 className='my-4'>PassWord :{input.passWord}</h1>
     </div>
        
        </>
    );
    }

    export default Hooks;