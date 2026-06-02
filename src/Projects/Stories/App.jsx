import { useState } from 'react'

import './App.scss'
import List from './List/List'

export default function App() {
    const [stories,setStories] = useState([
        {id: 1, 
        image: '/images/house_1.jpg',
        title: 'Private villa',
        desc: 'beautiful villa'},
        { id: 2,
        image:'/images/house_2.jpg',
        title: 'Private villa',
        desc: 'beautiful villa'},
        {id: 3, 
        image:'/images/house_3.jpg',
        title: 'Private villa',
        desc: 'beautiful villa'},
    ])

    const deleteStorybyId = (id) => {
        setStories((prevStories) => prevStories.filter(elem => elem.id != id))
    }
  return (
    <div className='App'>
        <h1 className='App__title'>Our Stories</h1>
        <p className='App__desc'>Find your perfect place to stay</p>
        <List list={stories} size="xs" deleteItem={deleteStorybyId}/>
    </div>
  )
}
