import { useState } from 'react';
import type { Game } from '../types';

const BASE_URL = 'https://questlog-api.vercel.app/api/react-dev-46';

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