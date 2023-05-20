import './App.css';
import routes from "./Routes/Routes/Routes";
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="bg-white">
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
