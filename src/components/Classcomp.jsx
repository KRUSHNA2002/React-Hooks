// import React , {useState} from 'react';

// const Classcomp = (props) =>{

//     const [count , setcount]=useState(0);
//     return(

//         <>

//            <div className="container">
//             <div className="com-md-12 col-12">
//                 <h1>Hello function base component</h1>

//                 <h1>Name : {props.name}</h1>
//                 <h1>Name : {props.lastname}</h1>

//                 <h1>count : {count}</h1>
//                 <button className='btn btn-primary' onClick={()=>setcount(count+1)}>Click me increment</button>
//                 <button className='btn btn-primary mx-2' onClick={()=>setcount(count-1)}>Click me decrement</button>
//             </div>
//            </div>

//         </>
//     );
// }

// export default Classcomp;

// ******************************************************* Using Classbase Component ***********************************************************

// import React from "react";

// class Classcomp extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   count: 0,
//     // };
//   }
    
// }

//   render() {
//     // const increment = () => {
//     //   this.setState({
//     //     count: this.state.count + 1,
//     //   });
//     // };

//     return (
//       <>
//         {/* <div className="container text-center">
//           <div>
//             <h1>Hello Class base component</h1>
//             <h1>{this.props.name}</h1>
//             <h1>{this.props.lastname}</h1>

//             <h1>count :{this.state.count}</h1>

//             <button className="btn btn-primary" onClick={increment}>
//               Click me
//             </button>
//           </div>
//         </div> */}


// ******************************************* Api Fetching using react classbase component **********************************************

import React from 'react';

class Classcomp extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [], 
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => {
        this.setState({ user });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    // const { user } = this.state;

    return (
      <div className='container'>
        <h2 className='text-center text-primary my-5'>Data Fetch Using class component Table</h2>
        <table className='table border border-dark table-striped table-hover'>
          <thead>
            <tr className='text-center text-muted '>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((val , i)=>
                <tr key={i} className='text-center'>
                <td>{i+1}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.address.street}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Classcomp;

