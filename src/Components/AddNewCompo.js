import React from 'react';


import { useNavigate } from 'react-router-dom'

function AddNewCompo() {

    let NavigateToStudent = useNavigate();


   
    return (
        <section className='CommonSection addNewStudentSection'>
            <form className='flex'>

                <div className="feilds">
                    <label>Name:</label>
                    <input type="text" name='stuName'  placeholder='Enter Name' className='stuDescInput' />
                    <label>Age:</label>
                    <input type="number" name='stuAge' placeholder='Enter Age' className='stuDescInput' />
                </div>

                
                <div className="feilds">
                    <label>Course:</label>
                    <input type="text" name='stuCourse'  placeholder="Enter Course" className='stuDescInput' />
                    <label>Batch:</label>
                    <input type="text" name='stuBatch'  placeholder="Enter Batch" className='stuDescInput' />
                </div>

                

                <div className="feilds">
                    <button onClick={() => NavigateToStudent('/student')} className='cancleButton commonButton' type='button'>Cancel</button>
                    <button className='submitButton commonButton' >Submit</button>
                </div>

            </form>

        </section>
    )
}

export default AddNewCompo