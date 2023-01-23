import {Routes, Route} from 'react-router-dom'
import Home from "./routes/home/home"
import NavBar from "./components/NavBar/NavBar"



const App = () => {
  return (
  <Routes>
    <Route path="/" element={<NavBar />}>
      <Route index element={  <Home />} />
    </Route>
   

  </Routes>
  )
}

export default App;