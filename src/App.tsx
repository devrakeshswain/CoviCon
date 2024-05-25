import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';
import copy from '../src/utils/copy.png';

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App flex flex-col min-h-screen">
      <header className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-yellow-100 bg-indigo-500 font-bold p-4'>
        {
          currentRoute === "/" ? 'Contact Management' : 
          currentRoute === "/dashboard" ? "Charts and Maps" : 
          'Contact Management App'
        }
      </header>
      <div className='flex flex-1 pt-16'>
        <div className='sticky top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div>
      <footer className='w-full text-center py-4 bg-gray-800 text-white flex justify-center items-center'>
        <span className='flex items-center'>
          <img src={copy} alt="Copyright Logo" className='h-6 w-6 mr-2' />
          Copyright 2024, All Rights Reserved By DevRakesh
        </span>
      </footer>
    </div>
  );
}

export default App;
