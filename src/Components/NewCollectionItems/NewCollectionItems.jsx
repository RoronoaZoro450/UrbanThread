import React from 'react'
import new_collections from '../../Assets/Frontend_Assets/new_collections'
import Items from '../Items/Items'
import './NewCollectionItems.css'
const NewCollectionItems = () => {
  return (
    <div className='Newcollection'>
      <h2>New Collections</h2>
      <hr />
      <div className="newCollectionList">
        {new_collections.map((item,i)=>{
            return(
                <Items 
                key={i}
                id={item.id} 
                name={item.name} 
                image={item.image}  
                new_price={item.new_price} 
                old_price={item.old_price} 
                  />
            )
        })}
      </div>
      </div>
  )
}

export default NewCollectionItems