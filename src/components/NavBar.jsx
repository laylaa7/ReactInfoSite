import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'

export default function NavBar(){
    return(
        
            <nav>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h3 className='navBar--title'> React Facts</h3>
            <h4 className='navBar--info'> react course - Proj 1</h4>
            </nav>
            
        
    )
}