import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { useGame, useUpdateGame, useDeleteGame } from "../hooks/useGames";
import type { GameStatus } from "../types";

export default function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { game, loading, error } = useGame(id);
  const { updateGame, updating, error: updateError } = useUpdateGame();
  const { deleteGame, deleting, error: deleteError } = useDeleteGame();
  const navigate = useNavigate();

  const [status, setStatus] = useState<GameStatus>("want");
  const [rating, setRating] = useState<number | null>(null);
  const [coverUrl, setCoverUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    if (game) {
      setStatus(game.status);
      setRating(game.rating);
      setCoverUrl(game.coverUrl || "");
      setNotes(game.notes);
    }
  }, [game]);

  const handleUpdate = async () => {
    if (!game) return;
    const updated = await updateGame(game.id, {
        status, rating, coverUrl, notes
    });
    if (updated) {
      setSavedMessage(true);
      setTimeout(() => setSavedMessage(false), 3000);
    }
  };

  const handleDelete = async () => {
    if (!game) return;
    const confirmed = window.confirm("Are you sure you want to delete this game?");
    if (confirmed) {
      const success = await deleteGame(game.id);
      if (success) {
        navigate("/");
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!game) return <p>Game not found</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-[#1b2838] text-[#c7d5e0] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
      <img
        src={coverUrl || "https://placehold.co/300x400?text=No+Image"}
        alt={game.title}
        className="w-full aspect-[3/4] object-cover mb-4"
      />
      <p className="mb-2">Platform: {game.platform}</p>
      <p className="mb-2">Cover URL:</p>
      <input
        type="url"
        value={coverUrl}
        onChange={(e) => setCoverUrl(e.target.value)}
        placeholder="https://example.com/cover.jpg"
        className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]"
      />
      <p className="mb-2">Status:</p>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as GameStatus)}
        className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]"
      >
        <option value="completed">Completed</option>
        <option value="playing">Playing</option>
        <option value="want">Want to play</option>
        <option value="dropped">Dropped</option>
      </select>
      <p className="mb-2">Rating:</p>
      <input
        type="number"
        value={rating ?? ""}
        onChange={(e) => setRating(e.target.value ? parseInt(e.target.value) : null)}
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]"
      />
      <p className="mb-2">Notes:</p>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
        className="w-full p-2 mb-4 rounded bg-[#16202d] text-[#c7d5e0]"
      />
      {updateError && <p className="text-red-500">{updateError}</p>}
      <button
        onClick={handleUpdate}
        disabled={updating}
        className="w-full p-2 bg-[#22d3ee] text-black font-bold rounded hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition mb-2"
      >
        {updating ? "Updating..." : "Update Game"}
      </button>
      {savedMessage && <p className="text-[#22d3ee] text-center mb-2 font-semibold">Changes saved!</p>}
      {deleteError && <p className="text-red-500">{deleteError}</p>}
      <button
        onClick={handleDelete}
        disabled={deleting}
        className="w-full p-2 bg-[#ef4444] text-white font-bold rounded hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition"
      >
        {deleting ? "Deleting..." : "Delete Game"}
      </button>
      <Link to="/" className="block mt-4 text-center text-[#22d3ee] hover:underline">
        Back to Games List
      </Link>
    </div>
  );
}