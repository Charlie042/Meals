import React from 'react'
import { useGlobalContext } from '../useGlobalContext'

const Favourite = () => {
    const {removeFav,selectMeal,favorites} = useGlobalContext()
  return <section className='favorites'>
    <div className='favorites-content'>
        <h5>Favourites</h5>
        <div className='favorites-container'>
    {favorites.map(item => {
        const {idMeal, strMealThumb: image} = item

        return <div key={idMeal} className='favorite-item'>
            <img src={image} className='favorites-img img'
            onClick={()=> selectMeal(idMeal,true)}/>
            <button className='remove-btn' 
            onClick={()=> removeFav(idMeal)}>remove
            </button>
        </div>
    })}
        </div>
    </div>
  </section>
}

export default Favourite