import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import CollectionPoster from '../Components/CollectionPoster/CollectionPoster'
import NewCollectionItems from '../Components/NewCollectionItems/NewCollectionItems'
import Newsletter from '../Components/NewsLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <CollectionPoster/>
      <NewCollectionItems/>
      <Newsletter/>

    </div>
  )
}

export default Shop