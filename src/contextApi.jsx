import React, {  useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const AppContext = React.createContext();
const localStorageItem = () => {
    let favorites = localStorage.getItem('favorites');

    if(favorites) {
        favorites = JSON.parse(localStorage.getItem('favorites'))
    }else {
        favorites= []
    }
    return favorites
}

const AppProvider = ({children}) => {
    const [meals,setMeal] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('')
    const [showModal,setShowModal] = useState(false)
    const [selectedMeal,setSelectedMeals] = useState([])
    const [favorites, setFavorites] = useState(localStorageItem)

    const addToFav = (idMeal) => {
        const meal = meals.find(food => food.idMeal === idMeal)
        const addedFav = favorites.find(food => food.idMeal === idMeal)

        if (addedFav) return 
        const updatedFav = [...favorites,meal]
        setFavorites(updatedFav)
        localStorage.setItem('favorites',JSON.stringify(updatedFav))
    }

    const removeFav = idMeal => {
        const remove = favorites.filter(food => food.idMeal !== idMeal)
        setFavorites(remove)
        localStorage.setItem('favorites',JSON.stringify(remove))
    }
    const selectMeal = (idMeal, favouriteMeal) => {
       let meal
      if(favouriteMeal){
        meal = favorites.find(food => food.idMeal === idMeal)
      } 
       else{
          meal = meals.find(food =>  food.idMeal === idMeal)
       }
        setSelectedMeals(meal)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'


        const fetchData = async(url) => {
            setLoading(true)
            try {
                const {data} = await axios.get(url)
                if(data.meals)
               { 
                setMeal(data.meals)
            }else{
                setMeal([])
            }
            } catch (error) {
                console.log(error.response)
                
            }
            setLoading(false)
        }
        const fetchRandom = () => {
            fetchData(randomMealUrl)
        }

    
        useEffect(()=>{
            if(!search) return
            fetchData(`${allMealUrl}${search}`)
        },[search])

        useEffect(()=>{
            fetchData(allMealUrl)
        },[])
   


    return (
        <AppContext.Provider value={{meals,loading,showModal,selectedMeal,favorites,
        setSearch,fetchRandom,selectMeal,closeModal,removeFav,addToFav}}>
        {children}
        </AppContext.Provider>
    )
}
export {AppContext, AppProvider}