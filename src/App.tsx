import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c7d5e0]">
    <header className="flex justify-between items-center p-6 bg-[#171a21]">
      <h1>Questlog</h1>
      <button>Add game</button>
    </header>

    <nav className='filter-nav'>
      <button className='bg-[#2a475e] text-[#66c0f4] px-4 py-2 rounded hover:bg-[#66c0f4] hover:text-white cursor-pointer transition'>All</button>
      <button className='bg-[#2a475e] text-[#66c0f4] px-4 py-2 rounded hover:bg-[#66c0f4] hover:text-white cursor-pointer transition'>Completed</button>
      <button className='bg-[#2a475e] text-[#66c0f4] px-4 py-2 rounded hover:bg-[#66c0f4] hover:text-white cursor-pointer transition'>Playing</button>
      <button className='bg-[#2a475e] text-[#66c0f4] px-4 py-2 rounded hover:bg-[#66c0f4] hover:text-white cursor-pointer transition'>Want to play</button>
      <button className='bg-[#2a475e] text-[#66c0f4] px-4 py-2 rounded hover:bg-[#66c0f4] hover:text-white cursor-pointer transition'>Dropped</button>
    </nav>

    <main>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        <article className='bg-[#16202d] rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 transition'>
          <img className='w-full h-72 object-cover' src="https://upload.wikimedia.org/wikipedia/en/9/9f/Portal_standalonebox.jpg" alt="Portal game cover" />
          <h2>Portal</h2>
          <p>A first-person puzzle-platformer game developed by Valve Corporation.</p>
          <p>Status: Completed</p>
          <p>Rating: 5/5</p>
        </article>
      </div>
    </main>
    </div>
  )
}

export default App
