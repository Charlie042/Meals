//import { useContext} from 'react'
import { useEffect } from 'react';
import axios from "axios";
import React from 'react'
import { useState } from 'react';

const AppContext = React.createContext();
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
    const [showModal,setShowModal] = useState(false)
    const [selectMeals,setSelectMeals] = useState()
    const [meals, setMeals] = useState([])
    const [favourite,setFavourite] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm,setSearchTerm] = useState('')


    const addfavourite = (idMeal) =>{
       const meal = meals.find((food)=> food.idMeal === idMeal)
       const addedFav = favourite.find((meal)=> meal.idMeal === idMeal);

       if (addedFav) return
       const updatedFav = [...favourite,meal]
       setFavourite(updatedFav);
    }
    const deleteFavourite = (idMeal) => {
        const updatedFav = favourite.filter((meal)=> meal.idMeal !== idMeal)
        setFavourite(updatedFav)
    } 
    const chooseMeal = (idMeal) => {
        let meal;
       
         meal = meals.find((meal) => meal.idMeal === idMeal);
         
        // Check if meal is found
        if (meal) {
            setShowModal(true);
            setSelectMeals(meal);
        } else {
            console.log("Meal not found");
        }
    }
    
    const closeModal = () => {
        setShowModal(false)
    }
   


    const fetchRandom = () =>{
        fetchMeals(randomMealUrl)
    }
    const fetchMeals = async (url) => {
        setLoading(true)
        try{
             const {data} = await axios.get(url);
             if(data.meals){
        
        setMeals(data.meals)
    }else{
        setMeals([])
    }
       }
       catch(error) {
        console.log(error.response)
       }
       setLoading(false)
    }
    useEffect(()=>{
        if (!searchTerm) return
    fetchMeals(`${allMealsUrl}${searchTerm}`);
    },[searchTerm])

    useEffect(()=>{
        
    fetchMeals(allMealsUrl);
    },[])

    return <AppContext.Provider value = {{loading,meals, chooseMeal,
        setSearchTerm,fetchRandom,showModal,
    selectMeals, closeModal,favourite, deleteFavourite,addfavourite}}>
        {children}
    </AppContext.Provider>
}


// export const useGlobalContext = () => {
//     useContext(AppContext)
// }

export { AppContext, AppProvider}
