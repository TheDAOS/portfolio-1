import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import PersonalProject from './pages/PersonalProject';

function App() {

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <NavBar />
      <div className="snap-start h-screen">
        <Home />
      </div>
      <div className="snap-start h-screen">
        <PersonalProject />
      </div>
      <div className="snap-start h-screen">
        <Home />
      </div>
    </div>
  )
}

export default App;
