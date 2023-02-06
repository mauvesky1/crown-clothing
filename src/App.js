import {Routes, Route} from 'react-router-dom'
import Home from "./routes/home/home"
import NavBar from "./components/NavBar/NavBar"
import SignIn from "./routes/SignIn/SignIn"


const App = () => {
  return (
  <Routes>
    <Route path="/" element={<NavBar />}>
      <Route index element={  <Home />} />
      {/* <Route path="shop" element={<Shop />} /> */}
      <Route path="signin" element={  <SignIn />} />

    </Route>
   

  </Routes>
  )
}

export default App;