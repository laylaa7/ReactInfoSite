import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

export default function Main(){
    return (
        <main>
            <h1 className='Main--Heading'> Fun Facts About React</h1>
            <ul className='Main-Bulletpoints'>
               <li>Was first released in 2013</li>
               <li>Was originally created by Jordan Walke</li>
               <li>Has well over 200K stars on GitHub</li>
               <li>Is maintained by Meta</li>
               <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            </main>
    )
}