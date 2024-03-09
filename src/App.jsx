import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data/data.json'
import photo from './assets/fPageBooks.png'
import cLogo from './assets/book-logo.jpg'
import book from './components/Books/Books.jsx'
console.log(data);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='container firstPage'>
        <div className="left-logo">
          <a href="#"><img src={cLogo} width={110} height={100} alt="Book logo" /></a>
        </div>

        <div className="center-menu">
          <a href="#">Podcast</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className="right-menu">
          <button className='login-button'>Log in</button>
        </div>
      </header>

      <main className='container' id='card-block'>

      </main>
    </>
  )
}

export default App
