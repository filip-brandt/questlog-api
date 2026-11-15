  import GameCard from '../components/GameCard';
  import { useGames } from '../hooks/useGames';

  export default function GamesPage() {
    const { games, loading, error } = useGames();

  return (
    <div>
    <nav className='flex justify-center gap-4 p-6 bg-[#171a21]'>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>All</button>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Completed</button>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Playing</button>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Want to play</button>
      <button className='bg-[#22d3ee] text-black font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition'>Dropped</button>
    </nav>

    {loading && <p className='text-center p-6'>Loading games...</p>}
    {error && <p className='text-center p-6 text-red-500'>{error}</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      </div>
  );
}