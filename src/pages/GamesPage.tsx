  import GameCard from '../components/GameCard';
  import { useGames } from '../hooks/useGames';
  import type { GameStatus } from '../types';
  import { useLocalStorage } from '../hooks/useLocalStorage';
  import StatusFilter from '../components/StatusFilter';

  export default function GamesPage() {
    const [selectedStatus, setSelectedStatus] = useLocalStorage<GameStatus | 'all'>('selectedStatus', 'all');
    const { games, loading, error } = useGames(selectedStatus);

  return (
    <div>
    <StatusFilter selectedStatus={selectedStatus} onSelectStatus={setSelectedStatus} />

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