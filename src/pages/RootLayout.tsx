import { Outlet, Link } from 'react-router';    
    
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c7d5e0]">
    <header className="flex justify-between items-center p-6 bg-[#171a21]">
      <Link to="/" className='text-5xl font-bold'
      >Questlog</Link>
      <Link to="/games/new" className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'
      >Add game</Link>
    </header>
    <main>
      <Outlet />
    </main>
    </div>
  )
}