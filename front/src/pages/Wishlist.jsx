import React, { useContext } from 'react'
import { WishContext } from '../Context/WishlistProvider'
function Wishlist() {
  const {addWish,Wish,isExist} = useContext(WishContext)
  return (
    <div>
      
    </div>
  )
}

export default Wishlist
