import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import { useNavigate } from 'react-router';
function Add() {
  const [Data, setData] = useState([]);
  async function getAll() {
    const res = await fetch("http://localhost:3000/")
    const data = await res.json()
    setData(data)
  }
  async function handleDelete(id) {
    const res = await fetch("http://localhost:3000/"+id,{
      method:"DELETE"
    })
    const data = await res.json()
    getAll()
  }



  useEffect(() => {
    getAll()
  }, []);
  
  return (
    <>
    <div>
      <Formik
       initialValues={{ img: '', title: '', price: '' }}
       validationSchema={Yup.object({
        img: Yup.string()
           .required('Required'),
           title: Yup.string()
           .required('Required'),
           price: Yup.string().required('Required'),
       })}
       onSubmit={(values,) => {
        fetch('http://localhost:3000/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then(res => res.json())
          
       }}
     >
       <Form>
         <label htmlFor="img">Image</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />
 
         <label htmlFor="title">Title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
    <div>
    {Data.map((x)=>(
      <div className=''>
        
        <div>
          <img src={x.img} alt="" />
        </div>
        <div >
          {x.title}
        </div>
        <div >
          {x.price}
        </div>
        <button onClick={()=>handleDelete(x._id)}>Delete Product</button>
        </div>
    ))}
    </div>
    </>
  )
}

export default Add

