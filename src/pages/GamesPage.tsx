  import GameCard from '../components/GameCard';
  import { useGames } from '../hooks/useGames';
  import type { GameStatus } from '../types';
  import { useLocalStorage } from '../hooks/useLocalStorage';

  export default function GamesPage() {
    const [selectedStatus, setSelectedStatus] = useLocalStorage<GameStatus | 'all'>('selectedStatus', 'all');
    const { games, loading, error } = useGames(selectedStatus);

  return (
    <div>
    <nav className='flex justify-center gap-4 p-6 bg-[#171a21]'>
      <button onClick={() => setSelectedStatus('all')}  className={`font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition ${selectedStatus === 'all' ? 'bg-[#d946ef] text-white' : 'bg-[#22d3ee] text-black'}`}>
        All</button>
      <button onClick={() => setSelectedStatus('completed')} className={`font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition ${selectedStatus === 'completed' ? 'bg-[#d946ef] text-white' : 'bg-[#22d3ee] text-black'}`}>
        Completed</button>
      <button onClick={() => setSelectedStatus('playing')} className={`font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition ${selectedStatus === 'playing' ? 'bg-[#d946ef] text-white' : 'bg-[#22d3ee] text-black'}`}>
        Playing</button>
      <button onClick={() => setSelectedStatus('want')} className={`font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition ${selectedStatus === 'want' ? 'bg-[#d946ef] text-white' : 'bg-[#22d3ee] text-black'}`}>
        Want to play</button>
      <button onClick={() => setSelectedStatus('dropped')} className={`font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition ${selectedStatus === 'dropped' ? 'bg-[#d946ef] text-white' : 'bg-[#22d3ee] text-black'}`}>
        Dropped</button>
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