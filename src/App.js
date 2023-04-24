import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Navbar from './Pages/Shared/Navbar/Navbar';
import SecondNavbar from "./Pages/Shared/SecondNavbar/SecondNavbar";

function App() {
  return (
    <div className="max-w-screen-lg m-auto">
      <Navbar></Navbar>
      <SecondNavbar></SecondNavbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
