import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContexts } from './StoreCompo';
function Student(props) {
  const contextData = useContext(StoreContexts);
  return (
       <>
       <div className="flex">
        <h1>Student Details</h1>
        <Link to="/student-desc" className='addNew'>Add New Student</Link>
      </div>
      <hr></hr>
      <table id="customers">
        <thead>
            
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
            
          </tr>
          
          
          
        </thead>
        
        <tbody>
          {
              contextData.stuDetails.map((details) => {
                return <>
                <tr key={details.stuID} >
                  <td>{details.stuName}</td>
                  <td>{details.stuAge}</td>
                  <td>{details.stuCourse}</td>
                  <td>{details.stuBatch}</td>
                  <td><Link to={`/student-desc/${details.stuID}`}  className='editDetailsBtn'>Edit</Link></td>
                  
                </tr>
                
                </>
                
              })
            }
        </tbody>
      </table>
      </>
    // <>
    // <table>
    //     <thead>
    //         <tr>
    //         <th>Name</th>
    //         <th>Age</th>
    //         <th>Course</th>
    //         <th>Batch</th>
    //         <th>Change</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {
    //           contextData.stuDetails.map((details) => {
    //             return (
                    
    //                 <>
    //                 <tr>
    //                 <td>{details.stuID}</td>
    //                 <td>{details.stuName}</td>
    //                 <td>{details.stuID}</td>
    //                 <td>{details.stuID}</td>
    //                 </tr>
    //                 </>
    //           )
    //         }
    //           )}
        
                
    //     </tbody>
    // </table>
    // </>
   
  )
}



export default Student;