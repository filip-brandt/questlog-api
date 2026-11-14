import { useState } from 'react'
import './App.css'
import GameCard from './components/GameCard';
import type { Game } from './types';

function App() {

  const testGames: Game[] = [
    {
      id: '1',
      title: 'Portal',
      platform: 'PC',
      status: 'completed',
      rating: 5,
      coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Portal_standalonebox.jpg',
      notes: 'A first-person puzzle-platformer game developed by Valve Corporation.'
    },
    {
      id: '2',
      title: 'The Legend of Zelda: Breath of the Wild',
      platform: 'Nintendo Switch',
      status: 'playing',
      rating: 4,
      coverUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0b/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
      notes: 'An action-adventure game developed and published by Nintendo.'
    },
    {
      id: '3',
      title: 'Hollow Knight',
      platform: 'PC',
      status: 'want',
      rating: null,
      coverUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Hollow_Knight_cover_art.jpg',
      notes: 'A Metroidvania action-adventure game developed and published by Team Cherry.'
    }
  ];

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
        {testGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
    </div>
  )
}

export default App
