import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider } from "react-redux"
import { configStore } from "./state/configStore"
import {Navbar} from "./components/Navbar"
import {ClassVIII} from "./components/ClassVIII"
import { ClassIX } from "./components/ClassIX"
import { ClassX } from "./components/ClassX"
import {CricketTeam } from "./components/CricketTeam";
import { FootballTeam } from "./components/FootballTeam";
import{Coaches} from "./components/Coaches"
import "./components/common.css"
function App() {
  const localStore=configStore()
  return (
    <div className="main">
     <Provider store={localStore}>
     <BrowserRouter>
     <Navbar/>
     <Routes>
<Route path ="/8th" element = {<ClassVIII/>}/>
<Route path ="//9th" element = {<ClassIX/>}/>
<Route path ="/10th" element = {<ClassX/>}/>
<Route path ="/cricinfo" element = {<CricketTeam/>}/>
<Route path ="/footinfo" element = {<FootballTeam/>}/>
<Route path ="/coaches" element = {<Coaches/>}/>

     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;