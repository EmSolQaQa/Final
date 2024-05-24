import React, { useEffect, useState } from 'react'


import { useParams } from 'react-router';
function Detail() {
  let {id} = useParams()
  const [Data, setData] = useState([]);
  async function getDetail() {
    const res = await fetch("http://localhost:3000/"+id)
    const data = await res.json()
    setData(data)
    
  }

console.log(Data);
  useEffect(() => {
   getDetail()
  }, []);
  return (
    <>
    <div>
      {Data.title}
    </div>
    <div>
      <img src={Data.img} alt="" /> 
    </div>
    </>
  )
}

export default Detail
