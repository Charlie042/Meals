import Search from "./Components/Search"
 import Favourite from "./Components/Favourite"
import Meals from "./Components/Meals"
 import Modal from "./Components/Modal"
import './App.css'
import { useGlobalContext } from "./useGlobalContext"

const App = () => {
  const {showModal,favorites} = useGlobalContext();
  return (
    <div>
      <Search/>
      {favorites.length > 0 && <Favourite/>}
      <Meals/>
      {showModal && <Modal/> }
    </div>
  )
}

export default App