import React , {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Api = ()=>{

    
  const [maindata , setMaindata]=useState();

  const getData= async()=>{

      const res=await fetch('https://jsonplaceholder.typicode.com/users');
      const data=await res.json();

   setMaindata(data);
   console.log(data)
      
  }

  useEffect(() => {
	getData();
}, []);


const [Loader,setLoader]=useState(false);

const downloadPDF=()=>{

    const capture=document.querySelector('.pdf');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
        const imgData=canvas.toDataURL('img/png');
        const doc=new jsPDF('p','mm' ,'a4');
        const aspectRatio = canvas.width / canvas.height;

        // Set the PDF page height based on the aspect ratio and width
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = componentWidth / aspectRatio;
        doc.internal.pageSize.setHeight(componentHeight);
        doc.addImage(imgData,'png',0,0,componentWidth,componentHeight);
        setLoader(false);
        doc.save('receipt.pdf');
    })
}

    return !maindata ? (

          <div className="container  swimmer">
            
          </div>
    ) : (


        <>
        {/* <button onClick={getData}>click</button> */}
        
        <div className="container pdf">
        <h1 className='text-center text-primary my-3'>Fetching Api Using Hooks</h1>

        <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                    <th>Sr</th>
                    <th>Name</th>
                    <th>userName</th>
                    <th>Email</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
 
               {
                                   maindata.map((val , i) => {
                                    return(
            
                                    <tr className='text-center'>
                                       <td>{i+1}</td>
                                       <td>{val.name}</td>
                                       <td>{val.username}</td>
                                       <td>{val.email}</td>
                                       <td>{val.address.city}</td>
                                    </tr>
            
                                    );
                                })
               }
                    
                </tbody>
              </Table>
        </div>
        <div className="container text-center">
            <button className='btn btn-dark btn' onClick={downloadPDF} disabled={Loader}> Download Pdf</button>
        </div>
        </>
    );
}

export default Api;