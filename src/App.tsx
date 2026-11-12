import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
    <header className="App-header">
      <h1>Questlog</h1>
      <button>Add game</button>
    </header>

    <nav className='filter-nav'>
      <button>All</button>
      <button>Completed</button>
      <button>Playing</button>
      <button>Want to play</button>
      <button>Dropped</button>
    </nav>

    <main>
      <div className='game-grid'>
        <article className='game-card'>
          <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Portal_standalonebox.jpg" alt="Portal game cover" />
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
