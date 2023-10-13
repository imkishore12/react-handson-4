import { useNavigate, useParams } from 'react-router-dom'
import { StoreContexts } from './StoreCompo';
import { useContext, useState } from 'react';

function EditCompo() {

 const  contextData = useContext(StoreContexts);


  let NavigateToStudent = useNavigate();
  let param = useParams();

  let filterData = (data)=>{
    if (Number(data.stuID) === Number(param.ID)) {
      return data;

    }
  }
var currentData = contextData.stuDetails.filter(filterData)
const [name,setName]=useState(currentData[0].stuName)
const [age,setAge]=useState(currentData[0].stuAge)
const [course,setCourse]=useState(currentData[0].stuCourse)
const [batch,setBatch]=useState(currentData[0].stuBatch)
let changeHandler = (e)=>{
    contextData.stuDetails.stuName=this.name;
    contextData.stuDetails.stuAge=this.Age;
    contextData.stuDetails.stuCourse=this.course;
    contextData.stuDetails.stuBatch=this.batch;



    
    
    
  
}
  let updateHandler = (e) => {
    // changeHandler();
    // NavigateToStudent('/student')
    // console.log(contextData.stuDetails.stuName)

    e.preventDefault()
  }
  return (
    <section>
      <form className='flex'>

        <div className="feilds">
        <label>Name:</label>
          <input type="text" name='stuName' placeholder='Enter Student Name' onChange={(e)=>{setName(e.target.value)}} value={name} className='stuDescInput' />
        </div>

        <div className="feilds">
        <label>Age:</label>
          <input type="number" name='stuAge' placeholder='Enter Student Age' onChange={(e)=>{setAge(e.target.value)}} value={age} className='stuDescInput' />
        </div>

        <div className="feilds">
        <label>Course:</label>
          <input type="text" name='stuCourse' placeholder="Enter Student's Course" onChange={(e)=>{setCourse(e.target.value)}} value={course} className='stuDescInput' />
        </div>

        <div className="feilds">
            <label>Batch:</label>
          <input type="text" name='stuBatch' placeholder="Enter Student's Batch" onChange={(e)=>{setBatch(e.target.value)}} value={batch} className='stuDescInput' />
        </div>

        <div className="feilds">
          <button type="button" onClick={(e) => NavigateToStudent('/student')} className='cancleButton commonButton'>Cancel</button>
          <button className='updateButton commonButton' onClick={changeHandler}>Update</button>
        </div>

      </form>
    </section>
  )
}

export default EditCompo