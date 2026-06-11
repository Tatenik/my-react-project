import React from 'react'
import Child from './Child'
import './App.css'
import Modal from '../Modal/modal'



export default function App() {
  return (
    <div>
        <h1>Props children example</h1>
        <Child theme="light">
            <h2>Html content N1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ut dolores voluptatem sed pariatur hic, 
                itaque ducimus optio. Unde maxime deserunt ab amet sapiente repudiandae soluta id. Odio, impedit saepe!</p>
        </Child>
        <Child theme="dark">
            <h2>Html content N2</h2>
            <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
            </ul>
            <button>Read more</button>
        </Child>
        <Modal>
            <h1>Thanks for registration</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ipsam praesentium dolor nisi nesciunt, 
                minima maiores illum, amet sequi doloremque odit nihil blanditiis consequuntur? Sint ipsam aliquid, maxime, explicabo deserunt inventore officia cum laborum odit beatae ipsa? Eligendi, incidunt officia.</p>
        </Modal>
    </div>
  )
}
