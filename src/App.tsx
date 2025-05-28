import './App.css'
import Home from './pages/Home'
import NavBar from './pages/NavBar'

function App() {

  return (
    <div className="snap-y snap-mandatory">
      <NavBar />
      <div className="snap-center snap-always">
        <Home />
      </div>
      <div className="snap-center snap-always">
        <Home />
      </div>
      <div className="snap-center snap-always">
        <Home />
      </div>
    </div>
  )
}

export default App
