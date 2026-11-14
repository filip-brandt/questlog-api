export type GameStatus = 'completed' | 'playing' | 'want' | 'dropped';

export interface Game {
    id: string;
    title: string;
    platform: string;
    status: GameStatus;
    rating: number | null;
    coverUrl: string;
    notes: string;
}