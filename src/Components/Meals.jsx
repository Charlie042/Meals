// import React from 'react'
//import { useContext } from "react"
//import { useState } from "react";
import { useGlobalContext } from "../useGlobalContext";
import { FaRegThumbsUp } from "react-icons/fa6";
const Meals = () => {
    
    const {loading, meals, selectMeals} = useGlobalContext();

    if (loading){
        return <section className="section">
            <h4>Loading...</h4>
        </section>
    }
    if (meals.length < 1) {
        return <section className="section">
            <h5>Not found, Please try again!
            </h5>
        </section>
    }
    return (
    <section className="section-center">

        {
            meals.map((singleMeal)=>{
                const { idMeal, strMeal: title,
                     strMealThumb: image } = singleMeal
                return(
                   <article key={idMeal} className="single-meal">
                    <img src={image} alt="image"  className="img" 
                    onClick={()=> {selectMeals(idMeal, singleMeal)}}/>
                    <footer>
                        <h5>{title}</h5>
                        <button className='like-btn'><FaRegThumbsUp />
                        </button>
                    </footer>
                   </article>
                   
                )
            })
        }
            </section>
  )
}

export default Meals