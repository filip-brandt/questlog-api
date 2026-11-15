import { useState, useEffect } from 'react';
import type { Game, GameStatus } from '../types';

const BASE_URL = 'https://questlog-api.vercel.app/api/react-dev-46';

export function useGames(status?: GameStatus | 'all') {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchGames() {
            setLoading(true);
            setError(null);

            try {
                const url = status && status !== 'all' ? `${BASE_URL}/games?status=${status}` : `${BASE_URL}/games`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to load games');
                }
                const data: Game[] = await response.json();
                setGames(data);
                }
              catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchGames();
    }, [status]);

    return { games, loading, error };
}

export function useSaveGame() {
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function createGame(gameData: Omit<Game, 'id'>) {
        setSaving(true);
        setError(null);

        try {
            const response = await fetch(`${BASE_URL}/games`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(gameData),
            });

            if (!response.ok) {
                throw new Error('Failed to save the game');
            }

            const savedGame: Game = await response.json();
            return savedGame;
        } catch (err) {
            setError((err as Error).message);
            return null;
        } finally {
            setSaving(false);
        }
    }

    return { createGame, saving, error };
}