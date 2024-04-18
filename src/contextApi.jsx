import { useContext} from 'react'
import { useEffect } from 'react';
import axios from "axios";
import React from 'react'
import { useState } from 'react';

const AppContext = React.createContext();
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm,setSearchTerm] = useState('')
   


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

    return <AppContext.Provider value = {{loading,meals, selectedMeal,
        setSearchTerm,fetchRandom,showModal,
    selectMeals, closeModal}}>
        {children}
    </AppContext.Provider>
}

// export const useGlobalContext = () => {
//     useContext(AppContext)
// }

export { AppContext, AppProvider}
