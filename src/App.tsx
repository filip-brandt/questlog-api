import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c7d5e0]">
    <header className="flex justify-between items-center p-6 bg-[#171a21]">
      <h1 className='text-5xl font-bold'>Questlog</h1>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Add game</button>
    </header>

    <nav className='flex justify-center gap-4 p-6 bg-[#171a21]'>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>All</button>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Completed</button>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Playing</button>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Want to play</button>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Dropped</button>
    </nav>

    <main>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        <article className='bg-[#16202d] rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] transition'>
          <img className='w-full aspect-[3/4] object-cover' src="https://upload.wikimedia.org/wikipedia/en/9/9f/Portal_standalonebox.jpg" alt="Portal game cover" />
          <div className='text-center p-4'>
          <h2 className='text-3xl font-bold'>Portal</h2>
          <p className='text-lg'>A first-person puzzle-platformer game developed by Valve Corporation.</p>
          <p className='text-lg'>Status: Completed</p>
          <p className='text-lg'>Rating: 5/5</p>
          </div>
        </article>
      </div>
    </main>
    </div>
  )
}

export default App
