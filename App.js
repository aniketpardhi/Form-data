// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Components/Pages/Home";
import React from "react";
// function App() {
  
//   return (
//    <Home
//    mytyle={mytyle}
//    display={display}
//    alignItems={alignItem}
//    gap={gap} padding={padding}
//    background={background}/>
   
//   );
// }

// export default App;

// import BodyPartList from "./BodyPartList";
// import Exercisses from "./Components/Exercisses";
// import UseCallBack from "./Hooks/UseCallBack";
// import Uselayout from "./Hooks/Uselayout";
// import Datatable from "./Table/Datatable";

import UserContextProvider from "./MiniContext/UserContextProvider";
import Login from "./Componets/Login";
import Profile from "./Componets/Profile"

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App


