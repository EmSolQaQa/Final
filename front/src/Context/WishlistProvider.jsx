import React, { createContext, useContext, useState } from 'react'
export const WishContext = createContext()
function WishlistProvider({children}) {
    const [Wish, setWish] = useState([]);
    function addWish(item) {
        console.log(Wish);
        const index = Wish.findIndex((x)=>x._id===item._id) 
        if (index !== -1) {
            Wish.filter(x=>x._id!== item._id)
            setWish([...Wish])
        }
        else{
            setWish([...Wish,item])
        }
        
    }
    function isExist(item) {
        return Wish.findIndex((x)=>x._id===item._id) !== -1
    }
  return (
    <WishContext.Provider value={{addWish,Wish,isExist}}>
        {children}
    </WishContext.Provider>
  )
}

export default WishlistProvider
