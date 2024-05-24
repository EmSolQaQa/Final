import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { WishContext } from '../Context/WishlistProvider';
import "./home.scss"
function Home() {
  const {addWish,Wish,isExist} = useContext(WishContext)
  const [Data, setData] = useState([]);
  async function getAll() {
    const res = await fetch("http://localhost:3000/")
    const data = await res.json()
    setData(data)
  }
  function asc(value) {
    Data.toSorted((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0))

  }
  function desc(value) {
    Data.toSorted((a,b) => (a[value] < b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0))

  }


  useEffect(() => {
    getAll()
  }, []);



  return (
    <>
     <div className='firstsec'>
      <div className="container">
      <div className='content'>
        <div className="inner">
        <p>Fresh Flower& Gift Shop</p>
        <h2>Making beautiful Flower <br /> a part of your life</h2>
        <button className='btn'> shop now</button>
        </div>
      </div>
      </div>
    </div>
    <div className='secondsec'>
      
          <div className='cards'>
            <div className='card'>
              <div className='photosec'>
                <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png.webp" alt="" />
              </div>
              <div className='contentsec'>
              <h3>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
            </div>

            <div className='card'>
              <div className='photosec'>
                <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png.webp" alt="" />
              </div>
              <div className='contentsec'>
              <h3>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
            </div>

            <div className='card'>
              <div className='photosec'>
                <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png.webp" alt="" />
              </div>
              <div className='contentsec'>
              <h3>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
            </div>

            <div className='card'>
              <div className='photosec'>
                <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png.webp" alt="" />
              </div>
              <div className='contentsec'>
              <h3>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
            </div>
            
          </div>
    </div>
    <div className="thirdsec">
      <div className="posts">
        <div className="post">
          <div className="imageflow">
          <img src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_640.jpg" alt="" />
          </div>
          <div className="content">
            <div className='flowname'>Rose</div>
          </div>
        </div>

        <div className="post">
          <div className="imageflow">
          <img src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_640.jpg" alt="" />
          </div>
          <div className="content">
            <div className='flowname'>Rose</div>
          </div>
        </div>

        <div className="post">
          <div className="imageflow">
          <img src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_640.jpg" alt="" />
          </div>
          <div className="content">
            <div className='flowname'>Rose</div>
          </div>
        </div>

        <div className="post">
          <div className="imageflow">
          <img src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_640.jpg" alt="" />
          </div>
          <div className="content">
            <div className='flowname'>Rose</div>
          </div>
        </div>
        
      </div>
      
    </div>
    <div className="prodcontent">
    <h3>Our Flower</h3>
      <h1>New Arrivals</h1>
    </div>
    <button onClick={()=>asc("title")}>Asc</button>
    <button onClick={()=>desc("title")}>Desc</button>
    <div className='products col-6'>
      
      
      
      {Data.map((x)=>(
      <div className='product'>
        <div > {isExist ? <i onClick={()=>addWish(x)} class="fa-regular fa-heart"></i> : <i onClick={()=>addWish(x)} class="fa-solid fa-heart"></i>} </div>
        <div className="img">
          <img src={x.img} alt="" />
        </div>
        <div className="title">
          {x.title}
        </div>
        <div className="price">
          {x.price}
        </div>
        <button><Link to={`/detail/${x._id}`}>Go Detail</Link></button>
        </div>
    ))}
      
    </div>
    </>
    
  )
}

export default Home
