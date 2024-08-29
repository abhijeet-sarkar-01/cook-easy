import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Favourites from "./pages/Favourites"
import HomePage from "./components/HomePage"

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/favourites' element={<Favourites />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
