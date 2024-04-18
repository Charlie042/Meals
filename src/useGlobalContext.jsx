import { useContext } from "react"
import { AppContext } from "./contextApi"

export const useGlobalContext = () => {
    return useContext(AppContext)
}