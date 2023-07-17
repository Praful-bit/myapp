// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextFrom from './components/TextForm.js';
// import About from './components/About.js'
import Alert from './components/Alert.js';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route } from "react-router-dom";
  
 
 function App() {
  const [mode, setMode ] = useState("light");
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    type: type
  })
  }
   setTimeout(() => {
   setAlert(null);
  }, 1500);
  
 const toggleMode =()=>{
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "#042743";
      showAlert(" Dark mode has been enable"," Success:")
    }
    else{
      setMode("light")
      document.body.style.background ="white";
      showAlert(" Light mode has been enable"," Success:")
    }
  }
  return (
    
   <>
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
   {/* <Router>
   <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/> */}
   <div className='container my-3'>
   <TextFrom showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}/>
     {/* <Switch>
      <Route exact path='/about'>
        <About mode={mode}/>
      </Route> 
       <Route exact path='/'>
        <TextFrom showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}/>
       </Route>
      </Switch>  */}
   </div>
  {/* </Router> */}
   </>
  );
}

export default App;
