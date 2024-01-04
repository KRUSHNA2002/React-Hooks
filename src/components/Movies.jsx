import React from 'react';

import MovieData from '../data';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Movies = ()=>{
    return(
        <>
        
           <div className="container">
               <h1 className='text-center my-5 text-secondary'>Top 6 Movies</h1>
               <div className="row">
                       {
                         
                        MovieData.map((val,i) => {
                          return(
                            <div className="col-md-4 my-3">
                            
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" height={300} src={val.cover} />
                                <Card.Body>
                                    <Card.Title>{val.name}</Card.Title>
                                    <Card.Text ><input type="range" className='w-100' id='range' step={1} min={0} max={5} value={val.ranking} /><h5 className='text-danger font-weight-bold'> Rating : {val.ranking} </h5></Card.Text>
                                    <a className='btn btn-primary' href={val.link}>Wacth More</a>
                                </Card.Body>
                            </Card>
                            </div>
                          )
                        })
                       }
                 
               </div>
           </div>
        </>
    )
}

export default Movies;