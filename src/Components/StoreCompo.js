import React, { createContext, useState } from 'react'
import Student from './Student';

export var StoreContexts = createContext();

function StoreCompo(props) {
    let count= 0
    const [stuDetails, setStuDetails] = useState([{
        stuID: count++,
        stuName: "sai",
        stuAge: 23,
        stuCourse: 'Full Stack',
        stuBatch: "May",
    },
    {
        stuID: count++,
        stuName: "kishore",
        stuAge: 23,
        stuCourse: 'Python',
        stuBatch: "August",
    },
    {
        stuID: count++,
        stuName: "manasa",
        stuAge: 22,
        stuCourse: 'MERN',
        stuBatch: "June",
    },
    {
        stuID: count++,
        stuName: "prasad",
        stuAge: 22,
        stuCourse: 'MERN',
        stuBatch: "June",
    },
    {
        stuID: count++,
        stuName: "preethu",
        stuAge: 22,
        stuCourse: 'MERN',
        stuBatch: "June",
    },
    {
        stuID: count++,
        stuName: "koti",
        stuAge: 22,
        stuCourse: 'MARN',
        stuBatch: "June",
    },
    ]);
    return (
        <>
        <StoreContexts.Provider value={{stuDetails,setStuDetails}}>
        {props.children}
        </StoreContexts.Provider>
        </>

    )
}

export default StoreCompo;




