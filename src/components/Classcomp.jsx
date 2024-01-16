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

import React from "react";

class Classcomp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render(count) {
    const increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    return (
      <>
        <div className="container text-center">
          <div>
            <h1>Hello Class base component</h1>
            <h1>{this.props.name}</h1>
            <h1>{this.props.lastname}</h1>

            <h1>count :{this.state.count}</h1>

            <button className="btn btn-primary" onClick={increment}>
              Click me
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Classcomp;
