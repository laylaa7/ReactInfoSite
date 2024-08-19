import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'

export default function NavBar(){
    return(
        <div>
            <nav>
            <img src={reactLogo} className="logo" alt="react logo" />
            <h1> React Facts</h1>
            <h2> react course - Proj 1</h2>
            </nav>
            </div>
        
    )
}