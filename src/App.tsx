import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './pages/RootLayout';
import GamesPage from './pages/GamesPage';
import NewGamePage from './pages/NewGamePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <GamesPage /> },
      { path: 'games/new', element: <NewGamePage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}