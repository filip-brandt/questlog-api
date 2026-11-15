import { useState } from 'react';
import type { Game, GameStatus } from '../types';
import { useSaveGame } from '../hooks/useGames';
import { useNavigate } from 'react-router';

export default function NewGamePage() {
const [title, setTitle] = useState('');
const [platform, setPlatform] = useState('');
const [status, setStatus] = useState<GameStatus>('want');
const [rating, setRating] = useState<number | null>(null);
const [coverUrl, setCoverUrl] = useState('');
const [notes, setNotes] = useState('');

const { createGame, saving, error } = useSaveGame();
const navigate = useNavigate();

const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
  const newGame: Omit<Game, 'id'> = {
    title,
    platform,
    status,
    rating,
    coverUrl,
    notes
  };
  const saved = await createGame(newGame);
  // Reset form fields
  if (saved) {
    setTitle('');
    setPlatform('');
    setStatus('want');
    setRating(null);
    setCoverUrl('');
    setNotes('');
    navigate('/');
  }
};

return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-[#1b2838] text-[#c7d5e0] rounded-lg shadow-lg">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]" />
        <input value={platform} onChange={(e) => setPlatform(e.target.value)} placeholder="Platform" required className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]" />
        <select value={status} onChange={(e) => setStatus(e.target.value as GameStatus)} className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]">
            <option value="completed">Completed</option>
            <option value="playing">Playing</option>
            <option value="want">Want to play</option>
            <option value="dropped">Dropped</option>
        </select>
        <input type="number" value={rating ?? ''} onChange={(e) => setRating(e.target.value ? parseInt(e.target.value) : null)} placeholder="Rating (1-5)" min="1" max="5" className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]" />
        <input value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} placeholder="Cover URL" className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]" />
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]" />
            {error && <p className="text-red-500">{error}</p>}
        <button type="submit" disabled={saving} className="w-full p-2 bg-[#22d3ee] text-black font-bold rounded hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition">{saving ? 'Saving...' : 'Add Game'}</button>
    </form>
  );
}