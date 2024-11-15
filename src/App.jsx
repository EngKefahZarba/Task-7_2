import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)
  const show_decrease = () => {
    const decrease_button = document.getElementById('decrease')
    decrease_button.style.display = 'block'
  }

  const show_popup = () => {
    const popUp = document.querySelector('.pop-up')
    popUp.classList.toggle('showen')
  }

  const changeBg = () => {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'
  }

  useEffect(() => {
    if (count == 10 || count == 100 || count == 1000) {
      show_popup()
      const body = document.querySelector('body')
      body.style.backgroundColor = 'gray'
    }
  }, [count])

  useEffect(() => {
    if (count >= 1000) {
      show_decrease()
    }
  }, [count])

  const Increase = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count < 100 && count >= 10) {
      setCount(count + 10);
    } else if (count < 1000 && count >= 100) {
      setCount(count + 100);
    }
  };
  const Decrease = () => {
    if (count <= 1000 && count > 100) {
      setCount(count - 100);
    } else if (count <= 100 && count > 10) {
      setCount(count - 10);
    } else if (count <= 10) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className='Hero'>
        <h4>Count : {count}</h4>
        <button id='increase' onClick={Increase}>Increase</button>
        <button id='decrease' onClick={Decrease}>Decrease</button>
        <div className='pop-up'>
          <h1>Hello .. How are you?</h1>
          <div className='popup-buttons'>
            <button className='topopup-butn' onClick={show_popup}>OK</button>
            <button id='orginal-bg' onClick={changeBg}>Back To Orginal Color</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App






