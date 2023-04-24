import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Benefits from './Pages/Home/Benefits/Benefits';
import Brand from './Pages/Home/Brand/Brand';
import GameProducts from './Pages/Home/GameProducts/GameProducts';
import Navbar from './Pages/Shared/Navbar/Navbar';
import SecondNavbar from "./Pages/Shared/SecondNavbar/SecondNavbar";

function App() {
  return (
    <div className="max-w-screen-lg m-auto bg-[#f8f8f8]">
      <Navbar></Navbar>
      <SecondNavbar></SecondNavbar>
      <Banner></Banner>
      <Benefits></Benefits>
      <GameProducts></GameProducts>
      <Brand></Brand>
    </div>
  );
}

export default App;
