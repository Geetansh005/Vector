import Try from "./Try" 
import Dap from "./Dap"
import Fake from "./Fake"
import { Route,Routes } from "react-router-dom"
function App(){

  return (
    <>
    <Routes>
      <Route path="/" element={<Try />} />
      <Route path="/detail" element={<Dap />} />
      <Route path="/api" element={<Fake />} />
    </Routes>
    </>
  )
}

export default App
