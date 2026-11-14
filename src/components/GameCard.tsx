import type { Game } from "../types";

interface GameCardProps {
    game: Game;
}

export default function GameCard({ game }: GameCardProps) {
    return (
            <article className='bg-[#16202d] rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] transition'>
            <img className='w-full aspect-[3/4] object-cover' src={game.coverUrl || 'https://placehold.co/300x400?text=No+Image'} alt={game.title} />
            <div className='text-center p-4'>
            <h2 className='text-3xl font-bold'>{game.title}</h2>
            <p className='text-lg'>Platform: {game.platform}</p>
            <p className='text-lg'>Status: {game.status}</p>
            <p className='text-lg'>Rating: {game.rating}/5</p>
            <p className='text-lg'>Notes: {game.notes}</p>
            </div>
            </article>
        );
}