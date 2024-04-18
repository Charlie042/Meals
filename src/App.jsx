import Search from "./Components/Search"
// import Favourite from "./Components/Favourite"
import Meals from "./Components/Meals"
 import Modal from "./Components/Modal"
import './App.css'
import { useGlobalContext } from "./useGlobalContext"

const App = () => {
  const {showModal} = useGlobalContext();
  return (
    <div>
      <Search/>
      {/* <Favourite/> */}
      <Meals/>
      {showModal && <Modal/> }
    </div>
  )
}

export default App