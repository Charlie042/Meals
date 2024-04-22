import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../useGlobalContext'
import { BsHandThumbsUp } from 'react-icons/bs'

const Meals = () => {
    const {meals,loading,selectMeal,addToFav} = useGlobalContext();

    if(loading) {
        return <section className='section'>
            <h4>loading...</h4>
        </section>
    }
    if(meals.length < 1) {
       return <section className='section'>
            <h4>No item found</h4>
        </section>
    }
    
    return <section className="section-center">
    {meals.map((singleMeal) => {
      const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
      return <article key={idMeal} className="single-meal" >
        <img src={image} className="img" onClick={() => selectMeal(idMeal)} />
        <footer>
          <h5>{title}</h5>
          <button onClick={()=> addToFav(idMeal)} className='like-btn'><BsHandThumbsUp /></button>
        </footer>
      </article>
    })}
  </section>

  
}

export default Meals