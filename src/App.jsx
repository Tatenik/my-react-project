import{useEffect, useState} from 'react'
import './App.css'
import Modal from "./Projects/Modal/modal"
import axios from "axios";

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [languages, setlanguages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [sortedOption, setsortedOption] = useState(true)
  
  useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/posts',{
    params: {
      _limit: 15,
      _start: 34
    }
   }).then(res => {
    const posts = res.data.map(({id,title}) => ({id,title}))
    setlanguages(posts)
  })
  }, [])
  
  const toggleModal = () => {
    setisOpen(!isOpen)
  }

  const deleteItemByIndex = () => {
    setlanguages((prevArr) => {
      return prevArr.filter(post => post.id !== currentIndex)
    })

  }
const sortedPosts = () => {
  setlanguages (prevPosts => {
    return (
    sortedOption
      ? prevPosts.toSorted((a, b) => a.title > b.title ? 1 : -1)
      : prevPosts.toSorted((a, b) => a.title > b.title ? -1 : 1)
    ) 
  })
  setsortedOption(!sortedOption)
}

  return (
  <div>
    <h1>React repo currentIndex:{currentIndex}</h1>
    <button onClick={sortedPosts}>Sort Posts</button>
    {
      isOpen ? (
      <Modal 
      toggleModal={toggleModal} 
      deleteItemByIndex={deleteItemByIndex}>
        <h2>Are you sure?</h2>
        <button onClick={toggleModal}>cancel</button>
        <button className='btn__delete' onClick={() => {
          toggleModal();
          deleteItemByIndex()
        }}>delete</button>
      </Modal>) 
      : null
    }
    <div className="flex">
      {languages.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>{elem.title}</h2>
            <button onClick={() => {
              toggleModal();
              setCurrentIndex(elem.id)
            }}>Delete</button>
          </div>
        )
      })}

    </div>
  </div>
)
}

export default App
