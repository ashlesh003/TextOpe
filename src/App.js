// With Router...
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }

  const [mode, setMode] = useState('light')
    const toggleMode = (cls)=>{
      removeBodyClasses();
      console.log(cls)
      document.body.classList.add('bg-'+cls)

      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#1B4242';
        // showAlert('Enable Dark Mode.....!',"success");
        document.title = "TextOpe - Dark Mode";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        // showAlert('Enable Light Mode.....!',"success");
        document.title = "TextOpe - Light Mode";
      }

    }
  return (
    <>
    <Router>
      <Navbar title="TextOpe" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm heading="Enter Text:" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div> 
      <Alert alert={alert}/> 
    </Router>
    </>
  );
}

export default App;
