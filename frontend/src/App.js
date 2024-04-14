import React from "react";
import { BrowserRouter} from "react-router-dom";
import NavBar from "./routesAndNav/NavBar";
import RouteList from "./routesAndNav/RouteList";
import './App.css'

function App({isLoading}) {
  
  if (isLoading) {
    return <p>Loading &hellip;</p>;

  }


  return (
    <div className="App">
      
       
      <BrowserRouter>
        <NavBar /> 
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
