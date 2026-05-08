import{useState} from 'react'
import './App.css'
import About from './components/About/About';

function App() {
  const [count, setcount] = useState(0);
  const handleClick = () => {
    setcount(count + 1)
  }

  return (
  <div className='App'>
    <h1>Hello React {count}</h1>
    <button onClick={handleClick}>add Count</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum! Autem labore quasi 
      maxime velit, odio enim amet.</p>
      <hr />
      <About />
  </div>
)
}

export default App
