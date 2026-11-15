import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './pages/RootLayout';
import GamesPage from './pages/GamesPage';
import NewGamePage from './pages/NewGamePage';
import GameDetailPage from './pages/GameDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <GamesPage /> },
      { path: 'games/new', element: <NewGamePage /> },
      { path: 'games/:id', element: <GameDetailPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}